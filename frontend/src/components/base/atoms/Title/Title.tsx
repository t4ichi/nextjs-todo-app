import { ComponentProps, forwardRef } from "react";
import { css } from "styled-system/css";

const titleStyle = css({
  color: "base.900",
  fontWeight: "bold",
});

export const Title = forwardRef<HTMLHeadingElement, ComponentProps<"h1">>(
  (props, ref) => {
    const { className, ...rest } = props;
    return <h1 className={`${titleStyle} ${className}`} ref={ref} {...rest} />;
  },
);
Title.displayName = "Title";
