import { Brag, BragType } from "@/core";

export interface BragView extends Brag {
  readonly bragType: BragType;
}
