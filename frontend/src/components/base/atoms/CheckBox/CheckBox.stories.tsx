import type { Meta, StoryObj } from "@storybook/react";
import { CheckBox } from "./CheckBox";
import { css } from "styled-system/css";

const meta = {
  title: "components/base/atoms/CheckBox",
  component: CheckBox,
  tags: ["autodocs"],
  decorators: [
    (Story): JSX.Element => (
      <div className={css({ margin: 10 })}>
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
