import { createBragLinksMock } from "@/core";

import { BragLinksEditorProps } from "./brag-links-editor.types";

export function createBragLinksEditorPropsMock(): BragLinksEditorProps {
  return {
    links: createBragLinksMock(),
  };
}
