import { parse } from "@formkit/tempo";
import { Notification } from "@types";
import { create } from "zustand";
type Store = {
  state: Notification | null;
  setNotification: (new_noti: Store["state"]) => void;
};
const useNotificationsStore = create<Store>((set) => ({
  state: null,
  setNotification: (new_noti) => set({ state: new_noti }),
}));
type ChangeNotification =
  | ({
      stamp: string;
    } & Omit<Notification, "stamp">)
  | null;
export const useChangeNotification = () => {
  const setNoti = useNotificationsStore((s) => s.setNotification);
  return (new_val: ChangeNotification) => {
    if (new_val === null) return setNoti(null);
    setNoti({ ...new_val, stamp: parse(new_val.stamp) });
  };
};
export const useNotifications = () => {
  return useNotificationsStore((s) => s.state);
};
