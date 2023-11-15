import { Application, Request, Response, Express } from 'express';

export declare interface INews {
    text: string;
    title: string;
    image: string;
    autor: string;
    link: string;
    publicationDate: string;
}

export declare interface INewsController {
    get(id: string): Promise<INews>;
    getAll(qtd: number, page?: number): Promise<INews[]>
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