import { BragsStore } from "../brag/brags.store";

import { BragType } from "./brag-type";

// import { BragTypesStore } from "./brag-types.store";

export function useBragTypeQueries({
  bragsStore,
  // bragTypesStore
}: {
  readonly bragsStore: BragsStore;
  // readonly bragTypesStore: BragTypesStore;
}) {
  function getHasBrags(bragType: BragType) {
    return Boolean(
      bragsStore.brags.find((brag) => brag.bragTypeId === bragType.id),
    );
  }

  return {
    getHasBrags,
  };
}
