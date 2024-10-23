import prisma from "@freeapihub/db/index";
import { Request, Response } from "express";

export const getJokes = async (req: Request, res: Response) => {
  try {
    const jokes = await prisma.joke.findMany();

    return res
      .status(200)
      .json({ success: true, data: jokes, message: "All jokes retrieved successfully" });
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

export const getJokeById = async (req: Request, res: Response) => {
  try {
    const { jokeId } = req.params;

    const existingJoke = await prisma.joke.findUnique({
      where: {
        id: jokeId,
      },
    });

    if (!existingJoke) {
      return res
        .status(404)
        .json({ success: false, message: "Joke not found" });
    }

    return res
      .status(200)
      .json({ success: true, data: existingJoke, message: "Joke retrieved successfully" });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Unknown error occurred";
    console.error("Error fetching joke:", message);
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

export const deleteJokeData = async (req: Request, res: Response) => {
  try {
    await prisma.joke.deleteMany();

    return res
      .status(200)
      .json({ success: true, message: "Joke data deleted successfuly" });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Unknown error occurred";
    console.error("Error deleting jokes:", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: message,
    });
  }
};

export const deleteJokeDataById = async (req: Request, res: Response) => {
  try {
    const { jokeId } = req.params;

    const something = await prisma.joke.findUnique({
      where: {
        id: jokeId,
      },
    });

    if (!something) {
      return res
        .status(404)
        .json({ success: false, message: "Joke not found" });
    }

    await prisma.joke.delete({
      where: {
        id: jokeId,
      },
    });

    return res
      .status(200)
      .json({ success: true, message: "Joke deleted successfully" });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Unknown error occurred";
    console.error("Error deleting joke by id:", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: message,
    });
  }
};