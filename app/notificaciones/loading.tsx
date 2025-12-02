import { RegistrosHeader } from "@components/RegistrosHeader";

export default function loading() {
  return (
    <main className="regiters-layout h-dvh">
      <RegistrosHeader />
      <div className="size-full [grid-area:main] flex justify-center items-center pb-20 px-5">
        <div className="size-full loading rounded-4xl bg-neutral-200 "></div>
      </div>
    </main>
  );
}
