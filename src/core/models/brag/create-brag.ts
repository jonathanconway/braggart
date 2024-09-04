import { createUUID } from "@/utils";

import { BragTypeId, BragTypeMetricId } from "../brag-type";

import { Brag } from "./brag";

export function createBrag({
  bragTypeId,
  title,
  notes,
  links,
  metricValues,
}: {
  readonly bragTypeId: BragTypeId;
  readonly title: string;
  readonly notes: string;
  readonly links?: readonly string[];
  readonly metricValues?: Record<BragTypeMetricId, number>;
}): Brag {
  return {
    id: createUUID(),
    bragTypeId,
    title,
    notes,
    created: new Date().getTime(),
    links: links ?? [],
    metricValues: metricValues ?? {},
  };
}
