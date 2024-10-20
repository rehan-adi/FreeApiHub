import prisma from "@freeapihub/db/index";
import { raw, Request, Response } from "express";

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

export const submitRandomUserData = async (req: Request, res: Response) => {
  try {
    const {
      gender,
      firstName,
      lastName,
      email,
      username,
      password,
      phone,
      dob,
      age,
      streetNumber,
      streetName,
      city,
      state,
      country,
      postcode,
      picture,
      nationality,
    } = req.body();

    const newUser = await prisma.randomUser.create({
      data: {
        gender,
        firstName,
        lastName,
        email,
        username,
        password,
        phone,
        dob,
        age,
        streetNumber,
        streetName,
        city,
        state,
        country,
        postcode,
        picture,
        nationality,
      },
    });

    return res.status(201).json({
      success: true,
      data: newUser,
      message: "User created successfully",
    });
  } catch (error: unknown) {
    const message =
      error instanceof Error ? error.message : "Unknown error occurred";
    console.error("Error submiting users data", message);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: message,
    });
  }
};

export const deleteRandomUserData = async (req: Request, res: Response) => {
  try {
    await prisma.randomUser.deleteMany();

    return res
      .status(200)
      .json({ success: true, message: "Delete User's data" });
  } catch (error: unknown) {
    const message =
      error instanceof Error ? error.message : "Unknown error occurred";
    console.error("Error deleing users data", message);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: message,
    });
  }
};
