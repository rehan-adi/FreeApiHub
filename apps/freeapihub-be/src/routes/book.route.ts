import express from 'express'
import { getBooks } from '../controllers/book.controller';

export const bookRouter = express.Router();

bookRouter.get("/", getBooks);