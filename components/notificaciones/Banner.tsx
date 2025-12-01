"use client";

import { EmptyNotification } from "@components/notificaciones/EmptyNotification";
import { LoadingBanner } from "@components/notificaciones/LoadingBanner";

export function Banner({}) {
  if (true) {
    return <LoadingBanner />;
  }
  return (
    <section className="rounded-4xl  px-5 py-2 m-4 aspect-16/4  bg-neutral-100 flex flex-col">
      <EmptyNotification />
    </section>
  );
}
