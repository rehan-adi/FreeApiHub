import prisma from "@freeapihub/db/index";
import { Request, Response } from "express";

export const getRandomUser = async (req: Request, res: Response) => {
  try {
    const users = await prisma.randomUser.findMany();
    return res
      .status(200)
      .json({ success: true, data: users, message: "All user's" });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ success: false, message: "Failed to get user's" });
  }
};
