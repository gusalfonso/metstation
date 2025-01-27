import { addDHTData, getDHTData } from "@/management/DHT";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  try {
    const data = await getDHTData();
    return NextResponse.json(data);
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "An unexpected error occurred";
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const dhtdata = await request.json();
    await addDHTData(dhtdata);
    return NextResponse.json(
      { message: "Cliente creado exitosamente" },
      { status: 201 }
    );
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "An unexpected error occurred";

    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}
