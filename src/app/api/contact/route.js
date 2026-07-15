import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body || {};

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { message: "Please provide name, email, subject, and message." },
        { status: 400 }
      );
    }

    const textBody = `New portfolio enquiry\n\nName:\n${name}\n\nEmail:\n${email}\n\nSubject:\n${subject}\n\nMessage:\n\n${message}`;

    await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: "okekefelix51@gmail.com",
      subject: `Portfolio Contact: ${subject}`,
      text: `New portfolio enquiry\n\nName:\n${name}\n\nEmail:\n${email}\n\nSubject:\n${subject}\n\nMessage:\n\n${message}`,
    });

    return NextResponse.json({ message: "Email sent successfully." }, { status: 200 });
  } catch (error) {
    console.error("Contact API error:", error);

    return NextResponse.json(
      {
        message:
          error?.message || "Unable to send your message right now. Please try again later.",
      },
      { status: 500 }
    );
  }
}
