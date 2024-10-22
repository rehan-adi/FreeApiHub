import express from "express";
import { getQuotes } from "src/controllers/quote.controller";

export const quoteRouer = express.Router();

quoteRouer.get("/", getQuotes);