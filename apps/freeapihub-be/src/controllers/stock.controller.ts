import prisma from "@freeapihub/db/index";
import { Request, Response } from "express";

export const getStocks = async (req: Request, res: Response) => {
  try {
    const stocks = await prisma.stock.findMany();

    return res.status(200).json({
      success: true,
      data: stocks,
      message: "All stocks retrieved successfully",
    });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Unknown error occurred";
    console.error("Error fetching stocks:", message);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: message,
    });
  }
};

export const getStockById = async (req: Request, res: Response) => {
  try {
    const { stockId } = req.params;

    const existingStock = await prisma.stock.findUnique({
      where: {
        id: stockId,
      },
    });

    if (!existingStock) {
      return res
        .status(404)
        .json({ success: false, message: "Stock not found" });
    }

    return res
      .status(200)
      .json({ success: true, data: existingStock, message: "Stock data" });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Unknown error occurred";
    console.error("Error fetching stock:", message);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: message,
    });
  }
};

export const submitStockData = async (req: Request, res: Response) => {
  try {
    const {
      name,
      symbol,
      listingDate,
      isin,
      marketCap,
      currentPrice,
      highLow,
      stockPE,
      bookValue,
      dividendYield,
      roce,
      roe,
    } = req.body;

    const existingStock = await prisma.stock.findFirst({
      where: {
        name,
        isin,
      },
    });

    if (existingStock) {
      return res.status(400).json({
        success: false,
        message: "Stock already exists",
      });
    }

    const Stock = await prisma.stock.create({
      data: {
        name,
        symbol,
        listingDate,
        isin,
        marketCap,
        currentPrice,
        highLow,
        stockPE,
        bookValue,
        dividendYield,
        roce,
        roe,
      },
    });

    return res.status(201).json({
      success: true,
      data: Stock,
      message: "Stock created successfully",
    });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Unknown error occurred";
    console.error("Error submiting stock:", message);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: message,
    });
  }
};

export const deleteStockData = async (req: Request, res: Response) => {
  try {
    await prisma.stock.deleteMany();

    return res
      .status(200)
      .json({ success: true, message: "Stock data deleted successfuly" });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Unknown error occurred";
    console.error("Error deleting stocks:", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: message,
    });
  }
};
