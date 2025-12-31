import {Request, Response} from "express";

export const lab2Controller = async (req: Request, res: Response) => {
    try {
        const email = "support@cyberlap.com";
        const password = "cyberlap";

        if (!req.body.email || !req.body.password) {
            return res.status(400).send("Email and password are required");
        }
        if (req.body.email === email && req.body.password === password) {
            return res.status(200).json({userId:"OQ=="})
        }
    }
    catch (e) {
        console.error(e);
    }
    return res.status(401).send("Invalid email or password");
};
;
