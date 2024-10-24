import express from "express";
import {
  deleteBookData,
  deleteBookDataById,
  getBookById,
  getBooks,
  submitBookData,
} from "../controllers/book.controller";

export const bookRouter = express.Router();

/**
 * @swagger
 * /api/v1/books:
 *   get:
 *     summary: Retrieve a list of books
 *     description: Get a list of all books with their details.
 *     responses:
 *       200:
 *         description: A list of books.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                     description: The book ID (UUID).
 *                   name:
 *                     type: string
 *                     description: The name of the book.
 *                   author:
 *                     type: string
 *                     description: The author of the book.
 *                   description:
 *                     type: string
 *                     description: A short description of the book.
 *                   publisher:
 *                     type: string
 *                     description: The publisher of the book.
 *                   publishedAt:
 *                     type: string
 *                     description: The publication date of the book.
 *                   genre:
 *                     type: string
 *                     description: The genre of the book.
 *                   pages:
 *                     type: number
 *                     description: The number of pages in the book.
 *                   imageUrl:
 *                     type: string
 *                     description: URL to the book's cover image.
 *                   rating:
 *                     type: number
 *                     description: The rating of the book.
 */
bookRouter.get("/", getBooks);

/**
 * @swagger
 * /api/v1/books/{bookId}:
 *   get:
 *     summary: Retrieve a single book by ID
 *     description: Get details of a specific book by its ID.
 *     parameters:
 *       - in: path
 *         name: bookId
 *         required: true
 *         schema:
 *           type: string
 *         description: The book ID (UUID)
 *     responses:
 *       200:
 *         description: A single book.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                   description: The book ID (UUID).
 *                 name:
 *                   type: string
 *                   description: The name of the book.
 *                 author:
 *                   type: string
 *                   description: The author of the book.
 *                 description:
 *                   type: string
 *                   description: A short description of the book.
 *                 publisher:
 *                   type: string
 *                   description: The publisher of the book.
 *                 publishedAt:
 *                   type: string
 *                   description: The publication date of the book.
 *                 genre:
 *                   type: string
 *                   description: The genre of the book.
 *                 pages:
 *                   type: number
 *                   description: The number of pages in the book.
 *                 imageUrl:
 *                   type: string
 *                   description: URL to the book's cover image.
 *                 rating:
 *                   type: number
 *                   description: The rating of the book.
 *       404:
 *         description: Book not found
 */
bookRouter.get("/:bookId", getBookById);

bookRouter.post("/create", submitBookData);
bookRouter.post("/delete-all", deleteBookData);
bookRouter.post("/:bookId", deleteBookDataById);
