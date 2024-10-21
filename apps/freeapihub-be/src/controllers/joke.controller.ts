import prisma from "@freeapihub/db";
import { Request, Response } from "express";

export const getJokes = async (req: Request, res: Response) => {
  try {
    const jokes = await prisma.joke.findMany();

    return res
      .status(200)
      .json({ success: true, data: jokes, message: "ohh no" });
  } catch (error: unknown) {
    const message =
      error instanceof Error ? error.message : "Unknown error occurred";
    console.error("Error fetching jokes:", message);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: message,
    });
  }
};
