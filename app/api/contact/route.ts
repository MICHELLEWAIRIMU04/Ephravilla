import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, service, message, projectType } = body;

    /* ── Validation ──────────────────────────────────────────────────────── */
    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return NextResponse.json(
        { error: "Name, email and message are required." },
        { status: 400 }
      );
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    /* ── Email delivery ──────────────────────────────────────────────────── */
    // TODO: Uncomment and configure your preferred email provider.
    //
    // ── Option A: Resend (recommended) ───────────────────────────────────
    // Install: npm install resend
    //
    // import { Resend } from "resend";
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // await resend.emails.send({
    //   from:    "website@ephravilla.com",
    //   to:      "accounts@ephravilla.com",
    //   subject: `New enquiry from ${name}`,
    //   html: `
    //     <p><strong>Name:</strong> ${name}</p>
    //     <p><strong>Email:</strong> ${email}</p>
    //     <p><strong>Phone:</strong> ${phone || "—"}</p>
    //     <p><strong>Service:</strong> ${service || "—"}</p>
    //     <p><strong>Project type:</strong> ${projectType || "—"}</p>
    //     <p><strong>Message:</strong><br>${message.replace(/\n/g,"<br>")}</p>
    //   `,
    // });
    //
    // ── Option B: Nodemailer (SMTP) ────────────────────────────────────────
    // Install: npm install nodemailer @types/nodemailer
    //
    // import nodemailer from "nodemailer";
    // const transport = nodemailer.createTransport({
    //   host: process.env.SMTP_HOST,
    //   port: Number(process.env.SMTP_PORT ?? 587),
    //   auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
    // });
    // await transport.sendMail({
    //   from:    process.env.SMTP_FROM,
    //   to:      process.env.SMTP_TO ?? "accounts@ephravilla.com",
    //   subject: `New enquiry from ${name}`,
    //   text:    `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nService: ${service}\nType: ${projectType}\n\n${message}`,
    // });

    /* ── Dev logging ─────────────────────────────────────────────────────── */
    if (process.env.NODE_ENV === "development") {
      console.log("📬 Contact form submission:", {
        name, email,
        phone:       phone        || "—",
        service:     service      || "—",
        projectType: projectType  || "—",
        message,
        timestamp:   new Date().toISOString(),
      });
    }

    return NextResponse.json(
      { success: true, message: "Message received. We'll be in touch within one business day." },
      { status: 200 }
    );
  } catch (err) {
    console.error("Contact route error:", err);
    return NextResponse.json(
      { error: "An unexpected error occurred. Please try again." },
      { status: 500 }
    );
  }
}
