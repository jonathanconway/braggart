import { BragTypeMetric } from "@/core";
import { HTMLProps } from "@/utils";

export type BragMetricsEditorProps = HTMLProps<HTMLTableElement> & {
  readonly metrics: readonly BragTypeMetric[];
};
