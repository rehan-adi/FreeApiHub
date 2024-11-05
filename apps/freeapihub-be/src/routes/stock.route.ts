import express from "express";
import {
  getStocks,
  getStockById,
  submitStockData,
  deleteStockData,
  deleteStockDataById,
} from "../controllers/stock.controller";

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
 *     summary: Retrieve a list of all stocks
 *     description: Fetch a comprehensive list of stocks with details such as stock name, symbol, listing date, and financial metrics.
 *     tags: [Stocks]
 *     responses:
 *       200:
 *         description: A JSON array of stock objects.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Stock'
 *             examples:
 *               example1:
 *                 value:
 *                   - id: "123e4567-e89b-12d3-a456-426614174000"
 *                     name: "Company A"
 *                     symbol: "CMPA"
 *                     listingDate: "2023-01-15"
 *                     isin: "US1234567890"
 *                     marketCap: 1000000000
 *                     currentPrice: 150.75
 *                     highLow: "145.00 - 160.00"
 *                     stockPE: 25.4
 *                     bookValue: 50.2
 *                     dividendYield: 2.5
 *                     roce: 15.0
 *                     roe: 18.0
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /api/v1/stocks/{stockId}:
 *   get:
 *     summary: Retrieve a specific stock by its ID
 *     description: Fetch details of a particular stock using its unique identifier (UUID).
 *     tags: [Stocks]
 *     parameters:
 *       - in: path
 *         name: stockId
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *         description: UUID of the stock to retrieve.
 *     responses:
 *       200:
 *         description: Detailed information about a specific stock.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Stock'
 *             examples:
 *               example1:
 *                 value:
 *                   id: "123e4567-e89b-12d3-a456-426614174000"
 *                   name: "Company A"
 *                   symbol: "CMPA"
 *                   listingDate: "2023-01-15"
 *                   isin: "US1234567890"
 *                   marketCap: 1000000000
 *                   currentPrice: 150.75
 *                   highLow: "145.00 - 160.00"
 *                   stockPE: 25.4
 *                   bookValue: 50.2
 *                   dividendYield: 2.5
 *                   roce: 15.0
 *                   roe: 18.0
 *       404:
 *         description: Stock not found
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Stock:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           format: uuid
 *           description: Unique identifier for the stock.
 *         name:
 *           type: string
 *           description: Full name of the stock.
 *         symbol:
 *           type: string
 *           description: Stock trading symbol.
 *         listingDate:
 *           type: string
 *           format: date
 *           description: Date when the stock was listed.
 *         isin:
 *           type: string
 *           description: International Securities Identification Number.
 *         marketCap:
 *           type: number
 *           format: float
 *           description: Market capitalization value.
 *         currentPrice:
 *           type: number
 *           format: float
 *           description: Latest stock price.
 *         highLow:
 *           type: string
 *           description: Stock's 52-week high and low range.
 *         stockPE:
 *           type: number
 *           format: float
 *           description: Price-to-Earnings (P/E) ratio.
 *         bookValue:
 *           type: number
 *           format: float
 *           description: Book value per share.
 *         dividendYield:
 *           type: number
 *           format: float
 *           description: Dividend yield percentage.
 *         roce:
 *           type: number
 *           format: float
 *           description: Return on Capital Employed (ROCE).
 *         roe:
 *           type: number
 *           format: float
 *           description: Return on Equity (ROE).
 */

stockRouter.get("/", getStocks);
stockRouter.get("/:stockId", getStockById);
stockRouter.post("/create", submitStockData);
stockRouter.delete("/delete-all", deleteStockData);
stockRouter.delete("/:stockId", deleteStockDataById);
