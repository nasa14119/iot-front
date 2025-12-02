import { RiNotificationSnoozeLine } from "@remixicon/react";
export function EmptyNotification({}) {
  return (
    <div className="rounded-4xl  px-5 py-2 m-2 aspect-16/2  bg-neutral-100 flex justify-center gap-x-2 items-center ">
      <RiNotificationSnoozeLine className="size-8 text-neutral-700" />
      <span>Sin notificaciones</span>
    </div>
  );
}
