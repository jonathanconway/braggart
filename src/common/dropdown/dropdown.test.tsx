import { render } from "@testing-library/react";
import { describe, it } from "vitest";

import { Dropdown } from "./dropdown";

describe("dropdown", () => {
  describe("<Dropdown />", () => {
    it("renders", () => {
      render(<Dropdown />);
    });
  });
});
