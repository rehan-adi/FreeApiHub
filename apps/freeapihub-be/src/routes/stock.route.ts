import express from 'express';
import { getStocks } from '../controllers/stock.controller';

export const stockRouter = express.Router();

stockRouter.get("/", getStocks);