import { IconButton as ChakraIconButton } from "@chakra-ui/react";

import { Override, Props } from "@/utils";

export type IconButtonProps = Override<
  Props<typeof ChakraIconButton>,
  | {
      readonly label: string;
      readonly ["aria-label"]?: string;
    }
  | {
      readonly label?: string;
      readonly ["aria-label"]: string;
    }
>;
