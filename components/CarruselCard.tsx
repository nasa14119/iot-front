"use client";
import { CarrusselElement } from "@types";
import { tw } from "@utils";
import Image from "next/image";
import { CSSProperties, HTMLAttributes } from "react";

type Props = CarrusselElement &
  Omit<HTMLAttributes<HTMLAnchorElement>, "style"> & {
    style?: CSSProperties & { [key: `--${string}`]: string | number };
  };

export function CarruselCard({
  img,
  title,
  desc,
  className,
  href,
  loader,
  ...rest
}: Props) {
  const imgLoader = !loader ? "bg-neutral-300/10" : "";
  const imgBlur: Record<string, string> = loader
    ? { placeholder: "blur", blurDataURL: loader }
    : { placeholder: "empty", blurDataURL: "" };
  return (
    <a
      className={tw(
        "flex overflow-hidden flex-col h-full aspect-square",
        className
      )}
      href={href}
      {...rest}
    >
      <Image
        {...imgBlur}
        height={500}
        width={500}
        src={img}
        alt="Imagen ilustrativa"
        className={`object-cover h-4/5 w-full rounded-3xl text-xs ${imgLoader}`}
      />
      <h3 className="capitalize font-medium">{title}</h3>
      <span className="text-sm text-black/50">{desc}</span>
    </a>
  );
}
