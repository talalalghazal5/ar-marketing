"use server"

import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function sendContactEmail(data: {
  fullName: string
  email: string
  country: string
  business: string
  message: string
}) {
  await resend.emails
    .send({
      from: data.email,
      to: "talalalghazal55@gmail.com",
      template: {
        id: "895f7272-99b4-4518-ab4b-7a6d49cab8c2",
        variables: {
          customer_name: data.fullName,
          customer_email: data.email,
          project_description: data.message,
          service_type: data.business,
          customer_phone: "+963935299727",
        },
      },
    })
    .then((response) => {
      console.log("Email sent successfully:", response)
    })
    .catch((error) => {
      console.error("Error sending email:", error)
    })
}
