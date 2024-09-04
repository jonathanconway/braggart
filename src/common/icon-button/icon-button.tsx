import {
  IconButton as ChakraIconButton,
  Tooltip as ChakraTooltip,
} from "@chakra-ui/react";
import { forwardRef } from "react";

import { IconButtonProps } from "./icon-button.types";

export const IconButton = forwardRef(
  ({ title, label, ...restProps }: IconButtonProps) => {
    return (
      <ChakraTooltip label={title ?? label}>
        <ChakraIconButton
          {...restProps}
          aria-label={restProps["aria-label"] ?? label ?? ""}
        />
      </ChakraTooltip>
    );
  },
);
