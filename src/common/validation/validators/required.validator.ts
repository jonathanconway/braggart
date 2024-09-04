import { sentenceCase } from "../../forms/use-form/form.utils";

export function required<T extends string, V>(field: T, value: V) {
  if (!value) {
    return `${sentenceCase(field)} is required.`;
  }
  return undefined;
}
