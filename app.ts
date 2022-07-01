import express, { Express } from 'express';
import basicRoutes from './routes/basic';

const app: Express = express();

app.use('/example', basicRoutes);

app.listen(8000, () => {
  console.log('Server is running on port 8000');
});
