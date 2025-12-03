import { PumpRegistre } from "@types";
import { create } from "zustand";

type Store = {
  data: PumpRegistre | null;
  setData: (new_val: Store["data"]) => void;
};
const useStoreWater = create<Store>((set) => ({
  data: null,
  setData: (new_val) => set({ data: new_val }),
}));

export const useValueWaterSetter = () => {
  return useStoreWater((s) => s.setData);
};
export const useWaterData = () => {
  return useStoreWater((s) => s.data);
};
