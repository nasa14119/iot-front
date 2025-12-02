import { BannerServer } from "@components/notificaciones/BannerServer";
import { NotificationsPage } from "@components/notificaciones/NotificationsPage";
import { RegistrosHeader } from "@components/RegistrosHeader";
import { check_link } from "@fetch";

const get_notifications = async () => {
  const [err, url] = await check_link();
  if (err != null) return [521, null];
  try {
    const res = await fetch(`${url}/notifications`).catch(() => {
      throw "FETCH_ERROR";
    });
    if (!res.ok) return [res.status, null];
    if (res.status === 204) return [204, null];
    return [200, await res.json()];
  } catch (err) {
    if (err === "FETCH_ERROR") return [521, null];
    return [500, null];
  }
};
export default async function Notifications() {
  const [status, data] = await get_notifications();
  return (
    <main className=" h-fit min-h-dvh">
      <RegistrosHeader />
      <div className="relative size-full [grid-area:main] flex flex-col justify-center items-center pb-20 px-5 *:w-full">
        {data && (
          <h2 className="font-semibold text-xl pl-2">Ultimo regiestro</h2>
        )}
        <BannerServer />
        <NotificationsPage status={status} notifications={data} />
      </div>
    </main>
  );
}
export const revalidate = 0;
