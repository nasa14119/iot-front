"use client";
import Link from "next/link";
import { ReactNode } from "react";
type Props = {
  link: string;
  icon: ReactNode;
  reload?: boolean;
};
export const NavIcon = ({ link, icon, reload = false }: Props) => {
  const className = "text-black/80 transition-all ease-out duration-200";
  if (reload) {
    return (
      <a
        href={link}
        onClick={() => {
          setTimeout(() => {
            (document.activeElement as HTMLElement)?.blur();
          }, 500);
        }}
      >
        {icon}
      </a>
    );
  }
  return (
    <Link
      href={link}
      className={className}
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
