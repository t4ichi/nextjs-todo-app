import { css } from "styled-system/css";
import { forwardRef } from "react";
import { Field } from "@ark-ui/react";

export type TextInputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  isOutline?: boolean;
};

export const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  (
    {
      className,
      placeholder,
      size = "md",
      onChange,
      isOutline = true,
      ...props
    },
    ref,
  ) => {
    const baseStyles = css({
      width: "100%",
      height: "100%",
      backgroundColor: "base.50",
      rounded: "0.5rem",
      paddingY: " 1.25rem",
      paddingX: "1rem",
    });

    const outlineStyles = css({
      outline: "none",
    });

    return (
      <Field.Root className={className}>
        <Field.Input
          className={`${baseStyles} ${!isOutline ? outlineStyles : ""}`}
          ref={ref}
          placeholder={placeholder}
          onChange={onChange}
          {...props}
        />
      </Field.Root>
    );
  },
);

TextInput.displayName = "TextInput";
