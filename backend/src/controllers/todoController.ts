import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getAllTodos = async (req: Request, res: Response) => {
  try {
    const todos = await prisma.todo.findMany();
    res.json(todos);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch todos" });
  }
};

export const createTodo = async (req: Request, res: Response) => {
  try {
    const { title } = req.body;
    if (!title) {
      return res.status(400).json({ error: "Title is required" });
    }
    const newTodo = await prisma.todo.create({
      data: {
        title,
        completed: false,
      },
    });
    res.status(201).json(newTodo);
  } catch (error) {
    res.status(500).json({ error: "Failed to create todo" });
  }
};

export const editTodo = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { title, completed } = req.body;

    if (!title && completed === undefined) {
      return res
        .status(400)
        .json({ error: "Title or completed status is required" });
    }

    const updatedTodo = await prisma.todo.update({
      where: { id: Number(id) },
      data: {
        ...(title && { title }),
        ...(completed !== undefined && { completed }),
      },
    });

    res.json(updatedTodo);
  } catch (error) {
    res.status(500).json({ error: "Failed to update todo" });
  }
};

export const deleteTodo = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const todo = await prisma.todo.findUnique({
      where: { id: Number(id) },
    });

    if (!todo) {
      return res.status(404).json({ error: "Todo not found" });
    }

    if (todo.deletedAt) {
      return res.status(400).json({ error: "Todo is already deleted" });
    }

    await prisma.todo.update({
      where: { id: Number(id) },
      data: {
        deletedAt: new Date(),
      },
    });

    return res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: "Failed to delete todo" });
  }
};
