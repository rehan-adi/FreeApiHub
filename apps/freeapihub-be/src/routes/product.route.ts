import express from "express";
import {
  deleteProductData,
  deleteProductDataById,
  getProducts,
  submitProductData,
} from "../controllers/product.controller";

export const productRouter = express.Router();

productRouter.get("/", getProducts);
productRouter.post("/create", submitProductData);
productRouter.post("/delete-all", deleteProductData);
productRouter.post("/delete", deleteProductDataById);
