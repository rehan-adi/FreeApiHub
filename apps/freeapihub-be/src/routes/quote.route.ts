import express from "express";
import {
  deleteQuoteData,
  deleteQuoteDataById,
  getQuoteById,
  getQuotes,
  submitQuoteData,
} from "../controllers/quote.controller";

export const quoteRouter = express.Router();

quoteRouter.get("/", getQuotes);
quoteRouter.get("/:quoteId", getQuoteById);
quoteRouter.post("/create", submitQuoteData);
quoteRouter.delete("/delete-all", deleteQuoteData);
quoteRouter.delete("/:quoteId", deleteQuoteDataById);
