import { Brag } from "./brag";

export interface BragsStore {
  readonly brags: readonly Brag[];

  readonly loaded: boolean;

  addBrag(brag: Brag): void;
}
