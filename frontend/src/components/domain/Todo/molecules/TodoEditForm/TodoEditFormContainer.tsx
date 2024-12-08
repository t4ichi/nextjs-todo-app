import {
  TodoEditFormPresentational,
  type TodoEditFormPresentationalProps,
} from "./TodoEditFormPresentational";

export type TodoEditFormProps = TodoEditFormPresentationalProps;
export const TodoEditForm = ({ ...props }: TodoEditFormPresentationalProps) => {
  return <TodoEditFormPresentational {...props} />;
};
