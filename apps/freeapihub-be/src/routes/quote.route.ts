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
 *     description: Manage and explore quotes with details such as author, content, rating, likes, and category.
 */

/**
 * @swagger
 * /api/v1/quotes:
 *   get:
 *     summary: Retrieve a list of quotes
 *     description: Get a list of all quotes, including information on author, content, ratings, and popularity metrics.
 *     tags: [Quotes]
 *     responses:
 *       200:
 *         description: A list of quotes.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Quote'
 *             examples:
 *               sampleQuotes:
 *                 summary: Sample list of quotes
 *                 value: [
 *                   {
 *                     "id": "f47ac10b-58cc-4372-a567-0e02b2c3d479",
 *                     "author": "Albert Einstein",
 *                     "content": "Life is like riding a bicycle. To keep your balance, you must keep moving.",
 *                     "rate": 9,
 *                     "likes": 120,
 *                     "dislikes": 5,
 *                     "category": "Inspirational"
 *                   }
 *                 ]
 */

/**
 * @swagger
 * /api/v1/quotes/{quoteId}:
 *   get:
 *     summary: Retrieve a single quote by ID
 *     description: Retrieve details of a specific quote by its unique ID.
 *     tags: [Quotes]
 *     parameters:
 *       - in: path
 *         name: quoteId
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *         description: The unique identifier for the quote.
 *     responses:
 *       200:
 *         description: Details of a specific quote.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Quote'
 *             examples:
 *               sampleQuote:
 *                 summary: Example of a single quote
 *                 value: {
 *                   "id": "f47ac10b-58cc-4372-a567-0e02b2c3d479",
 *                   "author": "Maya Angelou",
 *                   "content": "You will face many defeats in life, but never let yourself be defeated.",
 *                   "rate": 8,
 *                   "likes": 200,
 *                   "dislikes": 10,
 *                   "category": "Motivational"
 *                 }
 *       404:
 *         description: Quote not found
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Quote:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           format: uuid
 *           description: Unique identifier for the quote (UUID).
 *         author:
 *           type: string
 *           description: Name of the person who authored the quote.
 *         content:
 *           type: string
 *           description: The main content or message of the quote.
 *         rate:
 *           type: integer
 *           description: The rating of the quote (scale of 1-10).
 *         likes:
 *           type: integer
 *           description: The number of times users have liked the quote.
 *         dislikes:
 *           type: integer
 *           description: The number of times users have disliked the quote.
 *         category:
 *           type: string
 *           nullable: true
 *           description: The category to which the quote belongs, such as "Inspirational" or "Motivational".
 */

quoteRouter.get("/", getQuotes);
quoteRouter.get("/:quoteId", getQuoteById);
quoteRouter.post("/create", submitQuoteData);
quoteRouter.delete("/delete-all", deleteQuoteData);
quoteRouter.delete("/:quoteId", deleteQuoteDataById);
