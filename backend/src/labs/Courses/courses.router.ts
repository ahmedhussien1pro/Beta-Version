// router.ts

import express from "express";
import { updateFavorite, registerCourse } from "./courses.controller";

const courses = express.Router();

// Endpoint for updating favorite status.
courses.post("/favorite", updateFavorite);

// Endpoint for course registration.
courses.post("/register", registerCourse);

export default courses;
