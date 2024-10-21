import express from "express";
import {
  deleteJokeData,
  deleteJokeDataById,
  getJokes,
  submitJokeData,
} from "../controllers/joke.controller";

export const jokeRouter = express.Router();

jokeRouter.get("/", getJokes);
jokeRouter.post("/create", submitJokeData);
jokeRouter.delete("/delete-all", deleteJokeData);
jokeRouter.delete("/delete", deleteJokeDataById);
