"use client";
import { usePathname } from "next/navigation";

// type Props = { title: string };

export function RegistrosHeader({}) {
  const pathname = usePathname();
  const title = pathname.split("/").at(-1);
  return (
    <header className="px-2 text-center py-5 capitalize bg-white ">
      <h1 className="text-center text-3xl font-bold">{title}</h1>
    </header>
  );
}
