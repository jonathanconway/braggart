export type Model = object;

export interface LocalStore<T> {
  getAll(): readonly T[];
  setAll(newValue: readonly T[]): void;
}
