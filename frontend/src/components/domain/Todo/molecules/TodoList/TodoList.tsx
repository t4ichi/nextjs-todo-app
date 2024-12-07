"use client";
import { getAllTodos, type Todo } from "@/app/api/fetchTodos";
import { useQuery } from "@tanstack/react-query";

export const TodoList = () => {
  const query = useQuery({ queryKey: ["todos"], queryFn: () => getAllTodos() });
  console.log(query.data);

  return (
    <div>
      {query.data?.map((todo: Todo) => (
        <div key={todo.id}>
          {todo.title} : {todo.completed ? "✔️" : "□"}
        </div>
      ))}
    </div>
  );
};
