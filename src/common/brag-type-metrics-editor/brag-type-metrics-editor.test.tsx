import { render } from "@testing-library/react";
import { describe, it } from "vitest";

import { BragTypeMetricsEditor } from "./brag-type-metrics-editor";
import { createBragTypeMetricsEditorPropsMock } from "./brag-type-metrics-editor.mocks";

describe("brag-type-metrics-editor", () => {
  describe("<BragTypeMetricsEditor />", () => {
    it("renders", () => {
      render(
        <BragTypeMetricsEditor {...createBragTypeMetricsEditorPropsMock()} />,
      );
    });
  });
});
