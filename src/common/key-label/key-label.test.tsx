import { render } from "@testing-library/react";
import { describe, it } from "vitest";

import { KeyLabel } from "./key-label";
import { createKeyLabelPropsMock } from "./key-label.mocks";

describe("key-label", () => {
  describe("<KeyLabel />", () => {
    it("renders", () => {
      render(<KeyLabel {...createKeyLabelPropsMock()} />);
    });
  });
});
