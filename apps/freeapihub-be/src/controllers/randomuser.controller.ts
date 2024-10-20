import prisma from "@freeapihub/db";
import { Request, Response } from "express";

export const getRandomUser = async (req: Request, res: Response) => {
  try {
    const users = await prisma.randomUser.findMany();
    return res.status(200).json({
      success: true,
      data: users,
      message: "All users retrieved successfully",
    });
  } catch (error: unknown) {
    const message =
      error instanceof Error ? error.message : "Unknown error occurred";
    console.error("Error fetching users:", message);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: message,
    });
  }
};
