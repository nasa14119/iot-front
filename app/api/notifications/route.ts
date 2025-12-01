import { headers } from "next/headers";
import { NextResponse } from "next/server";

export async function handler() {
  return NextResponse.json({ status: 200 }, { status: 200 });
}
