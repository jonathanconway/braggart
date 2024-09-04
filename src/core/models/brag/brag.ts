import { Timestamp, UUID } from "@/utils";

import { BragTypeMetricId } from "../brag-type";

export type BragId = UUID;

export interface Brag {
  readonly id: BragId;
  readonly bragTypeId: string;
  readonly title: string;
  readonly notes: string;
  readonly links: readonly string[];
  readonly created: Timestamp;
  readonly updated?: Timestamp;
  readonly metricValues: Record<BragTypeMetricId, number>;
}
