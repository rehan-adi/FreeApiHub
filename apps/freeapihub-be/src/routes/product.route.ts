import express from "express";
import {
  deleteProductData,
  deleteProductDataById,
  getProductById,
  getProducts,
  submitProductData,
} from "../controllers/product.controller";

export const productRouter = express.Router();

/**
 * @swagger
 * tags:
 *   - name: Products
 *     description: Browse and view product information including title, price, stock, and ratings.
 */

/**
 * @swagger
 * /api/v1/products:
 *   get:
 *     summary: Retrieve a list of products
 *     description: Get a list of all products with details like title, price, stock, and ratings.
 *     tags: [Products]
 *     responses:
 *       200:
 *         description: A list of products.
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
 *                     description: The product ID (UUID).
 *                   title:
 *                     type: string
 *                     description: The title of the product.
 *                   description:
 *                     type: string
 *                     description: A description of the product.
 *                   price:
 *                     type: integer
 *                     description: The price of the product.
 *                   discountPercentage:
 *                     type: integer
 *                     description: The discount percentage on the product.
 *                   rating:
 *                     type: integer
 *                     description: The rating of the product.
 *                   stock:
 *                     type: integer
 *                     description: The available stock of the product.
 *                   brand:
 *                     type: string
 *                     description: The brand of the product.
 *                   category:
 *                     type: string
 *                     description: The category of the product.
 *                   thumbnail:
 *                     type: string
 *                     description: URL of the product's thumbnail image.
 *                   images:
 *                     type: array
 *                     items:
 *                       type: string
 *                     description: A list of URLs for the product's images.
 */

/**
 * @swagger
 * /api/v1/products/{productId}:
 *   get:
 *     summary: Retrieve a single product by ID
 *     description: Get details of a specific product by its ID.
 *     tags: [Products]
 *     parameters:
 *       - in: path
 *         name: productId
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *         description: The product ID (UUID).
 *     responses:
 *       200:
 *         description: A single product.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                   format: uuid
 *                   description: The product ID (UUID).
 *                 title:
 *                   type: string
 *                   description: The title of the product.
 *                 description:
 *                   type: string
 *                   description: A description of the product.
 *                 price:
 *                   type: integer
 *                   description: The price of the product.
 *                 discountPercentage:
 *                   type: integer
 *                   description: The discount percentage on the product.
 *                 rating:
 *                   type: integer
 *                   description: The rating of the product.
 *                 stock:
 *                   type: integer
 *                   description: The available stock of the product.
 *                 brand:
 *                   type: string
 *                   description: The brand of the product.
 *                 category:
 *                   type: string
 *                   description: The category of the product.
 *                 thumbnail:
 *                   type: string
 *                   description: URL of the product's thumbnail image.
 *                 images:
 *                   type: array
 *                   items:
 *                     type: string
 *                   description: A list of URLs for the product's images.
 *       404:
 *         description: Product not found
 */

productRouter.get("/", getProducts);
productRouter.get("/:productId", getProductById);
productRouter.post("/create", submitProductData);
productRouter.delete("/delete-all", deleteProductData);
productRouter.delete("/:productId", deleteProductDataById);
