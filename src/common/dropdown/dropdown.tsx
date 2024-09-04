import { Select as ChakraSelect } from "@chakra-ui/react";

import { Props } from "@/utils";

export function Dropdown(props: Props<typeof ChakraSelect>) {
  return <ChakraSelect {...props} />;
}
