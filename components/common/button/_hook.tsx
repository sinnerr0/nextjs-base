import { MouseEvent, useCallback } from "react";

export function useContainerHook() {
  const onClickHandler = useCallback((e: MouseEvent) => {
    console.info("onClickHandle", e.type);
  }, []);

  return {
    onClickHandler,
  };
}
