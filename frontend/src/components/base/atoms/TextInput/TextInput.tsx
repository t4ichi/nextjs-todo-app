import { css } from "styled-system/css";
import { forwardRef } from "react";

export type TextInputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  size?: "sm" | "md" | "lg";
  error?: string;
};

export const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  ({ placeholder, size = "md", onChange, error, ...props }, ref) => {
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

    const errorStyles = css({
      display: "flex",
      justifyContent: "flex-start",
      color: "error.1",
      fontSize: "sm",
      marginTop: "0.5rem",
    });

    return (
      <div>
        <input
          type="text"
          ref={ref}
          placeholder={placeholder}
          onChange={onChange}
          className={`${baseStyles} ${sizeStyles[size as "sm" | "md" | "lg"]}`}
          {...props}
        />
        {error && <p className={errorStyles}>{error}</p>}
      </div>
    );
  },
);

TextInput.displayName = "TextInput";
