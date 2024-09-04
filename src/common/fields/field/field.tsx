import {
  FormControl as ChakraFormControl,
  FormErrorMessage as ChakraFormErrorMessage,
  FormHelperText as ChakraFormHelperText,
  FormLabel as ChakraFormLabel,
} from "@chakra-ui/react";

import { FieldProps } from "./field.types";

export function Field({
  label,
  children,
  helperText,
  errorText,
  fieldState,
  ...restProps
}: FieldProps) {
  return (
    <ChakraFormControl
      isInvalid={Boolean(errorText) || Boolean(fieldState?.error)}
      {...restProps}
    >
      {label && <ChakraFormLabel>{label}</ChakraFormLabel>}

      <div>{children}</div>

      {helperText ? (
        <ChakraFormHelperText>{helperText}</ChakraFormHelperText>
      ) : null}

      {errorText ?? fieldState?.error ? (
        <ChakraFormErrorMessage>
          {errorText ?? fieldState?.error}
        </ChakraFormErrorMessage>
      ) : null}
    </ChakraFormControl>
  );
}
