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
 *     description: Discover various programming languages with details like origin, popularity, industry demand, and learning difficulty.
 */

/**
 * @swagger
 * /api/v1/programming-languages:
 *   get:
 *     summary: Retrieve a list of programming languages
 *     description: Fetch a comprehensive list of programming languages with details such as their creator, foundation year, popularity, industry usage, and learning difficulty.
 *     tags: [Programming Languages]
 *     responses:
 *       200:
 *         description: A list of programming languages.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/ProgrammingLanguage'
 *             examples:
 *               sampleLanguages:
 *                 summary: Sample list of programming languages
 *                 value: [
 *                   {
 *                     "id": "123e4567-e89b-12d3-a456-426614174000",
 *                     "name": "JavaScript",
 *                     "description": "A versatile language commonly used for web development.",
 *                     "logoUrl": "http://example.com/images/javascript_logo.jpg",
 *                     "creator": "Brendan Eich",
 *                     "foundationYear": 1995,
 *                     "popularity": 9,
 *                     "marketDemand": 8,
 *                     "industryUse": "Web Development, Mobile Apps",
 *                     "type": "Interpreted",
 *                     "version": "ES2022",
 *                     "learningDifficulty": 3
 *                   }
 *                 ]
 */

/**
 * @swagger
 * /api/v1/programming-languages/{languageId}:
 *   get:
 *     summary: Retrieve a specific programming language by ID
 *     description: Retrieve detailed information about a specific programming language, including its creator, foundation year, popularity, and current version.
 *     tags: [Programming Languages]
 *     parameters:
 *       - in: path
 *         name: languageId
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *         description: The unique identifier (UUID) for the programming language.
 *     responses:
 *       200:
 *         description: Details of a specific programming language.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ProgrammingLanguage'
 *             examples:
 *               sampleLanguage:
 *                 summary: Sample programming language details
 *                 value: {
 *                   "id": "123e4567-e89b-12d3-a456-426614174000",
 *                   "name": "Python",
 *                   "description": "A high-level language known for readability and wide applicability.",
 *                   "logoUrl": "http://example.com/images/python_logo.jpg",
 *                   "creator": "Guido van Rossum",
 *                   "foundationYear": 1991,
 *                   "popularity": 10,
 *                   "marketDemand": 9,
 *                   "industryUse": "Data Science, Web Development, Automation",
 *                   "type": "Interpreted",
 *                   "version": "3.10",
 *                   "learningDifficulty": 2
 *                 }
 *       404:
 *         description: Programming language not found
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     ProgrammingLanguage:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           format: uuid
 *           description: Unique identifier for the programming language (UUID).
 *         name:
 *           type: string
 *           description: Name of the programming language.
 *         description:
 *           type: string
 *           description: Brief description of the programming language and its use.
 *         logoUrl:
 *           type: string
 *           description: URL of the programming language's logo.
 *         creator:
 *           type: string
 *           description: The individual or organization that created the language.
 *         foundationYear:
 *           type: integer
 *           description: The year the language was initially developed.
 *         popularity:
 *           type: integer
 *           description: Popularity rating (scale of 1-10).
 *         marketDemand:
 *           type: integer
 *           description: Market demand rating (scale of 1-10).
 *         industryUse:
 *           type: string
 *           description: Common industries where the language is widely used.
 *         type:
 *           type: string
 *           description: The classification of the language (e.g., compiled, interpreted).
 *         version:
 *           type: string
 *           description: The most recent version of the language.
 *         learningDifficulty:
 *           type: integer
 *           description: Difficulty level for learning the language (scale of 1-10).
 */

programmingLanguageRouter.get("/", getProgrammingLanguage);
programmingLanguageRouter.get("/:languageId", getProgrammingLanguageById);
programmingLanguageRouter.post("/create", submitProgrammingLanguageData);
programmingLanguageRouter.delete("/delete-all", deleteProgrammingLanguageData);
programmingLanguageRouter.delete(
  "/:languageId",
  deleteProgrammingLanguageDataById
);
