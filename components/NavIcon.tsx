"use client";
import Link from "next/link";
import { ReactNode } from "react";
type Props = {
  link: string;
  icon: ReactNode;
};
export const NavIcon = ({ link, icon }: Props) => {
  return (
    <Link
      href={link}
      className="text-black/80 transition-all ease-out duration-200"
      onClick={() => {
        setTimeout(() => {
          (document.activeElement as HTMLElement)?.blur();
        }, 500);
      }}
    >
      {icon}
    </Link>
  );
};
