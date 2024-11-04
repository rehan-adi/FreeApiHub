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
 * tags:
 *   - name: Books
 *     description: Endpoints for retrieving book data, including fetching details of individual books and listing all available books.
 */

/**
 * @swagger
 * /api/v1/books:
 *   get:
 *     summary: Retrieve a list of books
 *     description: Fetches a list of all books along with detailed information, including the author, genre, pages, and user rating.
 *     tags: [Books]
 *     responses:
 *       200:
 *         description: A list of books with detailed information.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Book'
 *             examples:
 *               sampleBooks:
 *                 summary: A sample list of books
 *                 value: [
 *                   {
 *                     "id": "123e4567-e89b-12d3-a456-426614174000",
 *                     "name": "The Great Gatsby",
 *                     "author": "F. Scott Fitzgerald",
 *                     "description": "A novel about the American dream...",
 *                     "publisher": "Scribner",
 *                     "publishedAt": "1925-04-10",
 *                     "genre": "Fiction",
 *                     "pages": 218,
 *                     "imageUrl": "http://example.com/image.jpg",
 *                     "rating": 4.2
 *                   }
 *                 ]
 */

/**
 * @swagger
 * /api/v1/books/{bookId}:
 *   get:
 *     summary: Retrieve a single book by ID
 *     description: Retrieves detailed information about a specific book using its unique ID.
 *     tags: [Books]
 *     parameters:
 *       - in: path
 *         name: bookId
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *         description: The unique identifier of the book.
 *     responses:
 *       200:
 *         description: Information about a specific book.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Book'
 *             examples:
 *               sampleBook:
 *                 summary: A sample book detail
 *                 value: {
 *                   "id": "123e4567-e89b-12d3-a456-426614174000",
 *                   "name": "The Great Gatsby",
 *                   "author": "F. Scott Fitzgerald",
 *                   "description": "A novel about the American dream...",
 *                   "publisher": "Scribner",
 *                   "publishedAt": "1925-04-10",
 *                   "genre": "Fiction",
 *                   "pages": 218,
 *                   "imageUrl": "http://example.com/image.jpg",
 *                   "rating": 4.2
 *                 }
 *       404:
 *         description: Book not found
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Book:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           format: uuid
 *           description: The unique identifier for the book.
 *         name:
 *           type: string
 *           description: The title of the book.
 *         author:
 *           type: string
 *           description: The author of the book.
 *         description:
 *           type: string
 *           description: A brief description or synopsis of the book.
 *         publisher:
 *           type: string
 *           description: The publishing company.
 *         publishedAt:
 *           type: string
 *           format: date
 *           description: The date when the book was published.
 *         genre:
 *           type: string
 *           description: The genre or category of the book.
 *         pages:
 *           type: integer
 *           description: The total number of pages.
 *         imageUrl:
 *           type: string
 *           format: uri
 *           description: URL to the cover image of the book.
 *         rating:
 *           type: number
 *           format: float
 *           description: The average user rating for the book, ranging from 0 to 5.
 */

bookRouter.get("/", getBooks);
bookRouter.get("/:bookId", getBookById);
bookRouter.post("/create", submitBookData);
bookRouter.delete("/delete-all", deleteBookData);
bookRouter.delete("/:bookId", deleteBookDataById);
