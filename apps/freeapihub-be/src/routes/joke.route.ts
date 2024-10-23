import express from "express";
import {
  deleteJokeData,
  deleteJokeDataById,
  getJokeById,
  getJokes,
  submitJokeData,
} from "../controllers/joke.controller";

export const jokeRouter = express.Router();

jokeRouter.get("/", getJokes);
jokeRouter.get("/:jokeId", getJokeById);
jokeRouter.post("/create", submitJokeData);
jokeRouter.delete("/delete-all", deleteJokeData);
jokeRouter.delete("/:jokeId", deleteJokeDataById);
