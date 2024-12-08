import { Checkbox, type CheckboxRootProps } from "@ark-ui/react";
import { CheckIcon } from "lucide-react";
import { css } from "styled-system/css";

export type CheckBoxProps = CheckboxRootProps;

const checkboxRoot = css({
  display: "flex",
  alignItems: "center",
  cursor: "pointer",
  _hover: {
    opacity: "0.8",
  },
});

const checkboxControl = css({
  width: "1.5rem",
  height: "1.5rem",
  borderWidth: "2px",
  borderColor: "primary.600",
  borderRadius: "50%",
  borderStyle: "solid",
  _checked: {
    backgroundColor: "primary.600",
  },
});

const checkboxIndicator = css({
  display: "flex",
  width: "100%",
  height: "100%",
  justifyContent: "center",
  alignItems: "center",
});

const checkboxIconStyle = css({
  color: "primary.600",
  '[data-state="checked"] &': {
    color: "white",
  },
});
export const CheckBox = ({ ...props }: CheckBoxProps) => {
  return (
    <Checkbox.Root className={checkboxRoot} {...props}>
      <Checkbox.Control className={checkboxControl}>
        <Checkbox.Indicator className={checkboxIndicator}>
          <CheckIcon className={checkboxIconStyle} />
        </Checkbox.Indicator>
      </Checkbox.Control>
      <Checkbox.HiddenInput />
    </Checkbox.Root>
  );
};
