import { TypeOfConst } from "@/utils";

export const Icons = {
  Check: "Check",
  Close: "Close",
  Edit: "Edit",
} as const;

export type Icon = TypeOfConst<typeof Icons>;
