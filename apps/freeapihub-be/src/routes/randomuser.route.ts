import express from "express";
import { getRandomUser } from "../controllers/randomuser.controller";

export const randomUserRouter = express.Router();

randomUserRouter.get("/all", getRandomUser);