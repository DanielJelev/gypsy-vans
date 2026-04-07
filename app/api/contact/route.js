import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  const { name, email, nights, message } = await req.json();

  if (!name || !email || !nights || !message) {
    return NextResponse.json({ error: "Всички полета са задължителни" }, { status: 400 });
  }

  try {
    await resend.emails.send({
      from: "Gypsy Vans <onboarding@resend.dev>",
      to: process.env.CONTACT_EMAIL,
      subject: `Ново запитване от ${name}`,
      replyTo: email,
      html: `
        <h2>Ново запитване от контактната форма</h2>
        <p><strong>Име:</strong> ${name.replace(/</g, "&lt;")}</p>
        <p><strong>Имейл:</strong> ${email.replace(/</g, "&lt;")}</p>
        <p><strong>Брой нощувки:</strong> ${String(nights).replace(/</g, "&lt;")}</p>
        <p><strong>Съобщение:</strong></p>
        <p>${message.replace(/</g, "&lt;").replace(/\n/g, "<br>")}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Resend error:", err);
    return NextResponse.json({ error: "Грешка при изпращане на имейл" }, { status: 500 });
  }
}
