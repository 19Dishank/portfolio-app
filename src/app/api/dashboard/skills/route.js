import { NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";
import Skill from "@/models/Skill";

export async function GET() {
  try {
    await dbConnect();
    const skills = await Skill.find().sort({ order: 1 });
    return NextResponse.json({ success: true, data: skills });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "Failed to fetch Skills" },
      { status: 500 }
    );
  }
}

export async function PUT(request) {
  try {
    const body = await request.json();
    const { skills } = body;

    if (!Array.isArray(skills)) {
      return NextResponse.json(
        { success: false, error: "Invalid skills data" },
        { status: 400 }
      );
    }

    await dbConnect();

    // Remove all existing skills and re-insert updated ordered list
    await Skill.deleteMany({});
    const createdSkills = await Skill.insertMany(
      skills.map((item, idx) => ({
        name: item.name,
        category: item.category || "Frontend",
        order: idx + 1,
      }))
    );

    return NextResponse.json({
      success: true,
      message: "Skills list updated successfully",
      data: createdSkills,
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "Failed to update Skills" },
      { status: 500 }
    );
  }
}
