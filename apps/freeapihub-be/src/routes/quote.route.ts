import express from "express";
import { getQuotes, submitQuoteData } from "../controllers/quote.controller";

export const quoteRouer = express.Router();

quoteRouer.get("/", getQuotes);
quoteRouer.post("/create", submitQuoteData);