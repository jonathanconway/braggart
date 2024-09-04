import { BragType } from "@/core";
import { groupByFirst } from "@/utils/array.utils";

import { useBragTypesStore } from "../storage";

export function useBragTypes() {
  const { bragTypes, loaded, addBragType, updateBragType } =
    useBragTypesStore();

  const bragTypesById = groupByFirst<BragType>(bragTypes, "id");

  return {
    bragTypes,
    bragTypesById,
    loaded,
    addBragType,
    updateBragType,
  };
}
