import { ListEditor } from ".";

import { render } from "@testing-library/react";
import { describe, it } from "vitest";

import { createListEditorPropsMock } from "./list-editor.mocks";

describe("list-editor", () => {
  describe("<ListEditor />", () => {
    it("renders", () => {
      render(<ListEditor {...createListEditorPropsMock()} />);
    });
  });
});
