import { CarruselCard } from "./CarruselCard";
import type { CarrusselElement } from "@types";
const CARDS: CarrusselElement[] = [
  {
    desc: "Ver los registros de temperatura",
    href: "/registros/temperatura",
    img: "/imgs/temp-carrusel.jpg",
    title: "temperatura",
  },
  {
    desc: "Ver los registros humedad",
    href: "/registros/humedad",
    img: "/imgs/humedad-carrusel.jpg",
    title: "humedad",
  },
  {
    desc: "Ver los registros de riego",
    href: "/registros/riego",
    img: "/imgs/riego-carrusel.jpeg",
    title: "riego",
  },
  {
    desc: "Registro humndad de la tierra",
    href: "/registros/tierra",
    img: "/imgs/tierra-carrusel.jpg",
    title: "Humedad Tierra",
  },
];
export function Carrusel({}) {
  return (
    <section className="h-[32vh] overflow-x-scroll max-w-dvw py-2 [scrollbar-width:none] ">
      <div className="h-full w-fit px-2 flex overflow-scroll gap-x-2">
        {CARDS.map((info) => (
          <CarruselCard {...info} key={info.title} className="snap-center" />
        ))}
      </div>
    </section>
  );
}
