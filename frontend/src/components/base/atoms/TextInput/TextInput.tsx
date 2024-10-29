import { css } from "@/styled-system/css";

export type TextInputProps = {
  placeholder?: string;
  size?: "sm" | "md" | "lg";
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export const TextInput = ({
  placeholder,
  size = "md",
  onChange,
}: TextInputProps) => {
  const baseStyles = css({
    backgroundColor: "base.50",
    rounded: "0.5rem",
    paddingY: " 1.25rem",
    paddingX: "1rem",
  });

  const sizeStyles = {
    sm: css({
      width: "30rem",
      height: "3rem",
    }),
    md: css({
      width: "24rem",
      height: "3rem",
    }),
    lg: css({
      width: "30rem",
      height: "3rem",
    }),
  };

  return (
    <input
      type="text"
      placeholder={placeholder}
      onChange={onChange}
      className={`${baseStyles} ${sizeStyles[size]}`}
    />
  );
};
