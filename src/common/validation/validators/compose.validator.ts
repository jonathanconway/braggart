import { Validator } from "../validation.types";

export function compose<T extends string, V>(
  validators: readonly Validator<T, V>[],
) {
  return (field: T, value: V) => {
    for (const validator of validators) {
      const error = validator(field, value);
      if (error) {
        return error;
      }
    }
    return undefined;
  };
}
