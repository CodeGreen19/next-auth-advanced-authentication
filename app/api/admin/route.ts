import { NextResponse } from "next/server";

export async function GET() {
  return new NextResponse("this is the message", { status: 403 });
}
