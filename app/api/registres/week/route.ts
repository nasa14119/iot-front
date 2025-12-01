import { check_link, getEspRegistresWeek } from "@fetch";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const cookieJar = await cookies();
  let url = "";
  if (cookieJar.has("url")) {
    const cookieUrl = cookieJar.get("url") as { value: string };
    url = cookieUrl?.value;
  }
  const [err, new_link] = await check_link(url);
  if (err !== null) {
    cookieJar.delete("url");
    return NextResponse.json({ status: 521, error: err }, { status: 521 });
  }
  cookieJar.set("url", new_link);
  const querry = req.nextUrl.searchParams;
  const [status, data] = await getEspRegistresWeek(new_link, querry);
  if (status === 204) return new NextResponse(null, { status: 204 });
  return NextResponse.json({ status, data }, { status });
}
export const revalidate = 0;
