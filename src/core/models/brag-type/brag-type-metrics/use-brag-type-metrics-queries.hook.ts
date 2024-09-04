import { Brag } from "../../brag/brag";

import { BragTypeMetric } from "./brag-type-metric";

export function useBragTypeMetricsQueries({
  brags,
}: {
  readonly brags: readonly Brag[];
}) {
  const bragsMetricValuesMetricIds = brags.flatMap((brag) =>
    Object.keys(brag.metricValues ?? {}),
  );

  function getMetricHasSavedValue(metric: BragTypeMetric) {
    return bragsMetricValuesMetricIds.includes(metric.id);
  }

  return {
    getMetricHasSavedValue,
  };
}
