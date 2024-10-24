import express from "express";
import {
  deleteJokeData,
  deleteJokeDataById,
  getJokeById,
  getJokes,
  submitJokeData,
} from "../controllers/joke.controller";

export const jokeRouter = express.Router();

/**
 * @swagger
 * tags:
 *   - name: Jokes
 *     description: Explore jokes with details like author, content, ratings, likes, and dislikes. You can view all jokes here.
 */

/**
 * @swagger
 * /api/v1/jokes:
 *   get:
 *     summary: Retrieve a list of jokes
 *     description: Get a list of all jokes with details, including author, content, and rating.
 *     tags: [Jokes]
 *     responses:
 *       200:
 *         description: A list of jokes.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                     format: uuid
 *                     description: The joke ID (UUID).
 *                   author:
 *                     type: string
 *                     description: The author of the joke.
 *                   content:
 *                     type: string
 *                     description: The content of the joke.
 *                   rate:
 *                     type: integer
 *                     description: The rating of the joke.
 *                   likes:
 *                     type: integer
 *                     description: The number of likes the joke has received.
 *                   dislikes:
 *                     type: integer
 *                     description: The number of dislikes the joke has received.
 *                   category:
 *                     type: string
 *                     nullable: true
 *                     description: The category of the joke (if applicable).
 *     security:
 *       - api_key: []
 */

/**
 * @swagger
 * /api/v1/jokes/{jokeId}:
 *   get:
 *     summary: Retrieve a single joke by ID
 *     description: Get details of a specific joke by its ID.
 *     tags: [Jokes]
 *     parameters:
 *       - in: path
 *         name: jokeId
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *         description: The joke ID (UUID).
 *     responses:
 *       200:
 *         description: A single joke.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                   format: uuid
 *                   description: The joke ID (UUID).
 *                 author:
 *                   type: string
 *                   description: The author of the joke.
 *                 content:
 *                   type: string
 *                   description: The content of the joke.
 *                 rate:
 *                   type: integer
 *                   description: The rating of the joke.
 *                 likes:
 *                   type: integer
 *                   description: The number of likes the joke has received.
 *                 dislikes:
 *                   type: integer
 *                   description: The number of dislikes the joke has received.
 *                 category:
 *                   type: string
 *                   nullable: true
 *                   description: The category of the joke (if applicable).
 *       404:
 *         description: Joke not found
 *     security:
 *       - api_key: []
 */

jokeRouter.get("/", getJokes);
jokeRouter.get("/:jokeId", getJokeById);
jokeRouter.post("/create", submitJokeData);
jokeRouter.delete("/delete-all", deleteJokeData);
jokeRouter.delete("/:jokeId", deleteJokeDataById);
