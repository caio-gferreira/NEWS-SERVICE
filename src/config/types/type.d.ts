import { Application, Request, Response, Express } from 'express';

export declare interface INews {
    text: string;
    title: string;
}

export declare interface INewsController {
    async createNews(valueNews: INews): Promise<INews | undefined>;
    async get(id: string): Promise<INews | undefined>;
    async getAll(qtd?: number, page?:number): Promise<INews[] | undefined>;
}

export declare interface INewsApplication {
    run(): void;
    routes(): void
    connectExpress(): void;
    connectDatabase(): void;
}

export declare interface INewsOptions {
    env: IEnvCredentials;
    service: {
        request: Request;
        response: Response;
        serviceExpress: Express;
        application: Application;
    }
}

export declare interface IEnvCredentials {
    NEWS_PORT_SERVICE: string | undefined;
}