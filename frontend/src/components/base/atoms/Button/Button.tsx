import { css } from "styled-system/css";

type ButtonProps = {
  children: React.ReactNode;
};

export const Button = ({ children }: ButtonProps) => {
  const buttonStyle = css({
    background: "blue.500",
    color: "white",
    paddingX: "2",
    paddingY: "0.5",
    rounded: "md",
  });
  return <button className={buttonStyle}>{children}</button>;
};
