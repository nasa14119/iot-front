import { RiArrowLeftLine as Arrow } from "@remixicon/react";
import { tw } from "@utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
const keys = [
  { href: "/registros/humedad", title: "humedad" },
  { href: "/registros/temperatura", title: "temperatura" },
  { href: "/registros/tierra", title: "tierra" },
];
export function NavMonth({}) {
  const pathname = usePathname();
  return (
    <nav className="px-2 sticky top-2 font-semibold flex justify-start items-center gap-2 z-50 [grid-area:nav]">
      <Link href="/registros">
        <Arrow className="size-7 rounded-full  text-black bg-neutral-200 p-1" />
      </Link>
      {keys.map((link) => (
        <Link
          href={link.href}
          key={link.title}
          className={tw(
            "rounded-4xl duration-200 transition-all bg-neutral-100 capitalize px-2 py-1",
            { "bg-black text-white": pathname === link.href }
          )}
        >
          {link.title}
        </Link>
      ))}
    </nav>
  );
}
