export type Validators<T> = Partial<
  Record<keyof T, Validator<keyof T, T[keyof T]>>
>;

export type Validator<T, V> = (
  field: T,
  value: V | undefined,
) => string | undefined;
