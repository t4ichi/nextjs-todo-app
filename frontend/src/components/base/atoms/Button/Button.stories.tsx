import type { Meta, StoryObj } from "@storybook/react";

import { css } from "styled-system/css";
import { Button } from "./Button";

const meta = {
  title: "Components/Base/Atoms/Button",
  component: Button,
  tags: ["autodocs"],
  decorators: [
    (Story): JSX.Element => (
      <div className={css({ m: 10 })}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Hello 🐼!",
  },
};
