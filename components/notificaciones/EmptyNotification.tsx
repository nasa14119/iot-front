import { RiNotificationSnoozeLine } from "@remixicon/react";
export function EmptyNotification({}) {
  return (
    <div className="rounded-4xl px-6 py-2 sm:py-1 aspect-16/2 flex opacity-100 items-center justify-center m-2 max-h-20 bg-neutral-100">
      <RiNotificationSnoozeLine className="size-8 text-neutral-700" />
      <span>Sin notificaciones</span>
    </div>
  );
}
