import { createBragType, createBragTypeMetric } from "./create-brag-type";

export function createBragTypeMock() {
  return createCodeReviewedBragTypeMock();
}

export function createCodeReviewedBragTypeMock() {
  return createBragType({
    title: "Code Reviewed",
    keychar: "r",
    metrics: createCodeReviewedBragTypeMetricsMock(),
  });
}

export function createCodeReviewedBragTypeMetricsMock() {
  return [
    createBragTypeMetric({
      title: "# of comments",
    }),
    createBragTypeMetric({
      title: "# of comments actioned",
    }),
    createBragTypeMetric({
      title: "# of coding guidelines improved",
    }),
  ];
}
