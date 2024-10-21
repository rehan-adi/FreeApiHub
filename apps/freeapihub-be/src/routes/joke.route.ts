import express from "express"
import { getJokes } from "src/controllers/joke.controller";

export const jokeRouter = express.Router();

jokeRouter.get("/jokes", getJokes);


