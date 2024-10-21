import express from "express";
import { getJokes, submitJokeData } from "src/controllers/joke.controller";

export const jokeRouter = express.Router();

jokeRouter.get("/jokes", getJokes);
jokeRouter.post("/create", submitJokeData);
