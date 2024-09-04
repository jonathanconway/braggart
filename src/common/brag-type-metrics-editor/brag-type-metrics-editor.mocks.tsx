import { noop } from "lodash";

import { createCodeReviewedBragTypeMetricsMock } from "@/core";

import { BragTypeMetricsEditorProps } from "./brag-type-metrics-editor.types";

export function createBragTypeMetricsEditorPropsMock(): BragTypeMetricsEditorProps {
  return {
    metrics: createCodeReviewedBragTypeMetricsMock(),
    onAddMetric: noop,
    onChangeMetricTitle: noop,
    onRemoveMetric: noop,
  };
}
