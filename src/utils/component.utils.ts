import { DetailedHTMLProps, HTMLAttributes } from "react";

export type HTMLProps<T> = DetailedHTMLProps<HTMLAttributes<T>, T>;

export type Props<T extends (props: Parameters<T>[0]) => ReturnType<T>> =
  Parameters<T>[0];
