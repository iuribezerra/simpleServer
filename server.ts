import express, { Request, Response } from 'express';

const app = express();
const port = 3000;

app.get('/status/:statusCode', (req: Request, res: Response) => {
    const statusCode = Number(req.params.statusCode);
    res.status(statusCode).send(`The status code is: ${statusCode}`);
});

app.get('/delay/:delay', (req: Request, res: Response) => {
    const delay = parseInt(req.params.delay, 10);
    setTimeout(() => {
        res.send(`Response delayed by ${delay} ms`);
    }, delay);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});