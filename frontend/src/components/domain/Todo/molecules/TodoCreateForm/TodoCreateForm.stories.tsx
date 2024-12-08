import type { Meta, StoryObj } from "@storybook/react";
import { css } from "styled-system/css";
import { TodoCreateFormPresentational } from "./TodoCreateFormPresentational";

const meta = {
  title: "components/domain/todo/molecules/TodoCreateForm",
  component: TodoCreateFormPresentational,
  tags: ["autodocs"],
  decorators: [
    (Story): JSX.Element => (
      <div className={css({ margin: 10 })}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof TodoCreateFormPresentational>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    onSubmit: async (formData: FormData) => {
      console.log(formData);
    },
  },
};
