import hpp from 'hpp';
import env from'dotenv';
import helmet from 'helmet';
import morgan from 'morgan';
import rateLimit from 'express-rate-limit';
import express, { Request, Response } from 'express';

import { jokeRouter } from './routes/joke.route';
import { randomUserRouter } from './routes/randomuser.route';

env.config();

const app = express();

const limit = rateLimit({
    windowMs: 5 * 60 * 1000,
    max: 50,
    message: 'Too many requests from this IP, please try again after 5 minutes'
});

// Middleware 
app.use(express.json());
app.use(hpp());
app.use(limit);
app.use(helmet());
app.use(morgan('dev'));

// health check route
app.get("/", (req: Request, res: Response) => {
    return res.status(200).json({ success: true, message: "Okay" });
});

// routes 
app.use("/api/v1/jokes", jokeRouter);
app.use("/api/v1/randomusers", randomUserRouter);

app.listen(process.env.PORT, () => {
    console.log(`Server is running on ${process.env.PORT}`);
});
