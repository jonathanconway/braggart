---
to: src/common/<%= name %>/<%= name %>.mocks.tsx
---

import { <%= h.changeCase.pascalCase(name) %>Props } from "./<%= name %>.types";

export function create<%= h.changeCase.pascalCase(name) %>PropsMock(): <%= h.changeCase.pascalCase(name) %>Props {
  return {
    children: <>children</>,
  };
}
