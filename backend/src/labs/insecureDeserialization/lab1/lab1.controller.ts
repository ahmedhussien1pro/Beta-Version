import { Request, Response } from "express";

export const loginController = async (req: Request, res: Response) => {


    const { username, password, session } = req.body;

    // Handle "test" user login
    if ((username === "test" && password === "test" )|| session === "Tzo0OiJVc2VyIjoyOntzOjg6InVzZXJuYW1lIjtzOjQ6InRlc3QiO3M6ODoidXNlcm5hbWUiO3M6NDoic2Vzc2lvbiI7fQ==") {
        return res.status(200).json({ message: "Login successful", data: { username } });
    }

    // Handle "admin" user login
    if ((username === "admin" && password === "admin") || (session === "Tzo0OiJVc2VyIjoyOntzOjg6InVzZXJuYW1lIjtzOjQ6ImFkbWluIjtzOjg6InBhc3N3b3JkIjtzOjQ6ImFkbWluIjt9")) {

        return res.status(200).json({ message: "Login successful", data: { username } });
    }

    // Invalid credentials
    return res.status(401).json({ error: "Invalid username or password" });
};