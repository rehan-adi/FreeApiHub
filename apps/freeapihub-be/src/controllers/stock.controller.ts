import prisma from "@freeapihub/db/index";
import { Request, Response } from "express";

export const getStocks = async(req: Request, res: Response) => {
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
}