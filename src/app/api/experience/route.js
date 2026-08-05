import { NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";
import Experience from "@/models/Experience";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export async function GET() {
  try {
    await dbConnect();
    const experiences = await Experience.find().sort({ order: 1 });
    return NextResponse.json({ success: true, data: experiences });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "Failed to fetch experience timeline" },
      { status: 500 }
    );
  }
}
