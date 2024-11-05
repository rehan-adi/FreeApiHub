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
 *     description: Discover variety of products including electronics, fashion, and more. Each product listing provides key details such as title, price, stock availability, and ratings to help you make informed decisions.
 */

/**
 * @swagger
 * /api/v1/products:
 *   get:
 *     summary: Retrieve a list of products
 *     description: Get a list of all products with details such as title, price, stock, discount percentage, rating, brand, and images.
 *     tags: [Products]
 *     responses:
 *       200:
 *         description: A list of products.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Product'
 *             examples:
 *               sampleProducts:
 *                 summary: A sample list of products
 *                 value: [
 *                   {
 *                     "id": "123e4567-e89b-12d3-a456-426614174000",
 *                     "title": "Wireless Headphones",
 *                     "description": "High-quality wireless headphones with noise cancellation.",
 *                     "price": 150,
 *                     "discountPercentage": 10,
 *                     "rating": 4.5,
 *                     "stock": 200,
 *                     "brand": "AudioTech",
 *                     "category": "Electronics",
 *                     "thumbnail": "http://example.com/images/headphones_thumbnail.jpg",
 *                     "images": [
 *                       "http://example.com/images/headphones1.jpg",
 *                       "http://example.com/images/headphones2.jpg"
 *                     ]
 *                   }
 *                 ]
 */

/**
 * @swagger
 * /api/v1/products/{productId}:
 *   get:
 *     summary: Retrieve a single product by ID
 *     description: Get detailed information about a specific product, including title, description, price, discount percentage, rating, stock, brand, and images.
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
 *               $ref: '#/components/schemas/Product'
 *             examples:
 *               sampleProduct:
 *                 summary: A sample product detail
 *                 value: {
 *                   "id": "123e4567-e89b-12d3-a456-426614174000",
 *                   "title": "Smartphone",
 *                   "description": "Latest model with 128GB storage and 5G capability.",
 *                   "price": 800,
 *                   "discountPercentage": 5,
 *                   "rating": 4.7,
 *                   "stock": 150,
 *                   "brand": "TechBrand",
 *                   "category": "Mobile Phones",
 *                   "thumbnail": "http://example.com/images/smartphone_thumbnail.jpg",
 *                   "images": [
 *                     "http://example.com/images/smartphone1.jpg",
 *                     "http://example.com/images/smartphone2.jpg"
 *                   ]
 *                 }
 *       404:
 *         description: Product not found
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Product:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           format: uuid
 *           description: Unique identifier for the product (UUID).
 *         title:
 *           type: string
 *           description: The title or name of the product.
 *         description:
 *           type: string
 *           description: A description of the product.
 *         price:
 *           type: integer
 *           description: The price of the product in the selected currency.
 *         discountPercentage:
 *           type: integer
 *           description: The discount percentage offered on the product.
 *         rating:
 *           type: number
 *           format: float
 *           description: Average rating of the product from user reviews.
 *         stock:
 *           type: integer
 *           description: The quantity of the product available in stock.
 *         brand:
 *           type: string
 *           description: The brand associated with the product.
 *         category:
 *           type: string
 *           description: The category or type of the product.
 *         thumbnail:
 *           type: string
 *           description: URL of the product's thumbnail image.
 *         images:
 *           type: array
 *           items:
 *             type: string
 *           description: A list of URLs for images associated with the product.
 */

productRouter.get("/", getProducts);
productRouter.get("/:productId", getProductById);
productRouter.post("/create", submitProductData);
productRouter.delete("/delete-all", deleteProductData);
productRouter.delete("/:productId", deleteProductDataById);
