import { RiNotificationSnoozeLine } from "@remixicon/react";

type Props = {};

export function EmptyNotification({}: Props) {
  return (
    <div className="size-full flex justify-center items-center fade-in">
      <RiNotificationSnoozeLine className="size-10" />
    </div>
  );
}
