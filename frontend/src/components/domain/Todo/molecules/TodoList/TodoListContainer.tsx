"use client";
import type { Todo } from "@/gen/models";
import { TodoListPresentational } from "./TodoListPresentational";
import { useGetAllTodos } from "@/gen/endpoints/todo/todo";

export const TodoList = () => {
  const query = useGetAllTodos({ query: { queryKey: ["todos"] } });

  if (query.isLoading) {
    return <div>Loading...</div>;
  }

  if (query.error) {
    return <div>{query}</div>;
  }
  console.log(query.data?.data);

  return <TodoListPresentational todos={query.data?.data ?? []} />;
};
