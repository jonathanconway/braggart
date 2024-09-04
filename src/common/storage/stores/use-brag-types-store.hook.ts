import { BragType, BragTypesStore } from "@/core";
import { groupByFirst } from "@/utils/array.utils";

import { LocalStorageKeys } from "../local-storage-keys";
import { createAddItem, createUpdateItem } from "../storage.utils";
import { useLocalStorage } from "../use-local-storage.hook";

export function useBragTypesStore(): BragTypesStore {
  const {
    value: bragTypes = [],
    loaded,
    setValue: setBragTypes,
  } = useLocalStorage<readonly BragType[] | undefined>(
    LocalStorageKeys.BragTypes,
    undefined,
  );

  const bragTypesById = groupByFirst(bragTypes, "id");

  const addBragType = createAddItem(bragTypes, setBragTypes);

  const updateBragType = createUpdateItem(bragTypes, setBragTypes);

  return {
    bragTypes,
    bragTypesById,
    loaded,
    addBragType,
    updateBragType,
  };
}
