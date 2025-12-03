import { RiNotificationSnoozeLine } from "@remixicon/react";
export function EmptyNotification({}) {
  return (
    <div className="flex opacity-100 items-center justify-center m-2 max-h-20 bg-neutral-100 py-2 rounded-4xl">
      <RiNotificationSnoozeLine className="size-8 text-neutral-700" />
      <span>Sin notificaciones</span>
    </div>
  );
}
