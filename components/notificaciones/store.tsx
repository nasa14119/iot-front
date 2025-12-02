import { parse } from "@formkit/tempo";
import { Notification } from "@types";
import { create } from "zustand";
type Store = {
  state: Notification | null;
  setNotification: (new_noti: Store["state"]) => void;
  isChanging: boolean;
  setChange: (isChanging: boolean) => void;
};
const useNotificationsStore = create<Store>((set) => ({
  state: null,
  setNotification: (new_noti) => set({ state: new_noti }),
  setChange: (isChanging) => set({ isChanging }),
  isChanging: false,
}));
type ChangeNotification =
  | ({
      stamp: string;
    } & Omit<Notification, "stamp">)
  | null;
export const useChangeNotification = () => {
  const setNoti = useNotificationsStore((s) => s.setNotification);
  const setChange = useNotificationsStore((s) => s.setChange);
  return (new_val: ChangeNotification) => {
    if (new_val === null) return setNoti(null);
    setChange(true);
    setNoti({ ...new_val, stamp: parse(new_val.stamp) });
    setTimeout(() => setChange(false), 1000);
  };
};
export const useIsChangingFlag = () => {
  return useNotificationsStore((s) => s.isChanging);
};
export const useNotifications = () => {
  return useNotificationsStore((s) => s.state);
};
