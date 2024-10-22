import prisma from "@freeapihub/db/index";
import { Request, Response } from "express";

export const getQuotes = async (req: Request, res: Response) => {
  try {
    const quotes = await prisma.quote.findMany();

    return res.status(200).json({
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

export const submitQuoteData = async (req: Request, res: Response) => {
  try {
    const { author, content, rate, likes, dislikes, category } = req.body;

    const existingQuote = await prisma.quote.findFirst({
      where: {
        content,
      },
    });

    if (existingQuote) {
      return res.status(400).json({
        success: false,
        message: "Quote with this content already exists",
      });
    }

    const newQuote = await prisma.quote.create({
      data: {
        author,
        content,
        rate,
        likes,
        dislikes,
        category,
      },
    });

    return res.status(201).json({
      success: true,
      data: newQuote,
      message: "Quote created successfully",
    });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Unknown error occurred";
    console.error("Error submiing quote:", message);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: message,
    });
  }
};

export const deleteQuoteData = async (req: Request, res: Response) => {
  try {
    await prisma.quote.deleteMany();

    return res
      .status(200)
      .json({ success: true, message: "Quote data deleted successfuly" });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Unknown error occurred";
    console.error("Error deleting quotes:", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: message,
    });
  }
};

export const deleteQuoteDataById = async (req: Request, res: Response) => {
  try {
    const { quoteId } = req.body;

    const existingQuote = await prisma.quote.findUnique({
      where: {
        id: quoteId,
      },
    });

    if (!existingQuote) {
      return res
        .status(404)
        .json({ success: false, message: "Quote not found" });
    }

    await prisma.quote.delete({
      where: {
        id: quoteId,
      },
    });

    return res
      .status(200)
      .json({ success: true, message: "Quote deleted successfully" });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Unknown error occurred";
    console.error("Error deleting quote by id:", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: message,
    });
  }
};
