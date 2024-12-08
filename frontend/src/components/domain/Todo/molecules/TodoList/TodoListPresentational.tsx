import type { Todo } from "@/app/api/fetchTodos";
import { TodoEditForm } from "@/components/domain/Todo/molecules/TodoEditForm";
import { css } from "styled-system/css";

export type TodoListPresentationalProps = {
  todos: Todo[] | undefined;
};

export const TodoListPresentational = ({
  todos,
}: TodoListPresentationalProps) => {
  const ulStyle = css({
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
  });

  const todoItems = todos ?? [];

  return (
    <ul className={ulStyle}>
      {todoItems.map((todo: Todo) => (
        <li key={todo.id}>
          <TodoEditForm title={todo.title} isCompleted={todo.completed} />
        </li>
      ))}
    </ul>
  );
};
