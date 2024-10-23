import express from "express";
import {
  deleteBookData,
  deleteBookDataById,
  getBookById,
  getBooks,
  submitBookData,
} from "../controllers/book.controller";

export const bookRouter = express.Router();

bookRouter.get("/", getBooks);
bookRouter.get("/:bookId", getBookById);
bookRouter.post("/create", submitBookData);
bookRouter.post("/delete-all", deleteBookData);
bookRouter.post("/delete", deleteBookDataById);
