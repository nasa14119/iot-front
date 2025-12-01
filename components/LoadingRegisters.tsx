import { CSSProperties } from "react";
export function LoadingRegisters() {
  return (
    <main className="h-full flex flex-col p-5 pb-20 gap-y-3 justify-evenly">
      <div className="rounded-4xl bg-neutral-200 size-full loading"></div>
      <div
        className="rounded-4xl bg-neutral-200 size-full loading"
        style={{ "--duration-loading": "150ms" } as CSSProperties}
      ></div>
      <div
        className="rounded-4xl bg-neutral-200 size-full loading"
        style={{ "--duration-loading": "250ms" } as CSSProperties}
      ></div>
    </main>
  );
}
