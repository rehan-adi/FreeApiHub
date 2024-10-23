import express from "express";
import {
  getProducts,
  submitProductData,
} from "../controllers/product.controller";

export const productRouter = express.Router();

productRouter.get("/", getProducts);
productRouter.post("/create", submitProductData);
