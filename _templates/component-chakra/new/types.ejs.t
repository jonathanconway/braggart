---
to: src/common/<%= name %>/<%= name %>.types.ts
---

import { <%= h.changeCase.pascalCase(name) %> as Chakra<%= h.changeCase.pascalCase(name) %> } from "@chakra-ui/react";

import { Props } from "@/utils";

export type <%= h.changeCase.pascalCase(name) %>Props = Props<typeof Chakra<%= h.changeCase.pascalCase(name) %>>;
