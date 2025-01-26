import express from "express";
import {
  createTodo,
  deleteTodo,
  editTodo,
  getAllTodos,
  toggleTodo,
} from "../controllers/todoController";

const router = express.Router();

router.get("/", getAllTodos);
router.post("/", createTodo);
router.put("/:id", editTodo);
router.patch("/toggle/:id", toggleTodo);
router.put("/delete/:id", deleteTodo);

export { router as todoRoutes };
