// 相対パスで指定
import { css } from "../../../../styled-system/css";
// または絶対パスで指定（tsconfig.jsonのパス設定が必要）
// import { css } from "@/styled-system/css";

export type TextInputProps = {
  placeholder?: string;
  disabled?: boolean;
  size?: "sm" | "md" | "lg";
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export const TextInput = ({
  placeholder,
  disabled = false,
  size = "md",
  onChange,
}: TextInputProps) => {
  const baseStyles = css({
    display: "block",
    width: "full",
    borderWidth: "1px",
    borderColor: "gray.300",
    borderRadius: "md",
    backgroundColor: "white",
    transition: "all",
    transitionDuration: "200ms",
    _focus: {
      outline: "none",
      borderColor: "blue.500",
      boxShadow: "0 0 0 1px rgba(59, 130, 246, 0.5)",
    },
    _disabled: {
      backgroundColor: "gray.100",
      cursor: "not-allowed",
    },
  });

  const sizeStyles = {
    sm: css({
      px: "2",
      py: "1",
      fontSize: "sm",
    }),
    md: css({
      px: "3",
      py: "2",
      fontSize: "base",
    }),
    lg: css({
      px: "4",
      py: "3",
      fontSize: "lg",
    }),
  };

  return (
    <input
      type="text"
      placeholder={placeholder}
      disabled={disabled}
      onChange={onChange}
      className={`${baseStyles} ${sizeStyles[size]}`}
    />
  );
};
