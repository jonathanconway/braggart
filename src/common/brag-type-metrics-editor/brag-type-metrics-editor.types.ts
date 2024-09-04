import { BragTypeMetric } from "@/core";

export interface BragTypeMetricsEditorProps {
  readonly value: readonly BragTypeMetric[];
  readonly onChange: (metrics: BragTypeMetric[]) => void;
}
