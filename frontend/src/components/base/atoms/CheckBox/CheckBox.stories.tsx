import type { Meta, StoryObj } from "@storybook/react";
import { CheckBox } from "./CheckBox";
import { css } from "styled-system/css";

const meta = {
  title: "Components/Base/Atoms/CheckBox",
  component: CheckBox,
  tags: ["autodocs"],
  decorators: [
    (Story): JSX.Element => (
      <div className={css({ m: 10 })}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof CheckBox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
