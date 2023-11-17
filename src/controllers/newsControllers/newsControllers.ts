import { INews, INewsController } from '../../config/types/type';
import { Request, Response } from "express";

export class NewsControllers implements INewsController {
    async createNews(valueNews: INews): Promise<INews | undefined> {
        try {
            return valueNews;
        } catch(err) {
            console.error(err);
        }
    }
    async get(id: string): Promise<INews | undefined> {
        throw new Error('Method not implemented.');
    }
    async getAll(qtd?: number | undefined, page?: number | undefined): Promise<INews[] | undefined> {
        throw new Error('Method not implemented.');
    }

};
