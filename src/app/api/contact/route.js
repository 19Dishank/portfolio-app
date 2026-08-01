import { NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";
import Contact from "@/models/Contact";

export async function GET() {
  try {
    await dbConnect();
    let contact = await Contact.findOne();
    if (!contact) {
      contact = {
        eyebrow: "Get in touch",
        leadText: "If you're building something and want a hand on the frontend — I'd like to hear about it.",
        channels: [
          { label: "EMAIL", value: "pateldishank19@gmail.com", actionText: "Copy", href: "mailto:pateldishank19@gmail.com", isExternal: true },
          { label: "PORTFOLIO", value: "dishankpatel.in", actionText: "Visit", href: "https://dishankpatel.in", isExternal: true },
          { label: "GITHUB", value: "19Dishank", actionText: "Open", href: "https://github.com/19Dishank", isExternal: true },
          { label: "LINKEDIN", value: "19dishank", actionText: "Connect", href: "https://www.linkedin.com/in/19dishank/", isExternal: true },
          { label: "LOCATION", value: "Surat, Gujarat", actionText: "IST (UTC+5:30)", href: "#", isExternal: false },
        ],
      };
    }
    return NextResponse.json({ success: true, data: contact });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        data: {
          eyebrow: "Get in touch",
          leadText: "If you're building something and want a hand on the frontend — I'd like to hear about it.",
          channels: [
            { label: "EMAIL", value: "pateldishank19@gmail.com", actionText: "Copy", href: "mailto:pateldishank19@gmail.com", isExternal: true },
            { label: "PORTFOLIO", value: "dishankpatel.in", actionText: "Visit", href: "https://dishankpatel.in", isExternal: true },
            { label: "GITHUB", value: "19Dishank", actionText: "Open", href: "https://github.com/19Dishank", isExternal: true },
            { label: "LINKEDIN", value: "19dishank", actionText: "Connect", href: "https://www.linkedin.com/in/19dishank/", isExternal: true },
            { label: "LOCATION", value: "Surat, Gujarat", actionText: "IST (UTC+5:30)", href: "#", isExternal: false },
          ],
        },
      },
      { status: 200 }
    );
  }
}
