import express from 'express';
import cors from 'cors';
import { todoRoutes } from './routes/todoRoutes';

const app = express();
const port = process.env.PORT || 3001;

app.use(cors({
  origin: ['http://localhost:3000', 'http://frontend:3000'],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json());

app.use('/api/todos', todoRoutes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

export default app;
