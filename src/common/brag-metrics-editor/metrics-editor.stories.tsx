import type { Meta, StoryObj } from "@storybook/react";

import { BragMetricsEditor } from "./metrics-editor";
import { createBragMetricsEditorPropsMock } from "./metrics-editor.mocks";

const meta = {
  title: "components/BragMetricsEditor",
  component: BragMetricsEditor,
  parameters: {},
  argTypes: {},
  args: {},
} satisfies Meta<typeof BragMetricsEditor>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: createBragMetricsEditorPropsMock(),
};
