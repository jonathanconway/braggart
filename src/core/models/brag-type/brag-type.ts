import { Timestamp, UUID } from "@/utils";

import { BragTypeMetric } from "./brag-type-metrics";

export type BragTypeId = UUID;

export interface BragType {
  readonly id: BragTypeId;
  readonly updated?: Timestamp;
  readonly created: Timestamp;
  readonly title: string;
  readonly keychar: string;
  readonly metrics: readonly BragTypeMetric[];
}
