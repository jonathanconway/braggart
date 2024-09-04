import { sortBy } from "lodash";

import { useGetRecentBrags } from "@/core";

import { useBragTypesStore, useBragsStore } from "../storage/stores";

export function useBrags() {
  const bragTypesStore = useBragTypesStore();
  const bragsStore = useBragsStore();

  const { brags, addBrag } = bragsStore;

  const recentBrags = useGetRecentBrags({ bragsStore, bragTypesStore });

  return {
    brags: sortBy(brags, "created"),
    recentBrags,
    addBrag,
  };
}
