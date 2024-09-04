import type { Meta, StoryObj } from "@storybook/react";

import { InlineField } from "./inline-field";
import { createInlineFieldPropsMock } from "./inline-field.mocks";

const meta = {
  title: "components/InlineField",
  component: InlineField,
  parameters: {},
  argTypes: {},
  args: {},
} satisfies Meta<typeof InlineField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: createInlineFieldPropsMock(),
};
