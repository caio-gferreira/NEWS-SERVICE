import { INews, INewsController } from '../config/types/type';

export class NewsControllers implements INewsController {
    get(id: string): Promise<INews> {
        throw new Error('Method not implemented.');
    }

    getAll(qtd: number, page?: number | undefined): Promise<INews[]> {
        throw new Error('Method not implemented.');
    }

}