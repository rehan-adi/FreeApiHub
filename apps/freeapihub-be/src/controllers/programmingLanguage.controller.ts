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

export const submitProgrammingLanguageData = async (
  req: Request,
  res: Response
) => {
  try {
    const {
      name,
      description,
      logoUrl,
      creator,
      foundationYear,
      popularity,
      marketDemand,
      industryUse,
      type,
      version,
      learningDifficulty,
    } = req.body;

    const existingProgrammingLanguage =
      await prisma.programmingLanguage.findFirst({
        where: {
          name,
        },
      });

    if (existingProgrammingLanguage) {
      return res.status(400).json({
        success: false,
        message: "Language with this name already exists",
      });
    }

    const newLanguage = await prisma.programmingLanguage.create({
      data: {
        name,
        description,
        logoUrl,
        creator,
        foundationYear,
        popularity,
        marketDemand,
        industryUse,
        type,
        version,
        learningDifficulty,
      },
    });

    return res.status(201).json({
      success: true,
      data: newLanguage,
      message: "Programming Language added successfully",
    });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Unknown error occurred";
    console.error("Error submiting Programming language:", message);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: message,
    });
  }
};

export const deleteProgrammingLanguageData = async (
  req: Request,
  res: Response
) => {
  try {
    await prisma.programmingLanguage.deleteMany();

    return res
      .status(200)
      .json({
        success: true,
        message: "Programming Language data deleted successfuly",
      });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Unknown error occurred";
    console.error("Error deleting books:", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: message,
    });
  }
};
