import { useEffect, useRef } from "react";

export const useIsFirstLoad = () => {
  const val = useRef(true);
  useEffect(() => {
    if (!val.current) return;
    val.current = false;
  }, []);
  // eslint-disable-next-line react-hooks/refs
  return val.current;
};
