import express from 'express';
import { todoRoutes } from './routes/todoRoutes';

const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());

app.use('/api/todos', todoRoutes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
