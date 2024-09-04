import { BragType, BragTypeView } from "@/core";

export interface BragTypeEditorProps {
  readonly bragType: BragType;

  readonly onClose: VoidFunction;
}
