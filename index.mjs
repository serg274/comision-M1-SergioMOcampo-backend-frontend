import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';

import { config } from './src/settings/config.mjs';
import { startConnection } from './src/settings/database.mjs';

import { authRouter } from './src/routes/auth.routes.mjs';
import { travelRouter } from './src/routes/travel.routes.mjs';
import { validateToken } from './src/middlewares/validate-token.mjs';
import { authHeader } from './src/models/validations/auth-validation.mjs';

const app = express();

app.use(express.mjson());
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
