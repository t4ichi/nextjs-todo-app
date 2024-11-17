import express from "express";
import {
  createTodo,
  editTodo,
  getAllTodos,
} from "../controllers/todoController";

const router = express.Router();

router.get("/", getAllTodos);
router.post("/", createTodo);
router.put("/:id", editTodo);

export { router as todoRoutes };
