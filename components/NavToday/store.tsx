import { useEffect, useEffectEvent, useRef } from "react";
import { create } from "zustand";
type Store = {
  key?: string;
  setKey: (key: string) => void;
};
const useStore = create<Store>((set) => ({
  key: "",
  setKey: (key) => set({ key }),
}));
export const useIndicator = (key: string) => {
  const setKey = useStore((s) => s.setKey);
  const ref = useRef<HTMLDivElement>(null);
  const update = useEffectEvent(() => setKey(key));
  useEffect(() => {
    const element = ref.current;
    if (element === null) return;
    const obsever = new IntersectionObserver(
      ([entrie]) => {
        if (entrie.isIntersecting) {
          update();
        }
      },
      {
        threshold: 1,
      }
    );
    obsever.observe(element);
    return () => {
      obsever.unobserve(element);
    };
  }, [ref]);
  return ref;
};
export const useObserver = () => {
  return useStore((s) => s.key);
};
export const useSetter = () => {
  return useStore((s) => s.setKey);
};
