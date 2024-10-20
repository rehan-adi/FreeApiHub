import express, { Request, Response } from 'express';

const app = express();

app.get("/", (req: Request, res: Response) => {
    return res.status(200).json({ success: true, message: "Okay" });
});

app.listen(8080, () => {
    console.log('Server is running');
})