import { Brag } from "@/core";
import { BragsStore } from "@/core/models/brag/brags.store";

import { LocalStorageKeys } from "../local-storage-keys";
import { createAddItem } from "../storage.utils";
import { useLocalStorage } from "../use-local-storage.hook";

export function useBragsStore(): BragsStore {
  const {
    value: brags = [],
    setValue: setBrags,
    loaded,
  } = useLocalStorage<readonly Brag[] | undefined>(
    LocalStorageKeys.Brags,
    undefined,
  );

  const addBrag = createAddItem(brags, setBrags);

  return {
    brags,
    loaded,
    addBrag,
  };
}
