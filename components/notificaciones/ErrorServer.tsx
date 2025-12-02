"use client";
import { RiCloudOffFill } from "@remixicon/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export function ErrorServer() {
  const { refresh } = useRouter();
  useEffect(() => {
    const refetch = async () => {
      while (true) {
        await new Promise((res) => setTimeout(res, 5000));
        const data = await fetch("/api/notifications").catch();
        if (data.ok) break;
      }
      refresh();
    };
    refetch();
  }, [refresh]);
  return (
    <div className="rounded-4xl  px-5 py-2 m-2 aspect-16/2  bg-neutral-100 flex justify-center gap-x-2 items-center ">
      <RiCloudOffFill className="size-8 text-neutral-700" />
      <span>Error de conexion</span>
    </div>
  );
}
