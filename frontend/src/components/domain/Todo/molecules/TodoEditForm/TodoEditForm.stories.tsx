import type { Meta, StoryObj } from "@storybook/react";
import { css } from "styled-system/css";
import { TodoEditFormPresentational } from "./TodoEditFormPresentational";

const meta = {
  title: "components/domain/todo/molecules/TodoEditForm",
  component: TodoEditFormPresentational,
  tags: ["autodocs"],
  decorators: [
    (Story): JSX.Element => (
      <div className={css({ margin: 10 })}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof TodoEditFormPresentational>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
