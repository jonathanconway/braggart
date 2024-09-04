---
to: src/common/<%= name %>/<%= name %>.styles.ts
---

import styled from "styled-components";
import { <%= h.changeCase.pascalCase(name) %>Props } from "./<%= name %>.types";

export const <%= h.changeCase.pascalCase(name) %> = styled.div<<%= h.changeCase.pascalCase(name) %>Props>`
`;
