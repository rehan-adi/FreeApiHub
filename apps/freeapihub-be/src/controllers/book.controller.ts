import prisma from "@freeapihub/db/index";
import { Request, Response } from "express";

export const getBooks = async (req: Request, res: Response) => {
  try {
    const books = await prisma.book.findMany();

    return res.status(200).json({
      success: true,
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

export const submitBookData = async (req: Request, res: Response) => {
  try {
    const {
      name,
      author,
      description,
      publisher,
      publishedAt,
      genre,
      pages,
      imageUrl,
      rating,
    } = req.body;

    const existingBook = await prisma.book.findFirst({
      where: {
        name,
      },
    });

    if (existingBook) {
      return res.status(400).json({
        success: false,
        message: "Book with this name already exists",
      });
    }

    const newBook = await prisma.book.create({
      data: {
        name,
        author,
        description,
        publisher,
        publishedAt,
        genre,
        pages,
        imageUrl,
        rating,
      },
    });

    return res.status(201).json({
      success: true,
      data: newBook,
      message: "Books created successfully",
    });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Unknown error occurred";
    console.error("Error submiting books:", message);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: message,
    });
  }
};

export const deleteBookData = async (req: Request, res: Response) => {
  try {
    await prisma.book.deleteMany();

    return res
      .status(200)
      .json({ success: true, message: "Book data deleted successfuly" });
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