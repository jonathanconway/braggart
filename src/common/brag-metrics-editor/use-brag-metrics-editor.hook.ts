import { useState } from "react";

import { BragTypeMetric, BragTypeMetricId } from "@/core";

interface State {
  readonly metricValues: Record<BragTypeMetricId, number>;
}

export function useBragMetricsEditor({
  metrics,
}: {
  readonly metrics: readonly BragTypeMetric[];
}) {
  const initial = {
    metricValues: Object.fromEntries(metrics.map((metric) => [metric.id, 0])),
  };

  const [state, setState] = useState<State>(initial);

  const { metricValues } = state;

  function setMetricValue(metricId: BragTypeMetricId, value: number) {
    setState({
      ...state,
      metricValues: {
        ...state.metricValues,
        [metricId]: value,
      },
    });
  }

  return { metricValues, setMetricValue };
}
