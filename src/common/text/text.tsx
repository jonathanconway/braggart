import { Text as ChakraText } from "@chakra-ui/react";

import { TextProps } from "./text.types";

export function Text(props: TextProps) {
  return <ChakraText {...props} />;
}
