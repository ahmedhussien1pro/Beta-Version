import { Request, Response } from "express";
import prisma from "../../../utilities/db";
import axios from "axios";

// External API URL for fetching product details
const PRODUCT_API_URL = "https://fakestoreapi.com/products";

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

// ---------- LOGIN ENDPOINT ----------

export const loginUser = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  try {
    // Find the user by email using the BLVulnUser model
    const user = await prisma.bLVulnUser.findUnique({ where: { email } });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Compare the provided password with the stored password.
    // NOTE: In production, passwords must be hashed and securely compared.
    if (user.password !== password) {
      return res.status(401).json({ message: "Invalid password" });
    }

    // Return user data for the client to store locally
    res.status(200).json({
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
        balance: user.balance,
      },
    });
  } catch (error) {
    res.status(500).json({ message: "Login failed", error });
  }
};

// ---------- CART ENDPOINTS ----------

// Add item to cart
export const addToCart = async (req: Request, res: Response) => {
  const { userId, productId, quantity } = req.body;

  try {
    // Check if the user exists using the BLVulnUser model
    const user = await prisma.bLVulnUser.findUnique({ where: { id: userId } });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Fetch product details from external API with type assertion
    const productResponse = await axios.get<Product>(
      `${PRODUCT_API_URL}/${productId}`
    );
    const product = productResponse.data;

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    // Add item to the cart using the BLVulnCartItem model
    const cartItem = await prisma.bLVulnCartItem.create({
      data: {
        userId,
        productId,
        quantity,
      },
    });

    res.status(201).json(cartItem);
  } catch (error) {
    res.status(500).json({ message: "Error adding item to cart", error });
  }
};

// Get cart details and calculate total cost
export const getCart = async (req: Request, res: Response) => {
  const { userId } = req.params;

  try {
    // Fetch user and their cart items using the BLVulnUser model
    const user = await prisma.bLVulnUser.findUnique({
      where: { id: parseInt(userId, 10) },
      include: { cartItems: true },
    });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Fetch product details for each cart item from the external API
    const cartItemsWithDetails = await Promise.all(
      user.cartItems.map(async (item) => {
        const productResponse = await axios.get<Product>(
          `${PRODUCT_API_URL}/${item.productId}`
        );
        const product = productResponse.data;
        return {
          ...item,
          product,
          totalPrice: product.price * item.quantity, // Calculate total price for this item
        };
      })
    );

    // Calculate total cost of the cart
    const totalCost = cartItemsWithDetails.reduce(
      (sum, item) => sum + item.totalPrice,
      0
    );

    res.status(200).json({
      user: { email: user.email, name: user.name, balance: user.balance },
      cartItems: cartItemsWithDetails,
      totalCost,
      canCheckout: user.balance >= totalCost, // Check if user can afford the cart
    });
  } catch (error) {
    res.status(500).json({ message: "Error fetching cart details", error });
  }
};

// Checkout cart with updated payload structure
export const checkoutCart = async (req: Request, res: Response) => {
  const { userId } = req.params;
  // Expecting payload: { items: [{id, price, quantity}], totalPrice, userBalance }
  const { items, totalPrice } = req.body;

  try {
    // Fetch user and their current balance using the BLVulnUser model
    const user = await prisma.bLVulnUser.findUnique({
      where: { id: parseInt(userId, 10) },
    });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Validate that the user's current balance is sufficient
    if (user.balance < totalPrice) {
      return res.status(400).json({ message: "Insufficient balance" });
    }

    // Optionally, verify each item price with the external API (omitted for brevity)

    // Deduct the total price from the user's balance
    await prisma.bLVulnUser.update({
      where: { id: user.id },
      data: { balance: user.balance - totalPrice },
    });

    // Clear the user's cart items using the BLVulnCartItem model
    await prisma.bLVulnCartItem.deleteMany({
      where: { userId: user.id },
    });

    res.status(200).json({ message: "Checkout successful", totalPrice });
  } catch (error) {
    res.status(500).json({ message: "Error during checkout", error });
  }
};
