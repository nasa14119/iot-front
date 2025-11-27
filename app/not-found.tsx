"use client";
import { RiFileShredFill } from "@remixicon/react";
import Link from "next/link";

export default function Error({}) {
  return (
    <div className="size-full  h-dvh grid grid-rows-[1fr_8vh] grid-cols-1 justify-center">
      <div className="flex justify-center items-center">
        <div className=" bg-neutral-300/20 rounded-4xl w-4/5 h-[90%]">
          <div className="size-full flex justify-center flex-col items-center gap-y-2">
            <RiFileShredFill className="size-30 text-black/90" />
            <h1 className="text-2xl font-semibold">Error en la pagina</h1>
            <p className="text-sm w-[25ch] md:w-[35ch] text-center pt-2">
              No pudimos encontrar la página que estás buscando.
            </p>
            <Link
              href="/"
              className="bg-neutral-300 text-blue-950 w-3/4 py-1 text-xs text-center rounded-3xl font-semibold mt-2 max-w-[200px]"
            >
              Go Home
            </Link>
            <span className="text-xs">Staus: 404</span>
          </div>
        </div>
      </div>
    </div>
  );
}
