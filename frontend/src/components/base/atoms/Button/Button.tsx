import React from "react";
import { css } from "styled-system/css";

export const Button = () => {
  const buttonStyle = css({
    backgroundColor: "blue.500",
    color: "white",
  });

  return <button className={buttonStyle}>button</button>;
};
