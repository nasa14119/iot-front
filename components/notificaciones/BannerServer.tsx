"use server";
import { check_link } from "@fetch";
import { ErrorServer } from "./ErrorServer";
import { Banner } from "./Banner";

async function get_data() {
  const [err, url] = await check_link();
  if (err !== null) return { error: 521, url: null };
  const parsing = new URL(url);
  parsing.protocol = "wss";
  if (process.env.NODE_ENV === "development") {
    parsing.protocol = "ws";
  }
  parsing.pathname = "/notifications";
  return {
    error: null,
    url: parsing.toString(),
  };
}
export async function BannerServer() {
  const { error, url } = await get_data();
  if (error !== null) return <ErrorServer />;
  return <Banner url={url} />;
}
