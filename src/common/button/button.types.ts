import { HTMLProps } from "@/utils";

export type ButtonProps = HTMLProps<HTMLButtonElement> & {
  readonly size?: "small" | "regular" | "large";
};

export const DEFAULT_PROPS = {
  size: "regular",
};
