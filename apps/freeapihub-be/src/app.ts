import hpp from "hpp";
import env from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
import rateLimit from "express-rate-limit";
import swaggerUi from 'swagger-ui-express';
import express, { Request, Response } from "express";

import { OpenAPISpecs } from "./utils/swagger";
import { bookRouter } from "./routes/book.route";
import { jokeRouter } from "./routes/joke.route";
import { quoteRouter } from "./routes/quote.route";
import { productRouter } from "./routes/product.route";
import { randomUserRouter } from "./routes/randomuser.route";
import { programmingLanguageRouter } from "./routes/programmingLanguage.route";

env.config();

const app = express();

const limit = rateLimit({
  windowMs: 5 * 60 * 1000,
  max: 50,
  message: "Too many requests from this IP, please try again after 5 minutes",
});

// Swagger API documentation
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(OpenAPISpecs));

// Middleware
app.use(express.json());
app.use(hpp());
app.use(limit);
app.use(helmet());
app.use(morgan("dev"));

// health check route
app.get("/", (req: Request, res: Response) => {
  return res.status(200).json({ success: true, message: "Okay" });
});

// routes
app.use("/api/v1/jokes", jokeRouter);
app.use("/api/v1/books", bookRouter);
app.use("/api/v1/quotes", quoteRouter);
app.use("/api/v1/products", productRouter);
app.use("/api/v1/randomusers", randomUserRouter);
app.use("/api/v1/programming-languages", programmingLanguageRouter);

app.listen(process.env.PORT || 8080, () => {
  console.log(`Server is running on ${process.env.PORT}`);
});
