import { NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";
import Skill from "@/models/Skill";

const defaultSkills = [
  "React.js", "JavaScript", "TypeScript", "Tailwind CSS", "Redux Toolkit (RTK)",
  "Zustand", "HTML", "CSS", "Bootstrap", "Next.js", "Responsive Design",
  "ChatGPT", "Cursor AI", "Antigravity AI", "Claude", "Prompt Engineering", "VS Code"
];

export const dynamic = "force-dynamic";
export const revalidate = 0;

export async function GET() {
  try {
    await dbConnect();
    const skills = await Skill.find().sort({ order: 1 });
    if (!skills || skills.length === 0) {
      return NextResponse.json({
        success: true,
        data: defaultSkills.map((name, i) => ({ name, order: i + 1 })),
      });
    }
    return NextResponse.json({ success: true, data: skills });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        data: defaultSkills.map((name, i) => ({ name, order: i + 1 })),
      },
      { status: 200 }
    );
  }
}
