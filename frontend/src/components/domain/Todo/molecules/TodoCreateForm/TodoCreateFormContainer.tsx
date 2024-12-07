import { createTodo, type CreateTodoBody } from "@/app/api/fetchTodos";
import { TodoCreateFormPresentational } from "./TodoCreateFormPresentational";

export const TodoCreateForm = async () => {
  const onSubmit = async (formData: CreateTodoBody) => {
    "use server";
    await createTodo(formData);
  };
  const handleSubmit = async (formData: FormData) => {
    "use server";
    const title = formData.get("title") as string;
    await onSubmit({ title });
  };
  return <TodoCreateFormPresentational onSubmit={handleSubmit} />;
};
