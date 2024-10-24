import express from "express";
import {
  deleteProgrammingLanguageData,
  deleteProgrammingLanguageDataById,
  getProgrammingLanguage,
  getProgrammingLanguageById,
  submitProgrammingLanguageData,
} from "../controllers/programmingLanguage.controller";

export const programmingLanguageRouter = express.Router();

programmingLanguageRouter.get("/", getProgrammingLanguage);
programmingLanguageRouter.get("/:languageId", getProgrammingLanguageById);
programmingLanguageRouter.post("/create", submitProgrammingLanguageData);
programmingLanguageRouter.delete("/delete-all", deleteProgrammingLanguageData);
programmingLanguageRouter.delete("/:languageId", deleteProgrammingLanguageDataById);
