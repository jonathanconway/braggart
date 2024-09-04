import type { Meta, StoryObj } from "@storybook/react";

import { ListEditor } from "./list-editor";
import { createListEditorPropsMock } from "./list-editor.mocks";

const meta = {
  title: "components/ListEditor",
  component: ListEditor,
  parameters: {},
  argTypes: {},
  args: {},
} satisfies Meta<typeof ListEditor>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: createListEditorPropsMock(),
};
