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
