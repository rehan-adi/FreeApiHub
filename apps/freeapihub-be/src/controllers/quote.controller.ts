import prisma from "@freeapihub/db/index";
import { Request, Response } from "express";

export const getQuotes = async (req: Request, res: Response) => {
  try {
    const quotes = await prisma.quote.findMany();

    return res
      .status(200)
      .json({
        success: true,
        data: quotes,
        message: "All quotes retrieved successfully",
      });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Unknown error occurred";
    console.error("Error fetching quotes:", message);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: message,
    });
  }
};
