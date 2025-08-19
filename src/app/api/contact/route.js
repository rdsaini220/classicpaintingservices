import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    console.log("📩 Received contact form POST request");

    const { name, email, phone, message } = await req.json();
    console.log("📄 Form Data:", { name, email, phone, message });

    if (!name || !email || !phone || !message) {
      console.warn("⚠️ Missing fields in form submission");
      return NextResponse.json(
        { success: false, error: "All fields are required" },
        { status: 400 }
      );
    }

    // Log environment variables
    console.log("🔧 SMTP_HOST:", process.env.SMTP_HOST);
    console.log("🔧 SMTP_PORT:", process.env.SMTP_PORT);
    console.log("🔧 SMTP_USER:", process.env.SMTP_USER ? "Loaded" : "Missing");
    console.log("🔧 SMTP_PASS:", process.env.SMTP_PASS ? "Loaded" : "Missing");

    if (!process.env.SMTP_HOST || !process.env.SMTP_PORT || !process.env.SMTP_USER || !process.env.SMTP_PASS) {
      console.error("❌ Missing SMTP environment variables");
      return NextResponse.json(
        { success: false, error: "SMTP environment variables are missing" },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: process.env.SMTP_PORT == "465", // true for 465, false for 587
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
      family: 4, // force IPv4 to avoid ::1 issues
    });

    console.log("🚀 Sending email...");

    const info = await transporter.sendMail({
      from: `"New Customer Query" <${process.env.SMTP_USER}>`,
      to: "info@classicpaintingdecorating.com.au",
      subject: `New Customer Information Query From Website`,
      text: `
Name: ${name}
Email: ${email}
Phone: ${phone}
Message: ${message}
      `,
      html: `
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${phone}</p>
        <p><b>Message:</b></p>
        <p>${message}</p>
      `,
    });

    console.log("✅ Email sent successfully:", info.messageId);

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("❌ API Error:", err);
    return NextResponse.json(
      { success: false, error: err.message || "Internal server error" },
      { status: 500 }
    );
  }
}
