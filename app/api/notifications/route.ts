import { check_link } from "@fetch";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET() {
  const cookieJar = await cookies();
  let url_cookie = "";
  if (cookieJar.has("url")) {
    url_cookie = cookieJar.get("url")?.value ?? "";
  }
  const [err, url] = await check_link(url_cookie);
  if (err !== null)
    return NextResponse.json({ error: err, url: null }, { status: 400 });
  const parsing = new URL(url);
  parsing.protocol = "wss";
  if (process.env.NODE_ENV === "development") {
    parsing.protocol = "ws";
  }
  parsing.pathname = "/notifications";
  return NextResponse.json({
    error: null,
    url: parsing.toString(),
  });
}
