import { css } from "styled-system/css";

type titleProps = {
  children: React.ReactNode;
};
export const Title = ({ children }: titleProps) => {
  return (
    <h1
      className={css({
        color: "base.900",
        fontWeight: "bold",
      })}
    >
      {children}
    </h1>
  );
};
