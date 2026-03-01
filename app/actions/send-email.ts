"use server"

import { Resend } from "resend"
import { ContactEmail } from "@/emails/contact-template"

const resend = new Resend(process.env.RESEND_API_KEY)

interface SendEmailPayload {
  name: string
  email: string
  message: string
}

export async function sendContactEmail(payload: SendEmailPayload) {
  const { name, email, message } = payload

  if (!name?.trim() || !email?.trim() || !message?.trim()) {
    return { success: false, error: "All fields are required." }
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    return { success: false, error: "Invalid email address." }
  }

  try {
    await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: "lucas.pereyra.tech@gmail.com",
      replyTo: email,
      subject: `[Portfolio] Nuevo mensaje de ${name}`,
      react: ContactEmail({ name, email, message }),
    })

    return { success: true }
  } catch (error) {
    console.error("[sendContactEmail] Error:", error)
    return { success: false, error: "Failed to send email. Please try again." }
  }
}
