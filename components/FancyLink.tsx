import { PropsWithChildren } from "react";
import { tw } from "../utils";
import { RiArrowRightSLine } from "@remixicon/react";

type Props = { href: string; className?: string } & PropsWithChildren;

export function FancyLink({ href, children, className }: Props) {
  return (
    <a
      href={href}
      className={tw("flex px-2 justify-start gap-x-2 items-center", className)}
    >
      <span>{children}</span>
      <span className="bg-neutral-300/20 rounded-full">
        <RiArrowRightSLine className="p-1 pointer-events-none" />
      </span>
    </a>
  );
}
