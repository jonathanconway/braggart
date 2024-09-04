import { FormControl as ChakraFormControl } from "@chakra-ui/react";
import { ReactNode } from "react";

import { Props } from "@/utils";

import { FieldState } from "../field-state";

export type FieldProps = Props<typeof ChakraFormControl> & {
  readonly label?: string | ReactNode;
  readonly helperText?: string | ReactNode;
  readonly errorText?: string | ReactNode;
  readonly fieldState?: FieldState;
};
