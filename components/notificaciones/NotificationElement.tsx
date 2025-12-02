import { useIsFirstLoad } from "@components/notificaciones/hooks/useIsFirstLoad";
import { format } from "@formkit/tempo";
import { RiDropFill, RiInformation2Line } from "@remixicon/react";
import { Notification } from "@types";
import styles from "./styles.module.css";
import { tw } from "@utils";
import { CSSProperties } from "react";
type Props = {
  data: Notification;
};
type IconProps = {
  type: Notification["data"]["source"];
  className?: string;
};
const Icon = ({ type, className: propClass, ...rest }: IconProps) => {
  const className = tw("size-8", propClass);
  if (type === "PUMP")
    return <RiDropFill className={tw(className, "text-blue-500")} {...rest} />;
  return (
    <RiInformation2Line className={tw(className, "text-green-600")} {...rest} />
  );
};
export function NotificationElement({ data }: Props) {
  const payload = data.data;
  const isFirst = useIsFirstLoad();
  return (
    <section
      key={data.id}
      className={tw(
        "rounded-4xl px-6 py-2 sm:py-1 aspect-16/2 flex opacity-100 items-center m-2 max-h-20",
        {
          "bg-red-500/50 text-white": payload.prioridad === "error",
        },
        {
          "bg-yellow-500/50 ": payload.prioridad === "warning",
        },
        {
          "bg-neutral-200": payload.prioridad === "none",
        },
        { [styles["main-notification-animation"]]: !isFirst },
        { "fade-in": isFirst }
      )}
      style={{ "--duration-fade": "50ms" } as CSSProperties}
    >
      <p className="max-w-[45ch] text-sm font-semibold leading-4">
        <span className="font-medium text-xs">
          {format(data.stamp, "h:mm:ss a")}
        </span>
        <br />
        {payload.message}
      </p>
      <Icon type={payload.source} className={"ml-auto"} />
    </section>
  );
}
