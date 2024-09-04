import { BragType, BragTypeMetric, BragTypeMetricId } from "./brag-type";

export interface BragTypeView extends BragType {
  readonly metricsView: BragTypeMetricsView;
}

export interface BragTypeMetricsView {
  readonly metricsByTitle: Record<string, BragTypeMetricView>;
  readonly metricsById: Record<BragTypeMetricId, BragTypeMetricView>;
  readonly metricsByIdHasValues: Record<BragTypeMetricId, boolean>;
  readonly metrics: readonly BragTypeMetricView[];
}

export interface BragTypeMetricView extends BragTypeMetric {
  readonly hasValues: boolean;
}
