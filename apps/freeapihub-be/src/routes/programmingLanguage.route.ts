import express from "express";
import { getProgrammingLanguage } from "../controllers/programmingLanguage.controller";

export const programmingLanguageRouter = express.Router();

programmingLanguageRouter.get("/", getProgrammingLanguage);
