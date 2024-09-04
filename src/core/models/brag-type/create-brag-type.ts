import { replace, snakeCase } from "lodash";

import { BragType } from "./brag-type";

export function createBragType({
  title,
  keychar,
  metrics,
}: {
  readonly title: string;
  readonly keychar: string;
  readonly metrics?: readonly {
    readonly title: string;
  }[];
}): BragType {
  return {
    created: new Date().getTime(),
    id: snakeCase(title),
    title,
    keychar,
    metrics: metrics?.map(createBragTypeMetric) ?? [],
  };
}

export function createBragTypeMetric({ title }: { title: string }) {
  return {
    id: snakeCase(replace(title, "#", "no")),
    title,
  };
}
