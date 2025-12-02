"use client";

import { useNotifications } from "@components/notificaciones/store";
import { EmptyNotification } from "./EmptyNotification";
import { useNotificationSocket } from "./hooks/useNotificationSocket";
import { LoadingBanner } from "./LoadingBanner";
import { NotificationElement } from "./NotificationElement";

type Props = { url: string };
export function Banner({ url }: Props) {
  const [isLoading] = useNotificationSocket(url);
  const data = useNotifications();
  if (isLoading) {
    return <LoadingBanner />;
  }
  if (data === null) {
    return (
      <section className="rounded-4xl  px-5 py-2 m-4 aspect-16/4  bg-neutral-100 flex flex-col">
        <EmptyNotification />
      </section>
    );
  }
  return <NotificationElement data={data} />;
}
