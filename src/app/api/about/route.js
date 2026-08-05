import { NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";
import About from "@/models/About";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export async function GET() {
  try {
    await dbConnect();
    let about = await About.findOne();
    if (!about) {
      about = {
        eyebrow: "A little about me",
        heading: "Grounded in fundamentals, particular about details.",
        paragraphs: [
          "I got into frontend work because I liked the immediacy of it — you change something, you see it, you feel whether it's right. I care about the parts of a UI most people never consciously notice: whether a hover state feels responsive, whether a table of numbers stays readable at a glance, whether a form makes sense the first time.",
          "Right now that means building an aviation weather dashboard people rely on mid-shift, and a multi-tenant document platform that has to stay simple even as the data underneath gets complicated.",
        ],
        facts: [
          { label: "Primary stack", num: "React" },
          { label: "Based in", num: "Surat" },
          { label: "Current role", num: "Frontend Engineer" },
          { label: "Availability", num: "Open" },
        ],
      };
    }
    return NextResponse.json({ success: true, data: about });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        data: {
          eyebrow: "A little about me",
          heading: "Grounded in fundamentals, particular about details.",
          paragraphs: [
            "I got into frontend work because I liked the immediacy of it — you change something, you see it, you feel whether it's right.",
            "Right now that means building an aviation weather dashboard people rely on mid-shift.",
          ],
          facts: [
            { label: "Primary stack", num: "React" },
            { label: "Based in", num: "Surat" },
            { label: "Current role", num: "Frontend Engineer" },
            { label: "Availability", num: "Open" },
          ],
        },
      },
      { status: 200 }
    );
  }
}
