import prisma from "@freeapihub/db/index";
import { Request, Response } from "express";

export const getBooks = async (req: Request, res: Response) => {
  try {
    const books = await prisma.book.findMany();

    return res
      .status(200)
      .json({
        success: false,
        data: books,
        message: "All books retrieved successfully",
      });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Unknown error occurred";
    console.error("Error fetching books:", message);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: message,
    });
  }
};
