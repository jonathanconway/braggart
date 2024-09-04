import type { Meta, StoryObj } from "@storybook/react";

import { BragLinksEditor } from "./brag-links-editor";
import { createBragLinksEditorPropsMock } from "./brag-links-editor.mocks";

const meta = {
  title: "components/BragLinksEditor",
  component: BragLinksEditor,
  parameters: {},
  argTypes: {},
  args: {},
} satisfies Meta<typeof BragLinksEditor>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: createBragLinksEditorPropsMock(),
};
