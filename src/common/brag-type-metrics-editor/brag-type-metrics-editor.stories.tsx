import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import { BragTypeMetricsEditor } from "./brag-type-metrics-editor";
import { createBragTypeMetricsEditorPropsMock } from "./brag-type-metrics-editor.mocks";

const meta = {
  title: "components/BragTypeMetricsEditor",
  component: BragTypeMetricsEditor,
  parameters: {},
  argTypes: {},
  args: {
    onAddMetric: fn(),
    onChangeMetricTitle: fn(),
    onRemoveMetric: fn(),
  },
} satisfies Meta<typeof BragTypeMetricsEditor>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    ...createBragTypeMetricsEditorPropsMock(),
    ...meta.args,
  },
};
