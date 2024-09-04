import { FormEvent, SyntheticEvent } from "react";

export function mapInputChangeHandler<
  TElement extends { value: string },
  TEvent extends FormEvent<TElement>,
  TForm extends object,
>(
  inputChangeHandler:
    | ((value: string, fieldName?: keyof TForm) => void)
    | ((value: string) => void),
  fieldName?: keyof TForm,
) {
  return (e: TEvent) => {
    const element = e.target as unknown as TElement;

    const { value } = element;

    inputChangeHandler(value, fieldName);
  };
}

export function mapChangeHandler<
  TForm extends object,
  TValue extends TForm[keyof TForm],
>(
  changeHandler:
    | ((value: TForm[keyof TForm], fieldName?: keyof TForm) => void)
    | ((value: TForm[keyof TForm]) => void),
  fieldName?: keyof TForm,
) {
  return (value: TValue) => {
    changeHandler(value, fieldName);
  };
}

export function mapClickHandler<TForm extends object>(
  clickHandler:
    | ((fieldName?: keyof TForm) => void)
    | ((fieldName: keyof TForm) => void),
  fieldName?: keyof TForm,
) {
  return () => {
    clickHandler(fieldName as keyof TForm);
  };
}

export function suppress(event: Event | SyntheticEvent) {
  event.stopPropagation();
  event.preventDefault();
}
