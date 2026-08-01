import { NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";
import Experience from "@/models/Experience";

export async function GET() {
  try {
    await dbConnect();
    const experiences = await Experience.find().sort({ order: 1 });
    return NextResponse.json({ success: true, data: experiences });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "Failed to fetch Experience data" },
      { status: 500 }
    );
  }
}

export async function PUT(request) {
  try {
    const body = await request.json();
    const { experiences } = body;

    if (!Array.isArray(experiences)) {
      return NextResponse.json(
        { success: false, error: "Invalid experience data" },
        { status: 400 }
      );
    }

    await dbConnect();

    await Experience.deleteMany({});
    const createdExperiences = await Experience.insertMany(
      experiences.map((item, idx) => ({
        role: item.role,
        company: item.company || "",
        startDate: item.startDate || "",
        endDate: item.endDate || null,
        description: item.description || "",
        order: idx + 1,
      }))
    );

    return NextResponse.json({
      success: true,
      message: "Experience timeline updated successfully",
      data: createdExperiences,
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "Failed to update Experience timeline" },
      { status: 500 }
    );
  }
}
