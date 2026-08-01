import { NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";
import About from "@/models/About";

export async function GET() {
  try {
    await dbConnect();
    let about = await About.findOne();
    if (!about) {
      about = await About.create({});
    }
    return NextResponse.json({ success: true, data: about });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "Failed to fetch About content" },
      { status: 500 }
    );
  }
}

export async function PUT(request) {
  try {
    const body = await request.json();
    const { eyebrow, heading, paragraphs, facts } = body;

    await dbConnect();
    let about = await About.findOne();
    if (!about) {
      about = new About();
    }

    about.eyebrow = eyebrow;
    about.heading = heading;
    about.paragraphs = paragraphs || [];
    about.facts = facts || [];

    await about.save();

    return NextResponse.json({
      success: true,
      message: "About section updated successfully",
      data: about,
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "Failed to update About section" },
      { status: 500 }
    );
  }
}
