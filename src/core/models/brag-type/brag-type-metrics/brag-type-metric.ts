import { UUID } from "@/utils";

export type BragTypeMetricId = UUID;

export interface BragTypeMetric {
  readonly id: BragTypeMetricId;
  readonly title: string;
}
