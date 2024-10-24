import express from "express";
import {
  deleteProductData,
  deleteProductDataById,
  getProductById,
  getProducts,
  submitProductData,
} from "../controllers/product.controller";

export const productRouter = express.Router();

productRouter.get("/", getProducts);
productRouter.get("/:productId", getProductById);
productRouter.post("/create", submitProductData);
productRouter.post("/delete-all", deleteProductData);
productRouter.post("/:productId", deleteProductDataById);
