import express from "express";
import {
  getRandomUser,
  deleteRandomUserData,
  submitRandomUserData,
  deleteRandomUserDataById,
  getUserById,
} from "../controllers/randomuser.controller";

export const randomUserRouter = express.Router();

randomUserRouter.get("/", getRandomUser);
randomUserRouter.get("/:userId", getUserById);
randomUserRouter.post("/create", submitRandomUserData);
randomUserRouter.delete("/delete-all", deleteRandomUserData);
randomUserRouter.delete("/:userId", deleteRandomUserDataById);
