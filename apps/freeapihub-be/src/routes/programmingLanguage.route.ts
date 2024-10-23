import express from "express";
import {
  deleteProgrammingLanguageData,
  deleteProgrammingLanguageDataById,
  getProgrammingLanguage,
  submitProgrammingLanguageData,
} from "../controllers/programmingLanguage.controller";

export const programmingLanguageRouter = express.Router();

programmingLanguageRouter.get("/", getProgrammingLanguage);
programmingLanguageRouter.post("/create", submitProgrammingLanguageData);
programmingLanguageRouter.delete("/delete-all", deleteProgrammingLanguageData);
programmingLanguageRouter.delete("/delete", deleteProgrammingLanguageDataById);
