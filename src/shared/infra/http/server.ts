import 'dotenv/config';
import express from 'express';
import 'express-async-errors';

import { parseErrors } from './middlewares/parseErrors';
import rateLimiter from './middlewares/rateLimiter';
import { router } from './routes';

const app = express();

app.use(rateLimiter);

app.use(express.json());

app.use(router);

app.use(parseErrors);

export { app };
