import { render } from "@testing-library/react";
import { describe, it } from "vitest";

import { Field } from "./field";

describe("field", () => {
  describe("<Field />", () => {
    it("renders", () => {
      render(<Field />);
    });
  });
});
