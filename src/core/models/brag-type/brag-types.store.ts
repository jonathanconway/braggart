import { BragType, BragTypeId } from "./brag-type";

export interface BragTypesStore {
  readonly bragTypes: readonly BragType[];
  readonly bragTypesById: Record<BragTypeId, BragType>;

  readonly loaded: boolean;

  addBragType(bragType: BragType): void;
  updateBragType(bragType: BragType): void;
}
