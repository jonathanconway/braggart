import { isFunction } from "lodash";
import { ModifierKey, useEffect } from "react";

export const ModifierKeys = {
  Alt: "Alt",
  Control: "Control",
  Shift: "Shift",
} as Record<ModifierKey, ModifierKey>;

export type Key = string;

export type KeyboardShortcutsMap = Partial<
  Record<
    ModifierKey | Key,
    | VoidFunction
    | Partial<
        Record<
          ModifierKey | Key,
          Partial<Record<ModifierKey | Key, VoidFunction>>
        >
      >
  >
>;

export function useKeyboardShortcut({
  shortcuts,
}: {
  readonly shortcuts: KeyboardShortcutsMap;
}) {
  function handleKeydown(event: KeyboardEvent) {
    if (!event.key) {
      return;
    }

    let shortcut: KeyboardShortcutsMap | VoidFunction | undefined = shortcuts;
    const modifiers = [];

    if (event.altKey) {
      modifiers.push(ModifierKeys.Alt);
      shortcut = shortcut[ModifierKeys.Alt] as
        | KeyboardShortcutsMap
        | VoidFunction;
    }

    if (event.ctrlKey) {
      modifiers.push(ModifierKeys.Control);
      if (isFunction(shortcut)) {
        return;
      }
      shortcut = shortcut[ModifierKeys.Control] as
        | KeyboardShortcutsMap
        | VoidFunction;
    }

    if (event.shiftKey) {
      modifiers.push(ModifierKeys.Shift);
      if (isFunction(shortcut)) {
        return;
      }
      shortcut = shortcut[ModifierKeys.Shift] as
        | KeyboardShortcutsMap
        | VoidFunction;
    }

    if (isFunction(shortcut)) {
      return;
    }

    shortcut = shortcut[event.key] as VoidFunction;

    if (isFunction(shortcut)) {
      shortcut();
    }
  }

  useEffect(() => {
    window.addEventListener("keydown", handleKeydown);

    return () => {
      window.removeEventListener("keydown", handleKeydown);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}
