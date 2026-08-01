import { NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";
import Contact from "@/models/Contact";

export async function GET() {
  try {
    await dbConnect();
    let contact = await Contact.findOne();
    if (!contact) {
      contact = await Contact.create({});
    }
    return NextResponse.json({ success: true, data: contact });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "Failed to fetch Contact content" },
      { status: 500 }
    );
  }
}

export async function PUT(request) {
  try {
    const body = await request.json();
    const { eyebrow, leadText, channels } = body;

    await dbConnect();
    let contact = await Contact.findOne();
    if (!contact) {
      contact = new Contact();
    }

    contact.eyebrow = eyebrow;
    contact.leadText = leadText;
    contact.channels = Array.isArray(channels) ? channels : [];

    await contact.save();

    return NextResponse.json({
      success: true,
      message: "Contact section updated successfully",
      data: contact,
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "Failed to update Contact section" },
      { status: 500 }
    );
  }
}
