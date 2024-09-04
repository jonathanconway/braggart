---
to: src/common/<%= name %>/<%= name %>.test.tsx
---

import { render } from "@testing-library/react";
import { describe, it } from "vitest";

import { <%= h.changeCase.pascalCase(name) %> } from "../<%= name %>";
import { create<%= h.changeCase.pascalCase(name) %>PropsMock } from "./<%= name %>.mocks";

describe("<%= name %>", () => {
  describe("<<%= h.changeCase.pascalCase(name) %> />", () => {
    it("renders", () => {
      render(<<%= h.changeCase.pascalCase(name) %>  {...create<%= h.changeCase.pascalCase(name) %>PropsMock()} />);
    });
  });
});
