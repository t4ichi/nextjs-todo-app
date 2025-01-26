import { TodoEditForm } from "@/components/domain/Todo/molecules/TodoEditForm";
import type { Todo } from "@/gen/models";
import { css } from "styled-system/css";

export type TodoListPresentationalProps = {
  todos: {
    todo: Todo;
    isCheckBoxDisabled: boolean;
    handleCheckBoxChange: (id: number) => void;
  }[];
};

export const TodoListPresentational = ({
  todos,
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
      {todos.map((todoProps) => (
        <li key={todoProps.todo.id}>
          <TodoEditForm
            title={todoProps.todo.title}
            isCompleted={todoProps.todo.completed}
            isCheckBoxDisabled={todoProps.isCheckBoxDisabled}
            handleCheckBoxChange={() =>
              todoProps.handleCheckBoxChange(todoProps.todo.id)
            }
          />
        </li>
      ))}
    </ul>
  );
};
