"use client";
import { useCreateTodo } from "@/gen/endpoints/todo/todo";
import { useQueryClient } from "@tanstack/react-query";
import { TodoCreateFormPresentational } from "./TodoCreateFormPresentational";

export const TodoCreateForm = () => {
  const queryClient = useQueryClient();
  const createTodoMutation = useCreateTodo({
    mutation: {
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ["todos"] });
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
