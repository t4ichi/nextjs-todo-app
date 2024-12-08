import type { Meta, StoryObj } from "@storybook/react";
import { css } from "styled-system/css";
import { TodoDeleteButton } from "./TodoDeleteButtonContainer";

const meta = {
  title: "components/domain/todo/atoms/TodoDeleteButton",
  component: TodoDeleteButton,
  tags: ["autodocs"],
  decorators: [
    (Story): JSX.Element => (
      <div className={css({ margin: 10 })}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof TodoDeleteButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
