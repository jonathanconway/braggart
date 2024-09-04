import {
  Input as ChakraInput,
  forwardRef,
  useFormControlContext,
} from "@chakra-ui/react";
import { FocusEvent } from "react";

import { TextBoxProps } from "./text-box.types";

export const TextBox = forwardRef(
  ({ autoHighlight, size, ...restProps }: TextBoxProps, ref) => {
    // todo : extract to hook
    function handleFocus(event: FocusEvent<HTMLInputElement>) {
      if (autoHighlight) {
        const input = event.target;
        input?.setSelectionRange(0, input.value.length);
      }
      restProps?.onFocus?.(event);
    }

    const { isInvalid } = useFormControlContext();
    const focusBorderColor = isInvalid ? "red.500" : undefined;

    return (
      <>
        <ChakraInput
          {...restProps}
          ref={ref}
          focusBorderColor={focusBorderColor}
          h={size === "small" ? "2rem" : undefined}
          onFocus={handleFocus}
        />
      </>
    );
  },
);
