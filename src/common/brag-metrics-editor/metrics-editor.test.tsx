import { render } from "@testing-library/react";
import { describe, it } from "vitest";

import { BragMetricsEditor } from "./metrics-editor";
import { createBragMetricsEditorPropsMock } from "./metrics-editor.mocks";

describe("brag-metrics-editor", () => {
  describe("<BragMetricsEditor />", () => {
    it("renders", () => {
      render(<BragMetricsEditor {...createBragMetricsEditorPropsMock()} />);
    });
  });
});
