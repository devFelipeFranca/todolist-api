import 'reflect-metadata';
import { createConnection } from 'typeorm';
import * as express from 'express';
import routes from './index.routes';

const app = express();
createConnection();

app.use(express.json());
app.use(routes);

app.listen(3333);
