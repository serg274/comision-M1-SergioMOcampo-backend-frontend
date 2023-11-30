import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';

import { config } from './src/settings/config.js';
import { startConnection } from './src/settings/database.js';

import { authRouter } from './src/routes/auth.routes.js';
import { travelRouter } from './src/routes/travel.routes.js';
import { validateToken } from './src/middlewares/validate-token.js';
import { authHeader } from './src/models/validations/auth-validation.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
  })
);
app.use(helmet());
app.use(morgan('dev'));

app.use('/api/auth', authRouter);
app.use('/api/travels', authHeader, validateToken, travelRouter);

app.listen(config.port, async () => {
  await startConnection({ uri: config.mongo, database: config.database });
  console.log('Server is running on port: http://localhost:' + config.port);
});
