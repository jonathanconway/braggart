// import { useGetBrags } from "@/core";

// import { Brag } from "../../brag/brag";
// import { BragTypeMetric } from "../brag-type";
// import { BragTypeMetricView, BragTypeMetricsView } from "../brag-type-view";

// export function createBragTypeMetricsView({
//   metrics,
//   brags,
// }: {
//   metrics: readonly BragTypeMetric[];
//   brags: readonly Brag[];
// }): BragTypeMetricsView {
//   const metricsView = metrics.map((metric) =>
//     createBragTypeMetricView({ metric, brags }),
//   );
//   return {
//     metricsByTitle: Object.fromEntries(
//       metricsView.map((metricView) => [metricView.title, metricView]),
//     ),
//     metricsById: Object.fromEntries(
//       metricsView.map((metricView) => [metricView.title, metricView]),
//     ),
//     metricsByIdHasValues: Object.fromEntries(
//       metricsView.map((metricView) => [metricView.title, metricView.hasValues]),
//     ),
//     metrics: metricsView,
//   };
// }

// function createBragTypeMetricView({
//   metric,
//   brags,
// }: {
//   metric: BragTypeMetric;
//   brags: readonly Brag[];
// }): BragTypeMetricView {
//   const hasSavedValues = Boolean(
//     brags.find((brag) => brag.metricValues?.[metric.id]),
//   );

//   return {
//     ...metric,
//     hasValues: hasSavedValues,
//   };
// }

// export function useBragTypeMetricsView({
//   metrics,
// }: {
//   readonly metrics: readonly BragTypeMetric[];
// }) {
//   const { brags } = useGetBrags();

//   return createBragTypeMetricsView({ metrics, brags });
// }
