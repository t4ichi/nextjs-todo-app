import { ReactNode } from "react";
import { css } from "../../../../../styled-system/css";

type ButtonProps = {
  children: ReactNode;
};

const baseStyle = css({
  width: "6rem",
  height: "3rem",
  backgroundColor: "primary.600",
  color: "white",
  rounded: "0.5rem",
  _hover: {
    backgroundColor: "primary.800",
    color: "base.50",
  },
});

export const Button = ({ children }: ButtonProps) => {
  return <button className={`${baseStyle}`}>{children}</button>;
};
