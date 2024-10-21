import express from "express";
import {
  getRandomUser,
  deleteRandomUserData,
  submitRandomUserData,
  deleteRandomUserDataById,
} from "../controllers/randomuser.controller";

export const randomUserRouter = express.Router();

randomUserRouter.get("/", getRandomUser);
randomUserRouter.post("/create", submitRandomUserData);
randomUserRouter.delete("/delete-all", deleteRandomUserData);
randomUserRouter.delete("/delete", deleteRandomUserDataById);
