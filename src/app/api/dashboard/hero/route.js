import { NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";
import Hero from "@/models/Hero";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export async function GET() {
  try {
    await dbConnect();
    let hero = await Hero.findOne();
    if (!hero) {
      hero = await Hero.create({});
    }
    return NextResponse.json({ success: true, data: hero });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "Failed to fetch Hero content" },
      { status: 500 }
    );
  }
}

export async function PUT(request) {
  try {
    const body = await request.json();
    const { eyebrow, firstName, lastName, roleText, resumeLink } = body;

    await dbConnect();
    let hero = await Hero.findOne();
    if (!hero) {
      hero = new Hero();
    }

    hero.eyebrow = eyebrow;
    hero.firstName = firstName;
    hero.lastName = lastName;
    hero.roleText = roleText;
    if (resumeLink) hero.resumeLink = resumeLink;

    await hero.save();

    return NextResponse.json({
      success: true,
      message: "Hero section updated successfully",
      data: hero,
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "Failed to update Hero section" },
      { status: 500 }
    );
  }
}
