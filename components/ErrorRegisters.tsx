import { RiCloudOffFill, RiDatabase2Fill } from "@remixicon/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = { status: number; error?: string };
export function ErrorRegisters({ status, error }: Props) {
  const pathname = usePathname();
  const title = pathname.split("/").at(-1);
  return (
    <main className="w-dvw h-dvh flex justify-center items-center mx-auto max-w-[500px] flex-col pb-[10dvh] pt-1 px-[10vw] md:px-2">
      <h1 className="font-bold text-3xl capitalize text-center py-5">
        {title}
      </h1>
      <div className="rounded-4xl size-full flex justify-center items-center bg-neutral-300/20 flex-col">
        {status === 204 ? (
          <RiDatabase2Fill className="size-30 text-black/90" />
        ) : (
          <RiCloudOffFill className="size-30 text-black/90" />
        )}
        <span className="font-semibold text-2xl">
          {status === 204 && !error ? "Database empty" : "Server down"}
          {error}
        </span>
        <Link
          href="/"
          className="bg-neutral-300 text-blue-950 w-3/4 py-1 text-xs text-center rounded-3xl font-semibold mt-2 max-w-[200px]"
        >
          Go Home
        </Link>
      </div>
    </main>
  );
}
