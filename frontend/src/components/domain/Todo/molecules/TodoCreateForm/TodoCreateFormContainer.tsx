"use client";
import { TodoCreateFormPresentational } from "./TodoCreateFormPresentational";
import { useQueryClient } from "@tanstack/react-query";
import { useCreateTodo } from "@/gen/endpoints/todo/todo";

export const TodoCreateForm = () => {
  const queryClient = useQueryClient();
  const createTodoMutation = useCreateTodo({
    mutation: {
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ["/api/todos"] });
      },
    },
  });

  const handleSubmit = async (formData: FormData) => {
    const title = formData.get("title") as string;
    createTodoMutation.mutate({
      data: { title },
    });
  };

  return <TodoCreateFormPresentational onSubmit={handleSubmit} />;
};
