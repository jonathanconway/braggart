import { Box as ChakraBox } from "@chakra-ui/react";

import { BoxProps } from "./box.types";

export function Box({ width, ...restProps }: BoxProps) {
  return <ChakraBox style={{ width }} {...restProps} />;
}
