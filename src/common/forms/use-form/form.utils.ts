import { startCase } from "lodash";

export function sentenceCase(input: string) {
  const sentenceLower = startCase(input).toLowerCase();
  return `${sentenceLower[0].toUpperCase()}${sentenceLower.substring(1)}`;
}
