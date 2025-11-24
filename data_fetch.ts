"use server";
import { Registres } from "@types";
import { error, RequestResponse } from "@utils";
type CheckError = [err: null, data: string] | [err: string, data: null];
export const check_link = async (url?: string): Promise<CheckError> => {
  if (process.env.NODE_ENV === "development") {
    if (!process.env.GATEWAY_PATH) {
      throw new Error("Set up the development link");
    }
    return [null, process.env.GATEWAY_PATH];
  }
  if (url) {
    try {
      const isOk = (await fetch(`${url}/helth`)).ok;
      if (isOk) return [null, url];
    } catch {
      url = "";
    }
  }
  try {
    const res = await fetch(`${process.env.THINGSKEAK_URL}`);
    if (!res.ok) throw null;
    const data = await res.json();
    const new_link = `https://${data.feeds[0].field1}`;
    url = new_link;
  } catch {
    return ["ThingSpeack Error", null];
  }
  try {
    const helth = await fetch(`${url}/helth`, { redirect: "follow" });
    const isOk = helth.ok;
    if (!isOk || !url) throw null;
    return [null, url];
  } catch {
    return ["Server offline", null];
  }
};
export const getEspLastRegistre = async (): RequestResponse => {
  try {
    const [err, url] = await check_link();
    if (err !== null) {
      throw { code: "SERVER_DOWN", error: err };
    }
    const esp = await fetch(`${url}/registre`, { redirect: "follow" }).catch(
      () => {
        throw { code: "FETCH" };
      }
    );
    if (esp.status === 204) return error(204);
    if (!esp.ok) return error(esp.status);
    return await esp.json();
  } catch (e) {
    const err = e as Record<string, string>;
    if (err?.code === "FETCH") return error(503);
    if (err.code === "SERVER_DOWN") {
      const res = error(521);
      res.error = err.error;
      return res;
    }
    return error(500);
  }
};

export const getEspRegistresDay = async (): Promise<
  [number, Registres | null]
> => {
  const [err, url] = await check_link();
  if (err !== null) {
    return [521, null];
  }
  const res = await fetch(`${url}/registres/day`);
  if (!res.ok) return [res.status, null];
  if (res.status === 204) return [204, null];
  const registres = await res.json();
  return [200, registres];
};
