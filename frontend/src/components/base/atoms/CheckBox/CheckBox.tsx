import { Checkbox } from "@ark-ui/react";
import { CheckIcon } from "lucide-react";
import { css } from "styled-system/css";

const checkboxRoot = css({
  display: "flex",
  alignItems: "center",
  cursor: "pointer",
});

const checkboxControl = css({
  width: "1.5rem",
  height: "1.5rem",
  borderWidth: "1px",
  borderColor: "primary.600",
  borderStyle: "solid",
});

export const CheckBox = () => {
  return (
    <Checkbox.Root className={checkboxRoot}>
      <Checkbox.Control className={checkboxControl}>
        <Checkbox.Indicator>
          <CheckIcon />
        </Checkbox.Indicator>
      </Checkbox.Control>
      <Checkbox.HiddenInput />
    </Checkbox.Root>
  );
};
