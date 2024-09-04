import { DetailedHTMLProps, HTMLAttributes } from "react";

export type KeyBoxProps = DetailedHTMLProps<
  HTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {
  readonly value?: string;
};
