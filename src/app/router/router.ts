import { Router, Request, Response } from "express";

export default Router()
    .get('/', (req: Request, res: Response) => {
        const message = 'Hello World'
        console.log({ message });
        res.send({ message })
    })
    .get('/home', (req: Request, res: Response) => {
        const message = 'Teste Home';
        console.log({ message });
        res.send({ message })
    })