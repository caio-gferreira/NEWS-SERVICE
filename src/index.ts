import { NewsApplication } from "./app/app";
import env from './config/env';

const application: NewsApplication = new NewsApplication(env);
application.run();