import type { Meta, StoryObj } from "@storybook/react";
import { css } from "styled-system/css";
import { TodoListPresentational } from "./TodoListPresentational";

const meta = {
  title: "components/domain/todo/molecules/TodoList",
  component: TodoListPresentational,
  tags: ["autodocs"],
  decorators: [
    (Story): JSX.Element => (
      <div className={css({ margin: 10 })}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof TodoListPresentational>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    todos: [
      {
        id: 1,
        title: "タスク1",
        completed: false,
        createdAt: "2024-03-17T09:00:00Z",
        updatedAt: "2024-03-17T09:00:00Z",
      },
      {
        id: 2,
        title: "タスク2",
        completed: true,
        createdAt: "2024-03-17T10:00:00Z",
        updatedAt: "2024-03-17T10:00:00Z",
      },
    ],
  },
};

export const Empty: Story = {
  args: {
    todos: [],
  },
};
