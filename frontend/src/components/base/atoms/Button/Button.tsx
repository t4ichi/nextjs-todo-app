import React from "react";
import { Button as RadixButton, ButtonProps } from "@radix-ui/themes";

export const Button = (props: ButtonProps) => {
  const ButtonStyle = {
    background: "blue",
    rounded: "lg",
  };
  return (
    <RadixButton {...props} className={props.className} style={ButtonStyle}>
      {props.children || "button"}
    </RadixButton>
  );
};
