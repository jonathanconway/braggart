import { Brag } from "./brag";

export function createBragMock(): Brag {
  return {
    bragTypeId: "",
    created: new Date().getTime(),
    id: "",
    links: createBragLinksMock(),
    metricValues: createBragMetricValuesMock(),
    notes: "- Also gave some guidance on architecture",
    title: "",
  };
}

export function createBragMetricValuesMock() {
  return {
    "no-of-comments": 3,
    "no-of-comments-actions": 1,
    "no-of-coding-guidelines-improved": 1,
  };
}

export function createBragLinksMock() {
  return [
    "https://github.com/username/package/blob/main/file",
    "https://task.com/12131",
  ];
}
