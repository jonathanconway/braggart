import { render } from "@testing-library/react";
import { describe, it } from "vitest";

import { KeyBox } from "./key-box";

describe("key-box", () => {
  describe("<KeyBox />", () => {
    it("renders", () => {
      render(<KeyBox />);
    });
  });
});
