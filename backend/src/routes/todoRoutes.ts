import express from 'express';
import { TodoController } from '../controllers/todoController';

const router = express.Router();
const todoController = new TodoController();

router.get('/', todoController.getAllTodos);
router.post('/', todoController.createTodo);

export { router as todoRoutes };
