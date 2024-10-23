import express from "express";
import {
  getProgrammingLanguage,
  submitProgrammingLanguageData,
} from "../controllers/programmingLanguage.controller";

export const programmingLanguageRouter = express.Router();

programmingLanguageRouter.get("/", getProgrammingLanguage);
programmingLanguageRouter.post("/create", submitProgrammingLanguageData);
