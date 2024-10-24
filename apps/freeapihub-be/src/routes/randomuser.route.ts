import express from "express";
import {
  getRandomUser,
  deleteRandomUserData,
  submitRandomUserData,
  deleteRandomUserDataById,
  getUserById,
} from "../controllers/randomuser.controller";

export const randomUserRouter = express.Router();

/**
 * @swagger
 * tags:
 *   - name: Random Users
 *     description: Get random user information including personal details and contact information.
 */

/**
 * @swagger
 * /api/v1/random-users:
 *   get:
 *     summary: Retrieve a list of random users
 *     description: Get a list of all random users with details like name, email, and contact information.
 *     tags: [Random Users]
 *     responses:
 *       200:
 *         description: A list of random users.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                     format: cuid
 *                     description: The user ID (CUID).
 *                   gender:
 *                     type: string
 *                     enum: [male, female, other]
 *                     description: The gender of the user.
 *                   firstName:
 *                     type: string
 *                     description: The first name of the user.
 *                   lastName:
 *                     type: string
 *                     description: The last name of the user.
 *                   email:
 *                     type: string
 *                     description: The email address of the user.
 *                   username:
 *                     type: string
 *                     description: The username of the user.
 *                   password:
 *                     type: string
 *                     description: The user's password (should be handled securely).
 *                   phone:
 *                     type: string
 *                     nullable: true
 *                     description: The phone number of the user (optional).
 *                   age:
 *                     type: integer
 *                     description: The age of the user.
 *                   streetNumber:
 *                     type: integer
 *                     description: The street number of the user's address.
 *                   streetName:
 *                     type: string
 *                     nullable: true
 *                     description: The street name of the user's address (optional).
 *                   city:
 *                     type: string
 *                     description: The city of the user.
 *                   state:
 *                     type: string
 *                     description: The state of the user.
 *                   country:
 *                     type: string
 *                     description: The country of the user.
 *                   postcode:
 *                     type: integer
 *                     description: The postal code of the user's address.
 *                   picture:
 *                     type: string
 *                     description: URL of the user's profile picture.
 *                   nationality:
 *                     type: string
 *                     nullable: true
 *                     description: The nationality of the user (optional).
 *                   createdAt:
 *                     type: string
 *                     format: date-time
 *                     description: Timestamp when the user was created.
 *                   updatedAt:
 *                     type: string
 *                     format: date-time
 *                     description: Timestamp when the user was last updated.
 */

/**
 * @swagger
 * /api/v1/random-users/{userId}:
 *   get:
 *     summary: Retrieve a single random user by ID
 *     description: Get details of a specific user by their ID.
 *     tags: [Random Users]
 *     parameters:
 *       - in: path
 *         name: userId
 *         required: true
 *         schema:
 *           type: string
 *           format: cuid
 *         description: The user ID (CUID).
 *     responses:
 *       200:
 *         description: A single random user.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                   format: cuid
 *                   description: The user ID (CUID).
 *                 gender:
 *                   type: string
 *                   enum: [male, female, other]
 *                   description: The gender of the user.
 *                 firstName:
 *                   type: string
 *                   description: The first name of the user.
 *                 lastName:
 *                   type: string
 *                   description: The last name of the user.
 *                 email:
 *                   type: string
 *                   description: The email address of the user.
 *                 username:
 *                   type: string
 *                   description: The username of the user.
 *                 password:
 *                   type: string
 *                   description: The user's password (should be handled securely).
 *                 phone:
 *                   type: string
 *                   nullable: true
 *                   description: The phone number of the user (optional).
 *                 age:
 *                   type: integer
 *                   description: The age of the user.
 *                 streetNumber:
 *                   type: integer
 *                   description: The street number of the user's address.
 *                 streetName:
 *                   type: string
 *                   nullable: true
 *                   description: The street name of the user's address (optional).
 *                 city:
 *                   type: string
 *                   description: The city of the user.
 *                 state:
 *                   type: string
 *                   description: The state of the user.
 *                 country:
 *                   type: string
 *                   description: The country of the user.
 *                 postcode:
 *                   type: integer
 *                   description: The postal code of the user's address.
 *                 picture:
 *                   type: string
 *                   description: URL of the user's profile picture.
 *                 nationality:
 *                   type: string
 *                   nullable: true
 *                   description: The nationality of the user (optional).
 *                 createdAt:
 *                   type: string
 *                   format: date-time
 *                   description: Timestamp when the user was created.
 *                 updatedAt:
 *                   type: string
 *                   format: date-time
 *                   description: Timestamp when the user was last updated.
 *       404:
 *         description: User not found
 */

randomUserRouter.get("/", getRandomUser);
randomUserRouter.get("/:userId", getUserById);
randomUserRouter.post("/create", submitRandomUserData);
randomUserRouter.delete("/delete-all", deleteRandomUserData);
randomUserRouter.delete("/:userId", deleteRandomUserDataById);
