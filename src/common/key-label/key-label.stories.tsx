import type { Meta, StoryObj } from "@storybook/react";

import { KeyLabel } from "./key-label";
import { createKeyLabelPropsMock } from "./key-label.mocks";

const meta = {
  title: "components/KeyLabel",
  component: KeyLabel,
  parameters: {},
  argTypes: {},
  args: {},
} satisfies Meta<typeof KeyLabel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: createKeyLabelPropsMock(),
};
