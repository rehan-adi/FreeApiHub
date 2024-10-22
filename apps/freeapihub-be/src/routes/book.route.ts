import express from "express";
import { getBooks, submitBookData } from "../controllers/book.controller";

export const bookRouter = express.Router();

bookRouter.get("/", getBooks);
bookRouter.post("/create", submitBookData);
