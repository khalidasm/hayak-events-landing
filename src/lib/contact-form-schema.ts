import { z } from "zod"

export const createContactFormSchema = (locale: 'en' | 'ar' = 'en') => {
    const translations = {
        en: {
            fullNameRequired: "Full name is required",
            emailInvalid: "Please enter a valid email address",
            subjectRequired: "Subject is required",
            messageRequired: "Message is required",
            phoneNumberInvalid: "Please enter a valid phone number",
            phoneNumberInvalidSA: "Saudi mobile number must be 9 digits starting with 5 (e.g., 501234567)",
            phoneNumberRequired: "Phone number is required",
        },
        ar: {
            fullNameRequired: "الاسم الكامل مطلوب",
            emailInvalid: "الرجاء إدخال عنوان بريد إلكتروني صحيح",
            subjectRequired: "السبب مطلوب",
            messageRequired: "الرسالة مطلوبة",
            phoneNumberInvalid: "الرجاء إدخال رقم هاتف صحيح",
            phoneNumberInvalidSA: "رقم الجوال السعودي يجب أن يكون 9 أرقام يبدأ بـ 5 (مثال: 501234567)",
            phoneNumberRequired: "رقم الهاتف مطلوب",
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
    }).superRefine((data, ctx) => {
        // If phone number is provided, validate it based on country code
        if (data.phoneNumber && data.phoneNumber.trim().length > 0) {
            // Remove any non-digit characters
            const digitsOnly = data.phoneNumber.replace(/\D/g, '');
            
            // Validate based on country code
            if (data.countryCode === '+966') {
                // Saudi Arabia: should be 9 digits starting with 5 (e.g., 501234567)
                if (digitsOnly.length !== 9 || !/^5[0-9]{8}$/.test(digitsOnly)) {
                    ctx.addIssue({
                        code: z.ZodIssueCode.custom,
                        message: t.phoneNumberInvalidSA,
                        path: ['phoneNumber'],
                    });
                }
            } else if (data.countryCode === '+1') {
                // US/Canada: should be 10 digits
                if (digitsOnly.length !== 10 || !/^[0-9]{10}$/.test(digitsOnly)) {
                    ctx.addIssue({
                        code: z.ZodIssueCode.custom,
                        message: t.phoneNumberInvalid,
                        path: ['phoneNumber'],
                    });
                }
            } else if (data.countryCode === '+44') {
                // UK: should be 10-11 digits
                if (digitsOnly.length < 10 || digitsOnly.length > 11 || !/^[0-9]{10,11}$/.test(digitsOnly)) {
                    ctx.addIssue({
                        code: z.ZodIssueCode.custom,
                        message: t.phoneNumberInvalid,
                        path: ['phoneNumber'],
                    });
                }
            } else if (data.countryCode === '+971') {
                // UAE: should be 9 digits
                if (digitsOnly.length !== 9 || !/^[0-9]{9}$/.test(digitsOnly)) {
                    ctx.addIssue({
                        code: z.ZodIssueCode.custom,
                        message: t.phoneNumberInvalid,
                        path: ['phoneNumber'],
                    });
                }
            }
        }
    });
}

// Default schema for backward compatibility
export const contactFormSchema = createContactFormSchema('en');

export type ContactFormData = z.infer<ReturnType<typeof createContactFormSchema>>;
