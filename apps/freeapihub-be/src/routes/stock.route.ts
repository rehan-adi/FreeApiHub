import express from "express";
import { getStockById, getStocks } from "../controllers/stock.controller";

export const stockRouter = express.Router();

stockRouter.get("/", getStocks);
stockRouter.get("/:stockId", getStockById);
