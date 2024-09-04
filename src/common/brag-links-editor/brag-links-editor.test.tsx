import { render } from "@testing-library/react";
import { describe, it } from "vitest";

import { BragLinksEditor } from "./brag-links-editor";
import { createBragLinksEditorPropsMock } from "./brag-links-editor.mocks";

describe("brag-links-editor", () => {
  describe("<BragLinksEditor />", () => {
    it("renders", () => {
      render(<BragLinksEditor {...createBragLinksEditorPropsMock()} />);
    });
  });
});
