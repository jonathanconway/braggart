---
to: src/common/<%= name %>/<%= name %>.types.ts
---

import { HTMLProps } from "@/utils";

export type <%= h.changeCase.pascalCase(name) %>Props = HTMLProps<HTMLDivElement>;
