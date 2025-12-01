"use client";
import { NavMonth } from "@components/NavMonth";
import { NavToday } from "@components/NavToday";
import { usePathname } from "next/navigation";
export function NavRegisters() {
  const pathname = usePathname();
  if (pathname === "/registros") return <NavToday />;
  return <NavMonth />;
}
