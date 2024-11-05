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
 *     description: API endpoints to retrieve random user information, including personal details and contact information.
 */

/**
 * @swagger
 * /api/v1/random-users:
 *   get:
 *     summary: Retrieve a list of random users
 *     description: Fetch a list of random users, with fields like name, email, contact details, and address.
 *     tags: [Random Users]
 *     responses:
 *       200:
 *         description: A list of random users.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/RandomUser'
 *             examples:
 *               exampleList:
 *                 summary: Sample random users list
 *                 value: [
 *                   {
 *                     "id": "cksjkz3h5x0000t8z78gg6y92",
 *                     "gender": "male",
 *                     "firstName": "John",
 *                     "lastName": "Doe",
 *                     "email": "john.doe@example.com",
 *                     "username": "johndoe",
 *                     "password": "hashed_password",
 *                     "phone": "123-456-7890",
 *                     "age": 30,
 *                     "streetNumber": 123,
 *                     "streetName": "Main St",
 *                     "city": "New York",
 *                     "state": "NY",
 *                     "country": "USA",
 *                     "postcode": 10001,
 *                     "picture": "https://example.com/images/johndoe.jpg",
 *                     "nationality": "American",
 *                     "createdAt": "2024-01-01T12:00:00Z",
 *                     "updatedAt": "2024-01-02T12:00:00Z"
 *                   }
 *                 ]
 */

/**
 * @swagger
 * /api/v1/random-users/{userId}:
 *   get:
 *     summary: Retrieve a random user by ID
 *     description: Get details of a specific user by their unique CUID.
 *     tags: [Random Users]
 *     parameters:
 *       - in: path
 *         name: userId
 *         required: true
 *         schema:
 *           type: string
 *           format: cuid
 *         description: The unique CUID of the user.
 *     responses:
 *       200:
 *         description: Details of the specified random user.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/RandomUser'
 *             examples:
 *               exampleUser:
 *                 summary: Example random user
 *                 value: {
 *                   "id": "cksjkz3h5x0000t8z78gg6y92",
 *                   "gender": "female",
 *                   "firstName": "Jane",
 *                   "lastName": "Smith",
 *                   "email": "jane.smith@example.com",
 *                   "username": "janesmith",
 *                   "password": "hashed_password",
 *                   "phone": "987-654-3210",
 *                   "age": 25,
 *                   "streetNumber": 456,
 *                   "streetName": "Elm St",
 *                   "city": "Los Angeles",
 *                   "state": "CA",
 *                   "country": "USA",
 *                   "postcode": 90001,
 *                   "picture": "https://example.com/images/janesmith.jpg",
 *                   "nationality": "American",
 *                   "createdAt": "2024-01-01T12:00:00Z",
 *                   "updatedAt": "2024-01-02T12:00:00Z"
 *                 }
 *       404:
 *         description: User not found
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     RandomUser:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           format: cuid
 *           description: Unique identifier for the user (CUID).
 *         gender:
 *           type: string
 *           enum: [male, female, other]
 *           description: Gender of the user.
 *         firstName:
 *           type: string
 *           description: First name of the user.
 *         lastName:
 *           type: string
 *           description: Last name of the user.
 *         email:
 *           type: string
 *           format: email
 *           description: Email address of the user.
 *         username:
 *           type: string
 *           description: Username selected by the user.
 *         password:
 *           type: string
 *           description: Hashed password for secure authentication.
 *         phone:
 *           type: string
 *           nullable: true
 *           description: Optional contact phone number.
 *         age:
 *           type: integer
 *           description: Age of the user.
 *         streetNumber:
 *           type: integer
 *           description: Street number of the user's residence.
 *         streetName:
 *           type: string
 *           nullable: true
 *           description: Optional street name of the user's address.
 *         city:
 *           type: string
 *           description: City of residence.
 *         state:
 *           type: string
 *           description: State of residence.
 *         country:
 *           type: string
 *           description: Country of residence.
 *         postcode:
 *           type: integer
 *           description: Postal code of the address.
 *         picture:
 *           type: string
 *           format: uri
 *           description: URL of the user's profile image.
 *         nationality:
 *           type: string
 *           nullable: true
 *           description: Nationality, if available.
 *         createdAt:
 *           type: string
 *           format: date-time
 *           description: Date and time when the user was created.
 *         updatedAt:
 *           type: string
 *           format: date-time
 *           description: Date and time when the user was last updated.
 */

randomUserRouter.get("/", getRandomUser);
randomUserRouter.get("/:userId", getUserById);
randomUserRouter.post("/create", submitRandomUserData);
randomUserRouter.delete("/delete-all", deleteRandomUserData);
randomUserRouter.delete("/:userId", deleteRandomUserDataById);
