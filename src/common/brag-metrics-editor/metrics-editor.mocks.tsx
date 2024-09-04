import { createCodeReviewedBragTypeMetricsMock } from "@/core";

import { BragMetricsEditorProps } from "./metrics-editor.types";

export function createBragMetricsEditorPropsMock(): BragMetricsEditorProps {
  return {
    metrics: createCodeReviewedBragTypeMetricsMock(),
  };
}
