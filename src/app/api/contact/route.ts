import { NextResponse } from "next/server";
import { Resend } from "resend";
import { personalInfo } from "@/data/personal";

// Initialize Resend with the API key from env variables
const resend = new Resend(process.env.RESEND_API_KEY || "re_placeholder");

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    // In a real scenario, you'd send to your own email address
    // with the sender being a verified domain on Resend.
    // If RESEND_API_KEY is not set or invalid, it will fail gracefully here.
    
    // For local development without a key, we'll just mock success
    if (process.env.NODE_ENV === "development" && !process.env.RESEND_API_KEY) {
      console.log("Mocking email send in development:", { name, email, message });
      return NextResponse.json({ success: true, message: "Mock email sent" });
    }

    const data = await resend.emails.send({
      from: "Portfolio Contact Form <onboarding@resend.dev>", // replace with your verified domain
      to: [personalInfo.email],
      subject: `New message from ${name} via Portfolio`,
      replyTo: email,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    });

    if (data.error) {
      console.error("Resend error:", data.error);
      return NextResponse.json({ error: data.error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { error: "Internal server error." },
      { status: 500 }
    );
  }
}
