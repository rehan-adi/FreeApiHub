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

export const submitJokeData = async (req: Request, res: Response) => {
  try {
    const { author, content, rate, likes, dislikes, category } = req.body;

    const existingJoke = await prisma.joke.findFirst({
      where: {
        content: content,
      },
    });

    if (existingJoke) {
      return res.status(400).json({
        success: false,
        message: "Joke with this content already exists",
      });
    }

    const newJoke = await prisma.joke.create({
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
      data: newJoke,
      message: "Joke created successfully",
    });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Unknown error occurred";
    console.error("Error submiting jokes:", message);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: message,
    });
  }
};
