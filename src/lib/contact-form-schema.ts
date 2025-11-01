import { z } from "zod"

export const contactFormSchema = z.object({
  fullName: z.string().min(1, "Full name is required"),
  phoneNumber: z.string().optional(),
  countryCode: z.string().min(1, "Country code is required"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(1, "Subject is required"),
  message: z.string().min(1, "Message is required"),
})

export type ContactFormData = z.infer<typeof contactFormSchema>

