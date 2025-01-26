import { CheckBox } from "@/components/base/atoms/CheckBox/CheckBox";
import { TextInput } from "@/components/base/atoms/TextInput";
import { TodoDeleteButton } from "@/components/domain/Todo/atoms/TodoDeleteButton";
import { css } from "styled-system/css";

export type TodoEditFormPresentationalProps = {
  title: string;
  isCompleted: boolean;
  isCheckBoxDisabled: boolean;
  handleCheckBoxChange: () => void;
};

export const TodoEditFormPresentational = ({
  title,
  isCompleted,
  isCheckBoxDisabled,
  handleCheckBoxChange,
}: TodoEditFormPresentationalProps) => {
  const rootStyle = css({
    display: "flex",
    justifyContent: "center",
  });

  const contentStyle = css({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    paddingY: "0.75rem",
    paddingX: "1.25rem",
    width: "30rem",
    height: "4rem",
    backgroundColor: "base.50",
    borderRadius: "0.5rem",
  });

  const innerContentStyle = css({
    display: "flex",
    width: "100%",
  });
  const inputStyle = css({
    marginLeft: "0.5rem",
    height: "100%",
    width: "100%",
  });

  return (
    <form action="" className={rootStyle}>
      <div className={contentStyle}>
        <div className={innerContentStyle}>
          <CheckBox
            checked={isCompleted}
            disabled={isCheckBoxDisabled}
            onCheckedChange={() => {
              handleCheckBoxChange();
              console.log("checked");
            }}
          />
          <TextInput value={title} isOutline={false} className={inputStyle} />
        </div>
        <TodoDeleteButton />
      </div>
    </form>
  );
};
