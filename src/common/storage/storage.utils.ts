import { Setter } from "@/utils";

export type StorageListener = <TState>(newValue: TState) => void;

export function isEventType<T extends Event>(
  event: Event,
  type: string,
): event is T {
  return event.type === type;
}

export function parseStorageValue<TState>(value: string | null) {
  if (value) {
    return JSON.parse(value) as TState | undefined;
  } else {
    return undefined;
  }
}

export const createAddItem =
  <TItem extends object>(
    state: readonly TItem[],
    setValue: Setter<readonly TItem[] | undefined>,
  ) =>
  (item: TItem) =>
    setValue(addItem(state, item));

export function addItem<TItem extends object>(
  state: readonly TItem[],
  item: TItem,
) {
  return {
    ...state,
    item,
  };
}

export const createUpdateItem =
  <TItem extends ItemWithId>(
    state: readonly TItem[],
    setValue: Setter<readonly TItem[] | undefined>,
  ) =>
  (item: TItem) =>
    setValue(updateItem(state, item));

interface ItemWithId {
  readonly id: string | number | symbol;
}

export function updateItem<TItem extends ItemWithId>(
  state: readonly TItem[],
  item: TItem,
) {
  return state.map((currentItem) => {
    if (currentItem.id === item.id) {
      return {
        ...item,
        updated: new Date().getTime(),
      };
    }
    return currentItem;
  });
}
