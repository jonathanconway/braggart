import {
  CheckIcon as ChakraCheckIcon,
  CloseIcon as ChakraCloseIcon,
  EditIcon as ChakraEditIcon,
} from "@chakra-ui/icons";
import { useRef, useState } from "react";

import { IconButton } from "../icon-button";
import { Layout } from "../layout";

import { InlineFieldProps } from "./inline-field.types";

interface InlineFieldState {
  readonly mode: "viewing" | "editing";
}

export function InlineField(props: InlineFieldProps) {
  const bodyRef = useRef<HTMLDivElement>(null);

  const [state, setState] = useState<InlineFieldState>({
    mode: "viewing",
  });

  function handleEditClick() {
    props.onEdit?.();
    setState({ mode: "editing" });

    setTimeout(() => {
      const input = bodyRef.current?.querySelector(
        "input, select",
      ) as HTMLElement;
      input?.focus();
    });
  }

  function handleSubmitClick() {
    props.onSubmit?.();
    setState({ mode: "viewing" });
  }

  function handleCancelClick() {
    props.onCancel?.();
    setState({ mode: "viewing" });
  }

  return (
    <Layout direction="row" gap="0.5rem">
      <Layout flex={1} align="center" ref={bodyRef}>
        {state.mode === "viewing" && props.viewer}

        {state.mode === "editing" && props.editor}
      </Layout>

      {state.mode === "viewing" && (
        <Layout justifyContent="center">
          <IconButton
            label="Edit"
            size="sm"
            icon={<ChakraEditIcon />}
            onClick={handleEditClick}
          />
        </Layout>
      )}

      {state.mode === "editing" && (
        <>
          <IconButton
            label="Submit change"
            size="sm"
            icon={<ChakraCheckIcon />}
            isDisabled={props.canSubmit === false}
            onClick={handleSubmitClick}
          />
          <IconButton
            label="Cancel change"
            size="sm"
            icon={<ChakraCloseIcon />}
            onClick={handleCancelClick}
          />
        </>
      )}

      {props.controls}
    </Layout>
  );
}
