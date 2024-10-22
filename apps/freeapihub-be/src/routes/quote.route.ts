import express from "express";
import {
  deleteQuoteData,
  deleteQuoteDataById,
  getQuotes,
  submitQuoteData,
} from "../controllers/quote.controller";

export const quoteRouter = express.Router();

quoteRouter.get("/", getQuotes);
quoteRouter.post("/create", submitQuoteData);
quoteRouter.delete("/delete-all", deleteQuoteData);
quoteRouter.delete("/delete", deleteQuoteDataById);
