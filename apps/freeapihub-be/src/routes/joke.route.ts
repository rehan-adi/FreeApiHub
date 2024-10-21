import express from "express";
import {
  deleteJokeData,
  getJokes,
  submitJokeData,
} from "src/controllers/joke.controller";

export const jokeRouter = express.Router();

jokeRouter.get("/", getJokes);
jokeRouter.post("/create", submitJokeData);
jokeRouter.delete("/delete-all", deleteJokeData);
