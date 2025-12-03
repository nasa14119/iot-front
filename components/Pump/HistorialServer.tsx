"use server";
import { HistorialSection } from "@components/Pump/HistorialSection";
import { PumpProvider } from "@components/Pump/PumpProvider";
import { check_link, getPumpValues } from "@fetch";
const get_data = async () => {
  const [err, url] = await check_link();
  if (err != null) return [521, null];
  return await getPumpValues(url);
};
export async function HistorialServer() {
  const [status, data] = await get_data();
  // console.log(JSON.stringify(data));
  if (!data || data === null || status !== 200) return null;
  return (
    <PumpProvider data={data}>
      <HistorialSection />
    </PumpProvider>
  );
}
