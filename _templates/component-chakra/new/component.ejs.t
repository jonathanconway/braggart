---
to: src/common/<%= name %>/<%= name %>.tsx
---

import { <%= h.changeCase.pascalCase(name) %> as Chakra<%= h.changeCase.pascalCase(name) %> } from "@chakra-ui/react";
import { <%= h.changeCase.pascalCase(name) %>Props } from "./<%= name %>.types";

export function <%= h.changeCase.pascalCase(name) %>(props: <%= h.changeCase.pascalCase(name) %>Props) {
  return (
    <Chakra<%= h.changeCase.pascalCase(name) %> {...props} />
  );
}
