import { Input as ChakraInput } from "@chakra-ui/react";

import { Props } from "@/utils";

export type TextBoxProps = Props<typeof ChakraInput> & {
  readonly autoHighlight?: boolean;
  readonly size?: "regular" | "small";
};
