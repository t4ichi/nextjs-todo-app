import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export class TodoController {
  async getAllTodos(req: Request, res: Response) {
    try {
      const todos = await prisma.todo.findMany();
      res.json(todos);
    } catch (error) {
      res.status(500).json({ error: 'Error fetching todos' });
    }
  }

  async createTodo(req: Request, res: Response) {
    try {
      const { title } = req.body;
      if (!title) {
        return res.status(400).json({ error: 'Title is required' });
      }
      const newTodo = await prisma.todo.create({
        data: {
          title,
          completed: false
        }
      });
      res.status(201).json(newTodo);
    } catch (error) {
      res.status(500).json({ error: 'Error creating todo' });
    }
  }
}
