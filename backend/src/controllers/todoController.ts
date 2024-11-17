import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getAllTodos = async (req: Request, res: Response) => {
  try {
    const todos = await prisma.todo.findMany();
    res.json(todos);
  } catch (error) {}
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
  } catch (error) {}
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
        title,
        completed,
      },
    });

    res.json(updatedTodo);
  } catch (error) {}
};
