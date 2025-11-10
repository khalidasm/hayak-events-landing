"use client"

import React from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { createContactFormSchema, type ContactFormData } from "@/lib/contact-form-schema"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

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
    } = useForm<ContactFormData>({
        resolver: zodResolver(localizedSchema),
        defaultValues: {
            countryCode: "+966",
        },
    })

    const onSubmit = async (data: ContactFormData) => {
        try {
            // Here you would typically send the data to your API
            console.log("Form data:", data)
            
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1000))
            
            // Reset form after successful submission
            reset()
            alert(t.success)
        } catch (error) {
            console.error("Error submitting form:", error)
            alert(t.error)
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
                            {t.phoneNumber}
                        </label>
                        <div className={`flex gap-2 ${isRTL ? "flex-row-reverse" : ""}`}>
                            <Select
                                value={watch("countryCode")}
                                onValueChange={(value) => setValue("countryCode", value)}
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
                                placeholder={t.placeholders.phoneNumber}
                                {...register("phoneNumber")}
                                className="flex-1 px-[10px] py-[20px] rounded-[10px]"
                                dir={isRTL ? "rtl" : "ltr"}
                            />
                        </div>
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
