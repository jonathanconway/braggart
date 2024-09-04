---
to: src/common/<%= name %>/<%= name %>.stories.tsx
---

import type { Meta, StoryObj } from "@storybook/react";

import { <%= h.changeCase.pascalCase(name) %> } from "./<%= name %>";
import { create<%= h.changeCase.pascalCase(name) %>PropsMock } from "./<%= name %>.mocks";

const meta = {
  title: "components/<%= h.changeCase.pascalCase(name) %>",
  component: <%= h.changeCase.pascalCase(name) %>,
  parameters: {},
  argTypes: {},
  args: {},
} satisfies Meta<typeof <%= h.changeCase.pascalCase(name) %>>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: create<%= h.changeCase.pascalCase(name) %>PropsMock(),
};
