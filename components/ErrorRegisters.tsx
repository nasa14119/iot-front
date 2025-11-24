import { RiCloudOffFill, RiDatabase2Fill } from "@remixicon/react";
import Link from "next/link";

type Props = { status: number };
export function ErrorRegisters({ status }: Props) {
  return (
    <div className="w-dvw h-dvh flex justify-center items-center mx-auto">
      <div className="rounded-4xl w-[90%] h-[90%] flex justify-center items-center bg-neutral-300/20 flex-col">
        {status === 204 ? (
          <RiDatabase2Fill className="size-30 text-black/90" />
        ) : (
          <RiCloudOffFill className="size-30 text-black/90" />
        )}
        <span className="font-semibold text-2xl">
          {status === 204 ? "Database empty nothing to see" : "Server down"}
        </span>
        <Link
          href="/"
          className="bg-neutral-300 text-blue-950 w-3/4 py-1 text-xs text-center rounded-3xl font-semibold mt-2"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
}
