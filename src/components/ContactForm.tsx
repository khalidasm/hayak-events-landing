"use client"

import React from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { createContactFormSchema, type ContactFormData } from "@/lib/contact-form-schema"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { toast } from "sonner"

const translations = {
    en: {
        fullName: "Full Name",
        phoneNumber: "Phone Number",
        email: "Email Address",
        subject: "Subject",
        message: "Message",
        submit: "Submit",
        submitting: "Submitting...",
        placeholders: {
            fullName: "FirstName",
            phoneNumber: "Phone number",
            email: "Email address",
            subject: "Subject of connect",
            message: "Message",
        },
        errors: {
            fullNameRequired: "Full name is required",
            emailRequired: "Please enter a valid email address",
            subjectRequired: "Subject is required",
            messageRequired: "Message is required",
        },
        success: "Message sent successfully!",
        error: "Failed to send message. Please try again.",
    },
    ar: {
        fullName: "الاسم كامل",
        phoneNumber: "رقم الهاتف",
        email: "البريد الالكتروني",
        subject: "السبب",
        message: "الرسالة",
        submit: "ارسال",
        submitting: "جاري الإرسال...",
        placeholders: {
            fullName: "الأسم",
            phoneNumber: "رقم الهاتف",
            email: "بريد الكتروني",
            subject: "سبب الطلب",
            message: "رسالة",
        },
        errors: {
            fullNameRequired: "الاسم الكامل مطلوب",
            emailRequired: "الرجاء إدخال عنوان بريد إلكتروني صحيح",
            subjectRequired: "السبب مطلوب",
            messageRequired: "الرسالة مطلوبة",
        },
        success: "تم إرسال الرسالة بنجاح!",
        error: "فشل إرسال الرسالة. الرجاء المحاولة مرة أخرى.",
    },
};

interface ContactFormProps {
    locale?: 'en' | 'ar';
}

const ContactForm = ({ locale = 'en' }: ContactFormProps) => {
    const isRTL = locale === 'ar';
    const t = translations[locale];

    // Create localized schema
    const localizedSchema = createContactFormSchema(locale);

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset,
        setValue,
        watch,
        trigger,
    } = useForm<ContactFormData>({
        resolver: zodResolver(localizedSchema),
        defaultValues: {
            countryCode: "+966",
        },
    })

    const onSubmit = async (data: ContactFormData) => {
        try {
            // Format mobile number: remove + from country code and combine with phone number
            const countryCodeDigits = data.countryCode.replace(/\D/g, '');
            const phoneDigits = data.phoneNumber.replace(/\D/g, '');
            const formattedMobile = `${countryCodeDigits}${phoneDigits}`;

            // Prepare payload
            const payload = {
                name: data.fullName,
                email: data.email,
                mobile: formattedMobile,
                subject: data.subject,
                message: data.message,
            };

            // Make API call
            const response = await fetch('https://api.hayaksa.com/api/event/new/message/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload),
            });

            if (!response.ok) {
                // Try to parse the error response to get the detail message
                let errorMessage = t.error;
                try {
                    const errorData = await response.json();
                    if (errorData.detail) {
                        errorMessage = errorData.detail;
                    } else if (errorData.message) {
                        errorMessage = errorData.message;
                    }
                } catch {
                    // If parsing fails, use the default error message
                }
                throw new Error(errorMessage);
            }

            // Reset form after successful submission
            reset({
                fullName: '',
                phoneNumber: '',
                countryCode: '+966',
                email: '',
                subject: '',
                message: '',
            })
            toast.success(t.success)
        } catch (error) {
            console.error("Error submitting form:", error)
            toast.error(error instanceof Error ? error.message : t.error)
        }
    }

    return (
        <div className="w-full">
            <div className="bg-white shadow-lg rounded-[24px] p-8">
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5" dir={isRTL ? "rtl" : "ltr"}>
                    {/* Full Name */}
                    <div>
                        <label htmlFor="fullName" className={`block text-sm font-medium text-[#241044] mb-1 ${
                            isRTL ? "text-right" : "text-left"
                        }`}>
                            {t.fullName} *
                        </label>
                        <Input
                            id="fullName"
                            placeholder={t.placeholders.fullName}
                            {...register("fullName")}
                            className={`px-[10px] py-[20px] rounded-[10px] ${errors.fullName ? "border-red-500" : ""}`}
                            dir={isRTL ? "rtl" : "ltr"}
                        />
                        {errors.fullName && (
                            <p className={`text-red-500 text-xs mt-1 ${
                                isRTL ? "text-right" : "text-left"
                            }`}>{errors.fullName.message}</p>
                        )}
                    </div>

                    {/* Phone Number */}
                    <div>
                        <label htmlFor="phoneNumber" className={`block text-sm font-medium text-[#241044] mb-1 ${
                            isRTL ? "text-right" : "text-left"
                        }`}>
                            {t.phoneNumber} *
                        </label>
                        <div className={`flex gap-2`}>
                            <Select
                                value={watch("countryCode")}
                                onValueChange={(value) => {
                                    setValue("countryCode", value);
                                    // Trigger validation for phone number when country code changes
                                    trigger("phoneNumber");
                                }}
                                disabled={true}
                            >
                                <SelectTrigger className="w-20 px-[10px] py-[20px] rounded-[10px]">
                                    <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="+966">+966</SelectItem>
                                    <SelectItem value="+1">+1</SelectItem>
                                    <SelectItem value="+44">+44</SelectItem>
                                    <SelectItem value="+971">+971</SelectItem>
                                </SelectContent>
                            </Select>
                            <Input
                                id="phoneNumber"
                                placeholder={
                                    watch("countryCode") === "+966" 
                                        ? (locale === 'ar' ? "501234567" : "501234567")
                                        : t.placeholders.phoneNumber
                                }
                                {...register("phoneNumber")}
                                className={`flex-1 px-[10px] py-[20px] rounded-[10px] ${errors.phoneNumber ? "border-red-500" : ""}`}
                                dir={isRTL ? "rtl" : "ltr"}
                            />
                        </div>
                        {errors.phoneNumber && (
                            <p className={`text-red-500 text-xs mt-1 ${
                                isRTL ? "text-right" : "text-left"
                            }`}>{errors.phoneNumber.message}</p>
                        )}
                    </div>

                    {/* Email */}
                    <div>
                        <label htmlFor="email" className={`block text-sm font-medium text-[#241044] mb-1 ${
                            isRTL ? "text-right" : "text-left"
                        }`}>
                            {t.email} *
                        </label>
                        <Input
                            id="email"
                            type="email"
                            placeholder={t.placeholders.email}
                            {...register("email")}
                            className={`px-[10px] py-[20px] rounded-[10px] ${errors.email ? "border-red-500" : ""}`}
                            dir={isRTL ? "rtl" : "ltr"}
                        />
                        {errors.email && (
                            <p className={`text-red-500 text-xs mt-1 ${
                                isRTL ? "text-right" : "text-left"
                            }`}>{errors.email.message}</p>
                        )}
                    </div>

                    {/* Subject */}
                    <div>
                        <label htmlFor="subject" className={`block text-sm font-medium text-[#241044] mb-1 ${
                            isRTL ? "text-right" : "text-left"
                        }`}>
                            {t.subject} *
                        </label>
                        <Input
                            id="subject"
                            placeholder={t.placeholders.subject}
                            {...register("subject")}
                            className={`px-[10px] py-[20px] rounded-[10px] ${errors.subject ? "border-red-500" : ""}`}
                            dir={isRTL ? "rtl" : "ltr"}
                        />
                        {errors.subject && (
                            <p className={`text-red-500 text-xs mt-1 ${
                                isRTL ? "text-right" : "text-left"
                            }`}>{errors.subject.message}</p>
                        )}
                    </div>

                    {/* Message */}
                    <div>
                        <label htmlFor="message" className={`block text-sm font-medium text-[#241044] mb-1 ${
                            isRTL ? "text-right" : "text-left"
                        }`}>
                            {t.message} *
                        </label>
                        <Textarea
                            id="message"
                            placeholder={t.placeholders.message}
                            rows={4}
                            {...register("message")}
                            className={`px-[10px] py-[20px] rounded-[10px] ${errors.message ? "border-red-500" : ""}`}
                            dir={isRTL ? "rtl" : "ltr"}
                        />
                        {errors.message && (
                            <p className={`text-red-500 text-xs mt-1 ${
                                isRTL ? "text-right" : "text-left"
                            }`}>{errors.message.message}</p>
                        )}
                    </div>

                    {/* Submit Button */}
                    <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-[#4F2396] hover:bg-[#4F2396]/90 text-white"
                        size={'lg'}
                    >
                        {isSubmitting ? t.submitting : t.submit}
                    </Button>
                </form>
            </div>
        </div>
    )
}

export default ContactForm
