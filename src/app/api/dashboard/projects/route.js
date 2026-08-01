import { NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";
import Project from "@/models/Project";

export async function GET() {
  try {
    await dbConnect();
    const projects = await Project.find().sort({ order: 1 });
    return NextResponse.json({ success: true, data: projects });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "Failed to fetch Projects" },
      { status: 500 }
    );
  }
}

export async function PUT(request) {
  try {
    const body = await request.json();
    const { projects } = body;

    if (!Array.isArray(projects)) {
      return NextResponse.json(
        { success: false, error: "Invalid projects data" },
        { status: 400 }
      );
    }

    await dbConnect();

    await Project.deleteMany({});
    const createdProjects = await Project.insertMany(
      projects.map((item, idx) => ({
        title: item.title,
        description: item.description,
        type: item.type || "Frontend Web-App",
        year: item.year || "2025",
        technologies: Array.isArray(item.technologies)
          ? item.technologies
          : typeof item.technologies === "string"
          ? item.technologies.split(",").map((t) => t.trim()).filter(Boolean)
          : [],
        liveLink: item.liveLink || "#",
        codeLink: item.codeLink || "#",
        gradientStart: item.gradientStart || "#2f5d4f",
        gradientEnd: item.gradientEnd || "#8fd8bc",
        isFeatured: Boolean(item.isFeatured),
        order: idx + 1,
      }))
    );

    return NextResponse.json({
      success: true,
      message: "Projects updated successfully",
      data: createdProjects,
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "Failed to update Projects" },
      { status: 500 }
    );
  }
}
