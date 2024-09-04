import type { Meta, StoryObj } from "@storybook/react";

import { Box } from "./box";
import { createBoxPropsMock } from "./box.mocks";

const meta = {
  title: "components/Box",
  component: Box,
  parameters: {},
  argTypes: {},
  args: {},
} satisfies Meta<typeof Box>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: createBoxPropsMock(),
};
