"use client";
import Link from "next/link";
import { ReactNode, useRef } from "react";
type Props = {
  link: string;
  icon: ReactNode;
};
export const NavIcon = ({ link, icon }: Props) => {
  "use client";
  const ref = useRef<HTMLAnchorElement>(null);
  return (
    <Link
      href={link}
      className="text-black/80 transition-all ease-out duration-200"
      onClick={() => {
        setTimeout(() => {
          ref.current?.blur();
        }, 750);
      }}
      ref={ref}
    >
      {icon}
    </Link>
  );
};
