import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { BragType } from "../../../core/models";
import { createAddBragScreenPath } from "../../add-brag";

export function useKeycharShortcuts(bragTypes: readonly BragType[]) {
  const navigate = useNavigate();

  const bragTypeByKeychar = Object.fromEntries(
    bragTypes.map((bragType) => [bragType.keychar, bragType]),
  );

  function handleKeydown(event: KeyboardEvent) {
    const bragType = bragTypeByKeychar[event.key];

    if (event.ctrlKey || event.altKey || event.shiftKey || event.metaKey) {
      return;
    }

    if (event.key.length !== 1) {
      return;
    }

    if (bragType) {
      event.preventDefault();
      navigate(createAddBragScreenPath(bragType.id));
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
