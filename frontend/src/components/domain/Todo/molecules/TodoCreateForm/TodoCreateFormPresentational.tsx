import type { CreateTodoBody } from "@/app/api/fetchTodos";
import { Button } from "@/components/base/atoms/Button";
import { TextInput } from "@/components/base/atoms/TextInput";
import { css } from "styled-system/css";

export type TodoCreateFormPresentationalProps = {
  onSubmit: (formData: FormData) => Promise<void>;
};

const createFormStyle = css({
  display: "flex",
  justifyContent: "center",
  gap: "0.5rem",
  marginTop: "1em",
});

const textInputStyle = css({
  width: "20rem",
  height: "3rem",
});

export const TodoCreateFormPresentational = ({
  onSubmit,
}: TodoCreateFormPresentationalProps) => {
  return (
    <form className={createFormStyle} action={onSubmit}>
      <TextInput
        name="title"
        placeholder="タスクを入力"
        className={textInputStyle}
      />
      <Button type="submit">追加</Button>
    </form>
  );
};
