"use client";
import { useWaterData } from "@components/Pump/store";
import { PumpRegistre } from "@types";
import {
  createContext,
  PropsWithChildren,
  useState,
  useEffect,
  useEffectEvent,
  useContext,
} from "react";
const Context = createContext<PumpRegistre[] | null>([]);
export function PumpProvider({
  data,
  children,
}: { data: null | PumpRegistre[] } & PropsWithChildren) {
  const [registres, setState] = useState<PumpRegistre[] | null>(data);
  const current_registre = useWaterData();
  const update = useEffectEvent((val: typeof current_registre) => {
    if (val === null || !val) return;
    setState((prev) => {
      if (prev === null) return [val];
      if (prev.findIndex((v) => v.stamp == val.stamp) >= 0) return prev;
      return [val, ...prev];
    });
  });
  useEffect(() => {
    update(current_registre);
  }, [current_registre]);
  if (registres === null || !current_registre || current_registre === null)
    return null;
  return (
    <Context.Provider
      value={registres.filter((v) => v.stamp != current_registre.stamp)}
    >
      {children}
    </Context.Provider>
  );
}
export const useWaterRegisters = () => {
  const context = useContext(Context);
  return context;
};
