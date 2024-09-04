import { Textarea as ChakraTextArea } from "@chakra-ui/react";

import { TextAreaProps } from "./text-area.types";

export function TextArea(props: TextAreaProps) {
  return <ChakraTextArea {...props} />;
}
