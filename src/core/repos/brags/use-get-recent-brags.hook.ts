import { sortBy, take } from "lodash";

import { BragTypesStore } from "@/core/models";
import { BragsStore } from "@/core/models/brag/brags.store";

import { BragView } from "./brag-view";

export function useGetRecentBrags({
  bragsStore,
  bragTypesStore,
}: {
  readonly bragsStore: BragsStore;
  readonly bragTypesStore: BragTypesStore;
}): readonly BragView[] {
  const { brags } = bragsStore;
  const { bragTypesById } = bragTypesStore;

  const bragViews = take(sortBy(brags, "created", "desc"), 5).map((brag) => ({
    ...brag,
    bragType: bragTypesById[brag.bragTypeId],
  }));

  return bragViews;
}
