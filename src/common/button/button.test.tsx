import { render } from "@testing-library/react";
import { describe, it } from "vitest";

import { Button } from "./button";

describe("button", () => {
  describe("<Button />", () => {
    it("renders", () => {
      render(<Button />);
    });
  });
});
