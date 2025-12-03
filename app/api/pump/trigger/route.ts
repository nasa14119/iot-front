import { check_link } from "@fetch";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET() {
  const cookieJar = await cookies();
  let url;
  if (cookieJar.has("url")) {
    url = cookieJar.get("url");
    if (url) {
      url = url.value;
    }
  }
  const [err, new_link] = await check_link(url);
  try {
    if (err !== null) {
      throw { code: "SERVER_DOWN", error: err };
    }
    url = new_link;
    const req = await fetch(`${url}/water/trigger`);
    const res = NextResponse.json(await req.json, { status: req.status });
    res.cookies.set("url", url, {
      httpOnly: true,
      sameSite: false,
      maxAge: 3600,
    });
    return res;
  } catch (err) {
    cookieJar.delete("url");
    const route_error = err as Record<string, string | number | null>;
    let status = 500;
    if (route_error.code === "SERVER_DOWN") status = 521;
    return NextResponse.json({ ...route_error, status }, { status });
  }
}
