import { Heading as ChakraHeading } from "@chakra-ui/react";

import { Override, Props } from "@/utils";

export type HeadingProps = Override<
  Props<typeof ChakraHeading>,
  {
    readonly as: HeadingLevel;
  }
>;

export type HeadingLevel = "h1" | "h2" | "h3";
