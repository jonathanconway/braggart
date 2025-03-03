"use client";

import { useEffect, useState } from "react";

import { Setter } from "@/utils";

import {
  StorageListener,
  isEventType,
  parseStorageValue,
} from "./storage.utils";
import { useEvent } from "./use-event.hook";

function getValueFromLocalStorage<TState>(key: string): TState | undefined {
  const value = localStorage?.getItem(key);
  return parseStorageValue(value);
}

export function saveValueToLocalStorage<TState>(
  key: string,
  value: TState | undefined,
) {
  if (value) {
    localStorage?.setItem(key, JSON.stringify(value));
  } else {
    localStorage?.removeItem(key);
  }
}

export function useLocalStorage<TState>(
  key: string,
  defaultValue?: TState,
): {
  readonly value: TState;
  readonly setValue: Setter<TState>;
  readonly loaded: boolean;
} {
  const [cachedValue, setCachedValue] = useState<TState>(
    defaultValue as TState,
  );

  useEffect(() => {
    setCachedValue(getValueFromLocalStorage(key) ?? (defaultValue as TState));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { addListener } = useEvent<StorageEvent>("storage");

  const createStorageListener = (onChange: StorageListener) =>
    function (this: Window, event: Event | StorageEvent) {
      if (!isEventType<StorageEvent>(event, "StorageEvent")) {
        return;
      }

      if (event.storageArea !== window.localStorage) {
        return;
      }

      if (event.key !== key) {
        return;
      }

      onChange(parseStorageValue(event.newValue));
    } as StorageListener;

  useEffect(() => {
    addListener(createStorageListener(setValue as StorageListener));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const setValue = (value: TState) => {
    setCachedValue(value);
    saveValueToLocalStorage(key, value);
  };

  const value = cachedValue;

  const loaded = Boolean(value);

  return { value, loaded, setValue };
}
