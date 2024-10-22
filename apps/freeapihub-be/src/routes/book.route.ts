import express from "express";
import {
  deleteBookData,
  getBooks,
  submitBookData,
} from "../controllers/book.controller";

export const bookRouter = express.Router();

bookRouter.get("/", getBooks);
bookRouter.post("/create", submitBookData);
bookRouter.post("/delete-all", deleteBookData);
