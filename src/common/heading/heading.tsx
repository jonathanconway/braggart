import { Heading as ChakraHeading } from "@chakra-ui/react";

import { HeadingProps } from "./heading.types";

export function Heading(props: HeadingProps) {
  const size = {
    h1: "xl",
    h2: "lg",
    h3: "md",
  }[props.as ?? "h1"];

  return <ChakraHeading {...props} size={size} />;
}
