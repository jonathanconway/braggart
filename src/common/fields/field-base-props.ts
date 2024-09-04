export interface FieldBaseProps<T> {
  readonly value?: T;
  onChange(value?: T): void;
}
