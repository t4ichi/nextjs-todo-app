"use client";

import { getAllTodos, toggleTodo } from "@/gen/endpoints/todo/todo";
import { Todo } from "@/gen/models";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { TodoListPresentational } from "./TodoListPresentational";

export const TodoList = () => {
  const queryClient = useQueryClient();

  const { data } = useQuery<Todo[]>({
    queryKey: ["todos"],
    queryFn: () => getAllTodos(),
  });

  const toggleMutation = useMutation({
    mutationFn: toggleTodo,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });

  const todos = data?.map((todo) => ({
    todo,
    isCheckBoxDisabled: toggleMutation.isPending,
    handleCheckBoxChange: () => {
      toggleMutation.mutate(todo.id);
    },
  }));

  return <TodoListPresentational todos={todos ?? []} />;
};
