import { Router } from "express";
import { isAuthenticated } from "../utilities/auth";
import {
    createNewUser,
    deleteUser,
    getAllUsers,
    getUserById,
    getUserByToken,
    addPersonalInfo,
    resetPassword,
    updateUser, upload, saveImage,
    contactUs

} from "./dashboard.controller";

let dashboardRouter = Router();

//admin
dashboardRouter.get("/users", isAuthenticated, getAllUsers)

dashboardRouter.get("/user/:id", isAuthenticated, getUserById)

dashboardRouter.post("/user/add", createNewUser)

dashboardRouter.get("/currentUser/:id", getUserById)

dashboardRouter.put("/user/edit/:id", updateUser)

dashboardRouter.delete("/user/:id", deleteUser)

//user
dashboardRouter.get("/user", isAuthenticated, getUserByToken)

dashboardRouter.post("/dataUser", isAuthenticated, upload.single("image"), saveImage, addPersonalInfo)

dashboardRouter.post("/reset-password", isAuthenticated, resetPassword)

dashboardRouter.get("/personalInfo", isAuthenticated, getUserByToken)

dashboardRouter.post("/contactWithUs", contactUs);
export default dashboardRouter;