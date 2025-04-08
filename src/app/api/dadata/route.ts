import { NextRequest, NextResponse } from "next/server";
import { fetchAddresses } from "@/services/dadata";

export async function POST(request: NextRequest) {
  const { query } = await request.json();
  const result = await fetchAddresses(query);

  return NextResponse.json(result);
}
