import deepEqual from "deep-equal";
import { useEffect, useState } from "react";

import { Validators } from "../../validation/validation.types";

interface State<T> {
  readonly form: T;
  readonly dirty: boolean;
  readonly fields: Fields<T>;
}

type Fields<T> = Record<keyof T, FieldState>;

interface FieldState {
  readonly disabled: boolean;
  readonly error?: string;
}

export function useForm<T extends object>({
  initialForm,
  initialFields,
  validators = {},
  onSubmit,
}: {
  readonly initialForm: T;
  readonly initialFields?: Partial<Fields<T>>;
  readonly validators?: Validators<T>;
  readonly onSubmit?: (form: T) => void;
}) {
  const defaultInitialFields = Object.fromEntries(
    Object.keys(initialForm).map((key) => [key, { disabled: false }]),
  ) as Record<keyof T, FieldState>;

  const initialState: State<T> = {
    form: initialForm,
    fields: {
      ...defaultInitialFields,
      ...initialFields,
    },
    dirty: false,
  };

  useEffect(() => {
    if (!deepEqual(initialForm, state.form)) {
      setState((currentState) => ({
        ...currentState,
        form: initialForm,
        dirty: false,
      }));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initialForm]);

  const [state, setState] = useState<State<T>>(initialState);

  const { form, fields, dirty } = state;

  const fieldValues = Object.values(fields) as readonly FieldState[];

  const invalid = Boolean(fieldValues.find((field) => field?.error));

  function setDirty(dirty: boolean) {
    setState((currentState) => ({
      ...currentState,
      dirty,
    }));
  }

  function updateDirty(newForm: T) {
    setDirty(!deepEqual(initialForm, newForm));
  }

  function setFieldValue(value?: T[keyof T], field?: keyof T) {
    if (!field) {
      return;
    }

    setState((currentState) => ({
      ...currentState,
      form: {
        ...currentState.form,
        [field]: value,
      },
    }));

    setFieldError(field, validators?.[field]?.(field, value));

    updateDirty({
      ...form,
      [field]: value,
    });
  }

  function clearFieldValue(field: keyof T) {
    setFieldValue(undefined, field);
  }

  function setFieldError(field: keyof T, error?: string) {
    setState((currentState) => ({
      ...currentState,
      fields: {
        ...currentState.fields,
        [field]: {
          ...currentState.fields[field],
          error,
        },
      },
    }));
  }

  function clearFieldError(field: keyof T) {
    setFieldError(field);
  }

  function setFieldDisabled(field: keyof T, disabled: boolean) {
    setState((currentState) => ({
      ...currentState,
      fields: {
        ...currentState.fields,
        [field]: {
          ...currentState.fields[field],
          disabled,
        },
      },
    }));
  }

  function submit() {
    if (dirty && !invalid && onSubmit) {
      onSubmit(form);
      setDirty(false);
    }
  }

  function clear() {
    setDirty(false);
  }

  return {
    form,
    fields,
    invalid,

    dirty,
    setDirty,

    setFieldValue,
    clearFieldValue,

    setFieldError,
    clearFieldError,

    setFieldDisabled,

    submit,
    clear,
  };
}
