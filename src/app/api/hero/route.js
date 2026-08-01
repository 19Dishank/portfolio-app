import { NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";
import Hero from "@/models/Hero";

export async function GET() {
  try {
    await dbConnect();
    let hero = await Hero.findOne();
    if (!hero) {
      hero = {
        eyebrow: "Portfolio — Frontend Developer",
        firstName: "Dishank",
        lastName: "Patel.",
        roleText: "I'm a frontend developer working in React, Tailwind CSS and JavaScript — building things people actually rely on.",
      };
    }
    return NextResponse.json({ success: true, data: hero });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        data: {
          eyebrow: "Portfolio — Frontend Developer",
          firstName: "Dishank",
          lastName: "Patel.",
          roleText: "I'm a frontend developer working in React, Tailwind CSS and JavaScript — building things people actually rely on.",
        },
      },
      { status: 200 }
    );
  }
}
