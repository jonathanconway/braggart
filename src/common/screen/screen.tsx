import { Container as ChakraContainer } from "@chakra-ui/react";

import { Props } from "@/utils";

export function Screen(props: Props<typeof ChakraContainer>) {
  return <ChakraContainer maxW="container.md" {...props} />;
}
