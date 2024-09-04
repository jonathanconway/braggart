import { Button as ChakraButton } from "@chakra-ui/react";

import { Props } from "@/utils";

export function Button(props: Props<typeof ChakraButton>) {
  return (
    <ChakraButton gap={props.size === "large" ? "1rem" : "0.5rem"} {...props} />
  );
}
