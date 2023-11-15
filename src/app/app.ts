import { IEnvCredentials, INewsApplication } from "../config/types/type";
import express, { Application } from 'express';
import router from "./router/router";

export class NewsApplication implements INewsApplication {
    private app: Application;
    private env: IEnvCredentials
    constructor(env: IEnvCredentials) {
        this.app = express()
        this.env = env;
        this.routes();
    }

    run(): void {
        const { NEWS_PORT_SERVICE } = this.env;
        this.app.listen(NEWS_PORT_SERVICE, () => {
            console.log(`Server Running on port: ${ NEWS_PORT_SERVICE }`);
            console.log(`Use http://localhost:${ NEWS_PORT_SERVICE }`);
        });
    }

    routes(): void {
        this.app.use(router);
    }

    connectExpress(): void {
     
    }

    connectDatabase(): void {
        
    }
};