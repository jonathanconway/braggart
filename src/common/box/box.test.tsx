import { render } from "@testing-library/react";
import { describe, it } from "vitest";

import { Box } from "./box";

describe("box", () => {
  describe("<Box />", () => {
    it("renders", () => {
      render(<Box />);
    });
  });
});
