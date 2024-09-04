import { FormEvent, KeyboardEventHandler } from "react";

import { TextBox } from "../text-box";

import { KeyBoxProps } from "./key-box.types";

export function KeyBox(props: KeyBoxProps) {
  const handleKeyDown: KeyboardEventHandler<HTMLInputElement> = (event) => {
    const value = event.key;

    if (value === "Backspace") {
      event.preventDefault();

      props.onChange?.({
        ...event,
        value: "",
      } as FormEvent<HTMLInputElement>);

      return;
    }

    if (value.length === 1) {
      event.preventDefault();

      props.onChange?.({
        ...event,
        value: value[0],
      } as FormEvent<HTMLInputElement>);
    }
  };

  return <TextBox {...props} onKeyDown={handleKeyDown} />;
}
