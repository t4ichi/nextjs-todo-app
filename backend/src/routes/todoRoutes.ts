import express from "express";
import {
  createTodo,
  deleteTodo,
  editTodo,
  getAllTodos,
} from "../controllers/todoController";

const router = express.Router();

router.get("/", getAllTodos);
router.post("/", createTodo);
router.put("/:id", editTodo);
router.put("/delete/:id", deleteTodo);

export { router as todoRoutes };
