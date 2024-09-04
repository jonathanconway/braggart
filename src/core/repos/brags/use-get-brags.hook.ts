import { sortBy } from "lodash";

import { useBragsStore } from "@/common/storage/stores";

export function useGetBrags() {
  const { brags } = useBragsStore();

  return {
    brags: sortBy(brags, "created"),
  };
}
