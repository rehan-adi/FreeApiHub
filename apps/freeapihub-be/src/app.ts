import hpp from 'hpp';
import env from'dotenv';
import helmet from 'helmet';
import morgan from 'morgan';
import express, { Request, Response } from 'express';

env.config();

const app = express();

// Middleware 
app.use(express.json());
app.use(hpp());
app.use(helmet());
app.use(morgan('dev'));

// health check route
app.get("/", (req: Request, res: Response) => {
    return res.status(200).json({ success: true, message: "Okay" });
});

app.listen(process.env.PORT, () => {
    console.log(`Server is running on ${process.env.PORT}`);
});
