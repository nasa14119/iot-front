"use client";
import { NotificationElement } from "./NotificationElement";
import { Notification } from "@types";
import { ErrorServer } from "@components/notificaciones/ErrorServer";
import { useEffect, useEffectEvent, useState } from "react";
import { useNotifications } from "@components/notificaciones/store";
import { useRouter } from "next/navigation";
import { RiDeleteBin7Fill } from "@remixicon/react";

type Props = { status: number; notifications: Notification[] | null };

export function NotificationsPage({ status, notifications }: Props) {
  const last_val = useNotifications();
  const [state, setState] = useState(() =>
    notifications === null ? null : notifications.slice(1)
  );
  const update = useEffectEvent((new_val: typeof last_val) => {
    if (!new_val) return;
    setState(() => {
      if (state === null) return [new_val];
      return [new_val, ...state];
    });
  });
  useEffect(() => {
    update(last_val);
  }, [last_val]);
  const { refresh } = useRouter();
  const handleClick = async () => {
    setState(null);
    await fetch("/api/notifications", { method: "DELETE" });
    refresh();
  };
  if (status === 204 && state === null) return null;
  if (status !== 200 && status !== 204) return <ErrorServer />;
  const sliced_state =
    !state || state === null || state.length <= 1 ? null : state.slice(1);
  return (
    <>
      <button
        className="flex items-center px-2 gap-x-2 justify-start sticky top-5"
        onClick={handleClick}
      >
        <RiDeleteBin7Fill className="text-red-700 rounded-full p-2 size-10 bg-red-700/10" />
      </button>
      {sliced_state !== null && (
        <>
          <h2 className="pl-2 text-xl font-semibold">Historial</h2>
          {sliced_state.map((noti) => {
            return <NotificationElement data={noti} key={noti.id} />;
          })}
        </>
      )}
    </>
  );
}
