import { TodoEditForm } from "@/components/domain/Todo/molecules/TodoEditForm";
import type { Todo } from "@/gen/models";
import { css } from "styled-system/css";

export type TodoListPresentationalProps = {
  todos: Todo[];
};

export const TodoListPresentational = ({
  todos = [], // デフォルト値を設定
}: TodoListPresentationalProps) => {
  const ulStyle = css({
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
  });

  if (!Array.isArray(todos)) {
    return null; // または適切なフォールバックUI
  }

  return (
    <ul className={ulStyle}>
      {todos.map((todo) => (
        <li key={todo.id}>
          <TodoEditForm title={todo.title} isCompleted={todo.completed} />
        </li>
      ))}
    </ul>
  );
};
