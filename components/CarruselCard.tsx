import { CarrusselElement } from "@types";
import { tw } from "@utils";
import Image from "next/image";
import { HTMLAttributes } from "react";

type Props = CarrusselElement & HTMLAttributes<HTMLDivElement>;

export function CarruselCard({ img, title, desc, className, href }: Props) {
  return (
    <a
      className={tw(
        "flex overflow-hidden flex-col h-full aspect-square",
        className
      )}
      href={href}
    >
      <Image
        height={500}
        width={500}
        src={img}
        alt="Imagen ilustrativa"
        className="object-cover h-4/5 w-full rounded-3xl text-xs"
      />
      <h3 className="capitalize font-medium">{title}</h3>
      <span className="text-sm text-black/50">{desc}</span>
    </a>
  );
}
