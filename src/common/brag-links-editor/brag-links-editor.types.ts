import { HTMLProps } from "@/utils";

export type BragLinksEditorProps = HTMLProps<HTMLDivElement> & {
  readonly links: readonly string[];
};
