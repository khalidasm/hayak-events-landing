import { z } from "zod"

export const createContactFormSchema = (locale: 'en' | 'ar' = 'en') => {
    const translations = {
        en: {
            fullNameRequired: "Full name is required",
            emailInvalid: "Please enter a valid email address",
            subjectRequired: "Subject is required",
            messageRequired: "Message is required",
        },
        ar: {
            fullNameRequired: "الاسم الكامل مطلوب",
            emailInvalid: "الرجاء إدخال عنوان بريد إلكتروني صحيح",
            subjectRequired: "السبب مطلوب",
            messageRequired: "الرسالة مطلوبة",
        },
    };

    const t = translations[locale];

    return z.object({
        fullName: z.string().min(1, t.fullNameRequired),
        phoneNumber: z.string().optional(),
        countryCode: z.string().min(1, "Country code is required"),
        email: z.string().email(t.emailInvalid),
        subject: z.string().min(1, t.subjectRequired),
        message: z.string().min(1, t.messageRequired),
    });
}

// Default schema for backward compatibility
export const contactFormSchema = createContactFormSchema('en');

export type ContactFormData = z.infer<ReturnType<typeof createContactFormSchema>>;
