import { Router, Request, Response } from "express";
import { controllers } from "../../controllers";
import { message } from "../../messages/messages";

export default Router()
    .get('/news:createNew', async (req: Request, res: Response) => {
        const { query } = req;

        if (query.text && query.title) {
            const response = await controllers.newsController.createNews({ text: query.text.toString(), title: query.title.toString() });
            return res.json({
                status: 200,
                response
            })
        };

        return res.json({ 
            message: message.MISSING_PARAMETER_OF_CREATE_NEW,
            status: 200
        })
    })