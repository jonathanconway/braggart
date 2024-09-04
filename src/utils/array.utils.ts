export type Key<T> = keyof T;

export type KeyValue<T> = T[Key<T>] & (string | number | symbol);

export function groupByFirst<T extends object, TKey extends Key<T> = Key<T>>(
  array: T[] | readonly T[],
  key: TKey,
): Record<KeyValue<T>, T> {
  const dict = {} as Record<KeyValue<T>, T>;

  for (const item of array) {
    const keyValue = item[key];
    dict[keyValue as KeyValue<T>] = dict[keyValue as KeyValue<T>] ?? item;
  }

  return dict;
}
