import { Todo } from "@/types/api";

type TodoProps = {
  todos: Todo[];
};

export const Todos = ({ todos }: TodoProps) => {
  return (
    <div>
      {todos.map((todo: Todo) => (
        <div key={todo.id}>
          {todo.title} : {todo.completed ? "✔️" : "□"}
        </div>
      ))}
    </div>
  );
};
