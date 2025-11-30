import { useObserver, useSetter } from "@components/NavToday/store";
import styles from "./styles.module.css";
import { tw } from "@utils";
const keys = [
  { href: "registros/humedad", title: "humedad" },
  { href: "registros/temperatura", title: "temperatura" },
  { href: "registros/tierra", title: "tierra" },
];
export function NavToday() {
  const key = useObserver();
  const setKey = useSetter();
  return (
    <nav className="px-2 sticky top-2 flex gap-2 *:capitalize z-50">
      {keys.map(({ href, title }) => (
        <span
          className={tw(
            styles["nav-item"],
            "rounded-4xl px-2 py-1 opacity-100 duration-200 transition-all ease-in"
          )}
          data-state={href === key}
          key={title}
          onClick={() => {
            document
              .querySelector("#" + href.split("/").at(-1))
              ?.scrollIntoView({
                behavior: "smooth",
                block: "center",
              });
            setKey(href);
          }}
        >
          {title}
        </span>
      ))}
    </nav>
  );
}
