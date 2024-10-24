import express from "express";
import {
  deleteProgrammingLanguageData,
  deleteProgrammingLanguageDataById,
  getProgrammingLanguage,
  getProgrammingLanguageById,
  submitProgrammingLanguageData,
} from "../controllers/programmingLanguage.controller";

export const programmingLanguageRouter = express.Router();

/**
 * @swagger
 * tags:
 *   - name: Programming Languages
 *     description: Explore programming languages with details like name, description, popularity, and usage.
 */

/**
 * @swagger
 * /api/v1/programming-languages:
 *   get:
 *     summary: Retrieve a list of programming languages
 *     description: Get a list of all programming languages with details including name, description, and popularity.
 *     tags: [Programming Languages]
 *     responses:
 *       200:
 *         description: A list of programming languages.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                     format: uuid
 *                     description: The programming language ID (UUID).
 *                   name:
 *                     type: string
 *                     description: The name of the programming language.
 *                   description:
 *                     type: string
 *                     description: A description of the programming language.
 *                   logoUrl:
 *                     type: string
 *                     description: URL of the programming language's logo.
 *                   creator:
 *                     type: string
 *                     description: The creator of the programming language.
 *                   foundationYear:
 *                     type: integer
 *                     description: The year the programming language was founded.
 *                   popularity:
 *                     type: integer
 *                     description: Popularity rating of the programming language.
 *                   marketDemand:
 *                     type: integer
 *                     description: Market demand rating for the programming language.
 *                   industryUse:
 *                     type: string
 *                     description: Industries that commonly use the programming language.
 *                   type:
 *                     type: string
 *                     description: The type of programming language (e.g., compiled, interpreted).
 *                   version:
 *                     type: string
 *                     description: The current version of the programming language.
 *                   learningDifficulty:
 *                     type: integer
 *                     description: Difficulty level for learning the programming language (scale of 1-10).
 */

/**
 * @swagger
 * /api/v1/programming-languages/{languageId}:
 *   get:
 *     summary: Retrieve a single programming language by ID
 *     description: Get details of a specific programming language by its ID.
 *     tags: [Programming Languages]
 *     parameters:
 *       - in: path
 *         name: languageId
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *         description: The programming language ID (UUID).
 *     responses:
 *       200:
 *         description: A single programming language.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                   format: uuid
 *                   description: The programming language ID (UUID).
 *                 name:
 *                   type: string
 *                   description: The name of the programming language.
 *                 description:
 *                   type: string
 *                   description: A description of the programming language.
 *                 logoUrl:
 *                   type: string
 *                   description: URL of the programming language's logo.
 *                 creator:
 *                   type: string
 *                   description: The creator of the programming language.
 *                 foundationYear:
 *                   type: integer
 *                   description: The year the programming language was founded.
 *                 popularity:
 *                   type: integer
 *                   description: Popularity rating of the programming language.
 *                 marketDemand:
 *                   type: integer
 *                   description: Market demand rating for the programming language.
 *                 industryUse:
 *                   type: string
 *                   description: Industries that commonly use the programming language.
 *                 type:
 *                   type: string
 *                   description: The type of programming language (e.g., compiled, interpreted).
 *                 version:
 *                   type: string
 *                   description: The current version of the programming language.
 *                 learningDifficulty:
 *                   type: integer
 *                   description: Difficulty level for learning the programming language (scale of 1-10).
 *       404:
 *         description: Programming language not found
 */

programmingLanguageRouter.get("/", getProgrammingLanguage);
programmingLanguageRouter.get("/:languageId", getProgrammingLanguageById);
programmingLanguageRouter.post("/create", submitProgrammingLanguageData);
programmingLanguageRouter.delete("/delete-all", deleteProgrammingLanguageData);
programmingLanguageRouter.delete(
  "/:languageId",
  deleteProgrammingLanguageDataById
);
