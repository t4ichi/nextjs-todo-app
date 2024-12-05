import { createTodo, type CreateTodoBody } from "@/app/api/fetchTodos";
import { TodoCreateFormPresentational } from "./TodoCreateFormPresentational";

export const TodoCreateForm = async () => {
  const handleSubmit = async (formData: FormData) => {
    "use server";
    const title = formData.get("title") as string;
    await createTodo({ title });
  };
  return <TodoCreateFormPresentational onSubmit={handleSubmit} />;
};
