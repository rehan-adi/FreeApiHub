import express from "express";
import {
  getRandomUser,
  submitRandomUserData,
} from "../controllers/randomuser.controller";

export const randomUserRouter = express.Router();

randomUserRouter.get("/all", getRandomUser);
randomUserRouter.post("/create", submitRandomUserData);
