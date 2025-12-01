import { format, addDay, addMonth } from "@formkit/tempo";
import { create } from "zustand";
import { persist } from "zustand/middleware";
type Store = {
  date: Date;
  format: string;
  setValue: (val: Partial<Store>) => void;
  prevWeek: () => void;
  nextWeek: () => void;
  nextMonth: () => void;
  prevMonth: () => void;
  reset: () => void;
};
const formatDate = (d: Date) => format(d, "DD/MM/YY", "es");
const useStoreDate = create(
  persist<Store>(
    (set) => ({
      date: new Date(),
      format: formatDate(new Date()),
      setValue: (val: Partial<Store>) => set(val),
      nextWeek: () =>
        set((state) => {
          const new_date = addDay(state.date, 7);
          return {
            date: new_date,
            format: formatDate(new_date),
          };
        }),
      prevWeek: () => {
        set((state) => {
          const new_date = addDay(state.date, -7);
          return {
            date: new_date,
            format: formatDate(new_date),
          };
        });
      },
      nextMonth: () =>
        set((state) => {
          const new_date = addMonth(state.date, 1);
          return {
            date: new_date,
            format: formatDate(new_date),
          };
        }),
      prevMonth: () => {
        set((state) => {
          const new_date = addMonth(state.date, -1);
          return {
            date: new_date,
            format: formatDate(new_date),
          };
        });
      },
      reset: () => {
        const now = new Date();
        set({
          date: now,
          format: formatDate(now),
        });
      },
    }),
    {
      name: "date-store",
    }
  )
);
export const useDataStore = () => {
  const format = useStoreDate((s) => s.format);
  if (!format) {
    useStoreDate
      .getState()
      .setValue({ date: new Date(), format: formatDate(new Date()) });
  }
  return format;
};
export const useDataDate = () => {
  const format = useStoreDate((s) => s.format);
  const date = useStoreDate((s) => s.date);
  if (!format) {
    useStoreDate
      .getState()
      .setValue({ date: new Date(), format: formatDate(new Date()) });
  }
  return date;
};
export const useControlsWeek = () => {
  const next = useStoreDate((s) => s.nextWeek);
  const prev = useStoreDate((s) => s.prevWeek);
  return { next, prev };
};
export const useControlsMonth = () => {
  const next = useStoreDate((s) => s.nextMonth);
  const prev = useStoreDate((s) => s.prevMonth);
  return { next, prev };
};
export const useResetDate = () => {
  const reset = useStoreDate((s) => s.reset);
  return reset;
};
