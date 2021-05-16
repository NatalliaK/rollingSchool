import express from 'express';
import swaggerUI from 'swagger-ui-express';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import YAML from 'yamljs';
import { userRouter } from './resources/users/user.router.mjs';
import { taskRouter } from './resources/tasks/task.router.mjs';

export const app = express();
const swaggerDocument = YAML.load(path.join(dirname(fileURLToPath(import.meta.url)), '../doc/api.yaml'));

app.use(express.json());

app.use('/doc', swaggerUI.serve, swaggerUI.setup(swaggerDocument));

app.use('/', (req, res, next) => {
  if (req.originalUrl === '/') {
    res.send('Service is running!');
    return;
  }
  next();
});

app.use('/users', userRouter);
app.use('/tasks', taskRouter);

