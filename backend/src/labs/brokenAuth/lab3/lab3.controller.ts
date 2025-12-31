import {Request, Response} from "express";

export const login = async (req: Request, res: Response) => {
    try {
        const username = "user";
        const password = "lifehack";

        if (!req.body.username || !req.body.password) {
            return res.status(400).send("Username and password are required");
        }
        if (req.body.username === username && req.body.password === password) {
            return res.status(200).json({message:"success"})
        }
    }
    catch (e) {
        console.error(e);
    }
    return res.status(401).send("Invalid username or password");
};
