import express from "express";
import {
  deleteQuoteData,
  deleteQuoteDataById,
  getQuoteById,
  getQuotes,
  submitQuoteData,
} from "../controllers/quote.controller";

export const quoteRouter = express.Router();

/**
 * @swagger
 * tags:
 *   - name: Quotes
 *     description: Manage quotes with details like author, content, ratings, and categories.
 */

/**
 * @swagger
 * /api/v1/quotes:
 *   get:
 *     summary: Retrieve a list of quotes
 *     description: Get a list of all quotes with details including author, content, ratings, and likes.
 *     tags: [Quotes]
 *     responses:
 *       200:
 *         description: A list of quotes.
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
 *                     description: The quote ID (UUID).
 *                   author:
 *                     type: string
 *                     description: The author of the quote.
 *                   content:
 *                     type: string
 *                     description: The content of the quote.
 *                   rate:
 *                     type: integer
 *                     description: The rating of the quote.
 *                   likes:
 *                     type: integer
 *                     description: The number of likes the quote has received.
 *                   dislikes:
 *                     type: integer
 *                     description: The number of dislikes the quote has received.
 *                   category:
 *                     type: string
 *                     nullable: true
 *                     description: The category of the quote (optional).
 */

/**
 * @swagger
 * /api/v1/quotes/{quoteId}:
 *   get:
 *     summary: Retrieve a single quote by ID
 *     description: Get details of a specific quote by its ID.
 *     tags: [Quotes]
 *     parameters:
 *       - in: path
 *         name: quoteId
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *         description: The quote ID (UUID).
 *     responses:
 *       200:
 *         description: A single quote.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                   format: uuid
 *                   description: The quote ID (UUID).
 *                 author:
 *                   type: string
 *                   description: The author of the quote.
 *                 content:
 *                   type: string
 *                   description: The content of the quote.
 *                 rate:
 *                   type: integer
 *                   description: The rating of the quote.
 *                 likes:
 *                   type: integer
 *                   description: The number of likes the quote has received.
 *                 dislikes:
 *                   type: integer
 *                   description: The number of dislikes the quote has received.
 *                 category:
 *                   type: string
 *                   nullable: true
 *                   description: The category of the quote (optional).
 *       404:
 *         description: Quote not found
 */

quoteRouter.get("/", getQuotes);
quoteRouter.get("/:quoteId", getQuoteById);
quoteRouter.post("/create", submitQuoteData);
quoteRouter.delete("/delete-all", deleteQuoteData);
quoteRouter.delete("/:quoteId", deleteQuoteDataById);
