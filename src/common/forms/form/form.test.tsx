import { render } from "@testing-library/react";
import { describe, it } from "vitest";

import { Form } from "./form";

describe("form", () => {
  describe("<Form />", () => {
    it("renders", () => {
      render(<Form />);
    });
  });
});
