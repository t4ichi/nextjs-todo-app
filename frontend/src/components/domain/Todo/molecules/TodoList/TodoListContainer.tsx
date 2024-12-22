"use client";
import { useQuery } from "@tanstack/react-query";
import { TodoListPresentational } from "./TodoListPresentational";
import { getAllTodos } from "@/gen/endpoints/todo/todo";

export const TodoList = () => {
  const query = useQuery({ queryKey: ["todos"], queryFn: () => getAllTodos() });

  return <TodoListPresentational todos={query.data ?? []} />;
};
