"use client";
import { getAllTodos, type Todo } from "@/app/api/fetchTodos";
import { useQuery } from "@tanstack/react-query";
import { TodoListPresentational } from "./TodoListPresentational";

export const TodoList = () => {
  const query = useQuery({ queryKey: ["todos"], queryFn: () => getAllTodos() });

  return <TodoListPresentational todos={query.data ?? []} />;
};
