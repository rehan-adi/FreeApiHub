import prisma from "@freeapihub/db/index";
import { Request, Response } from "express";

export const getProgrammingLanguage = async (req: Request, res: Response) => {
  try {
    const programmingLanguages = await prisma.programmingLanguage.findMany();

    return res.status(200).json({
      success: true,
      data: programmingLanguages,
      message: "All programming languages retrieved successfully",
    });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Unknown error occurred";
    console.error("Error fetching programming languages:", message);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: message,
    });
  }
};
