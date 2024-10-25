import express from "express";
import { getStockById, getStocks } from "../controllers/stock.controller";

export const stockRouter = express.Router();

/**
 * @swagger
 * tags:
 *   - name: Stocks
 *     description: Manage and access stock market data, including detailed information on stock performance, pricing, and financial metrics.
 */

/**
 * @swagger
 * /api/v1/stocks:
 *   get:
 *     summary: Retrieve a list of stocks
 *     description: Get a list of all stocks with their details, including name, symbol, and market cap.
 *     tags: [Stocks]
 *     responses:
 *       200:
 *         description: A list of stocks.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                     format: uuid
 *                     description: The stock ID (UUID).
 *                   name:
 *                     type: string
 *                     description: The name of the stock.
 *                   symbol:
 *                     type: string
 *                     description: The stock symbol.
 *                   listingDate:
 *                     type: string
 *                     format: date
 *                     description: The date the stock was listed.
 *                   isin:
 *                     type: string
 *                     description: The International Securities Identification Number (ISIN).
 *                   marketCap:
 *                     type: number
 *                     format: float
 *                     description: The market capitalization of the stock.
 *                   currentPrice:
 *                     type: number
 *                     format: float
 *                     description: The current price of the stock.
 *                   highLow:
 *                     type: string
 *                     description: The high and low price range of the stock.
 *                   stockPE:
 *                     type: number
 *                     format: float
 *                     description: The Price-to-Earnings (P/E) ratio of the stock.
 *                   bookValue:
 *                     type: number
 *                     format: float
 *                     description: The book value of the stock.
 *                   dividendYield:
 *                     type: number
 *                     format: float
 *                     description: The dividend yield of the stock.
 *                   roce:
 *                     type: number
 *                     format: float
 *                     description: Return on Capital Employed (ROCE).
 *                   roe:
 *                     type: number
 *                     format: float
 *                     description: Return on Equity (ROE).
 *
 * /api/v1/stocks/{stockId}:
 *   get:
 *     summary: Retrieve a single stock by ID
 *     description: Get details of a specific stock by its ID.
 *     tags: [Stocks]
 *     parameters:
 *       - in: path
 *         name: stockId
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *         description: The stock ID (UUID).
 *     responses:
 *       200:
 *         description: A single stock.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                   format: uuid
 *                   description: The stock ID (UUID).
 *                 name:
 *                   type: string
 *                   description: The name of the stock.
 *                 symbol:
 *                   type: string
 *                   description: The stock symbol.
 *                 listingDate:
 *                   type: string
 *                   format: date
 *                   description: The date the stock was listed.
 *                 isin:
 *                   type: string
 *                   description: The International Securities Identification Number (ISIN).
 *                 marketCap:
 *                   type: number
 *                   format: float
 *                   description: The market capitalization of the stock.
 *                 currentPrice:
 *                   type: number
 *                   format: float
 *                   description: The current price of the stock.
 *                 highLow:
 *                   type: string
 *                   description: The high and low price range of the stock.
 *                 stockPE:
 *                   type: number
 *                   format: float
 *                   description: The Price-to-Earnings (P/E) ratio of the stock.
 *                 bookValue:
 *                   type: number
 *                   format: float
 *                   description: The book value of the stock.
 *                 dividendYield:
 *                   type: number
 *                   format: float
 *                   description: The dividend yield of the stock.
 *                 roce:
 *                   type: number
 *                   format: float
 *                   description: Return on Capital Employed (ROCE).
 *                 roe:
 *                   type: number
 *                   format: float
 *                   description: Return on Equity (ROE).
 *       404:
 *         description: Stock not found
 *     security:
 *       - api_key: []
 */

stockRouter.get("/", getStocks);
stockRouter.get("/:stockId", getStockById);
