import { RiBookOpenFill, RiHomeFill } from "@remixicon/react";
import { NavIcon } from "./NavIcon";

export function Nav({}) {
  return (
    <nav className="fixed bottom-0 z-50 rounded-t-3xl bg-neutral-100 inset-x-0 px-5 pt-3 pb-2 flex justify-evenly *:focus:scale-110">
      <NavIcon link="/" icon={<RiHomeFill className="size-8" />} />
      <NavIcon link="/registros" icon={<RiBookOpenFill className="size-8" />} />
    </nav>
  );
}
