import { InlineField } from ".";

import { render } from "@testing-library/react";
import { describe, it } from "vitest";

import { createInlineFieldPropsMock } from "./inline-field.mocks";

describe("inline-field", () => {
  describe("<InlineField />", () => {
    it("renders", () => {
      render(<InlineField {...createInlineFieldPropsMock()} />);
    });
  });
});
