"use client";
import { RiCloudOffFill, RiDatabase2Fill } from "@remixicon/react";
import { FetchError } from "@types";
import { getEspLastRegistreClient } from "@utils";
import { useRouter } from "next/navigation";
import { useEffect, useEffectEvent } from "react";
type CardProps = FetchError & { className?: string };
const Icon = ({ status, className }: CardProps) => {
  if (status === 204) return <RiDatabase2Fill className={className} />;
  return <RiCloudOffFill className={className} />;
};
const Text = ({ status, ...rest }: CardProps) => {
  if (status === 204) return <span {...rest}>Database Empty</span>;
  if (status === 503) return <span {...rest}>Service Down</span>;
  return <span {...rest}>Something unexpected happend</span>;
};
const COOLDOWN = 2 * 1000;
export function ErrorSummary({ status }: FetchError) {
  const { refresh } = useRouter();
  const refetch = useEffectEvent(async () => {
    let data = await getEspLastRegistreClient();
    do {
      await new Promise((res) => setTimeout(res, COOLDOWN));
      data = await getEspLastRegistreClient();
    } while ("status" in data);
    refresh();
  });
  useEffect(() => {
    refetch();
  }, []);
  return (
    <div className="w-full aspect-video flex justify-center items-center">
      <div className="rounded-4xl size-[90%] flex justify-center items-center bg-neutral-300/20 flex-col">
        <Icon status={status} className="size-16 text-black/90" />
        <Text status={status} />
        <span className="text-xs">status:{status}</span>
      </div>
    </div>
  );
}
