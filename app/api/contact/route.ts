import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import validator from "validator"; 

export async function POST(req: Request) {
  try {
    const { name, email, subject, message } = await req.json();

    // VALIDATOR: server-side validation start
    if (!name || validator.isEmpty(name.trim())) {
      return NextResponse.json({ error: "Name is required." }, { status: 400 });
    }
    if (!email || !validator.isEmail(email)) {
      return NextResponse.json({ error: "Valid email is required." }, { status: 400 });
    }
    if (!message || validator.isEmpty(message.trim())) {
      return NextResponse.json({ error: "Message is required." }, { status: 400 });
    }
    if (!validator.isLength(message.trim(), { min: 10, max: 1000 })) {
      return NextResponse.json({ error: "Message must be between 10 and 1000 characters." }, { status: 400 });
    }
    // VALIDATOR: server-side validation end

    // VALIDATOR: sanitize inputs before using in email
    const safeName = validator.escape(name.trim());
    const safeEmail = validator.normalizeEmail(email) || email;
    const safeSubject = subject ? validator.escape(subject.trim()) : `Portfolio Contact from ${safeName}`;
    const safeMessage = validator.escape(message.trim());
    // VALIDATOR: end sanitize

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"${safeName}" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      replyTo: safeEmail,
      subject: safeSubject,
      // VALIDATOR: using sanitized variables instead of raw inputs
      html: `
        <h2>New message from your portfolio</h2>
        <p><strong>Name:</strong> ${safeName}</p>
        <p><strong>Email:</strong> ${safeEmail}</p>
        <p><strong>Subject:</strong> ${safeSubject}</p>
        <p><strong>Message:</strong></p>
        <p>${safeMessage}</p>
      `,
      // VALIDATOR: end
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Email error:", error);
    return NextResponse.json({ error: "Failed to send email." }, { status: 500 });
  }
}