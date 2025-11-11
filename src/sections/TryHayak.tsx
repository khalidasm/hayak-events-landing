import React from "react";
import Image from "next/image";
import TryHayakClient from "./TryHayakClient";

const translations = {
    en: {
        title: "Try",
        description: (
            <>
                Discover how easy event management can be. Try
                Hayak now and explore the seamless invitation
                experience for yourself.
            </>
        ),
        namePlaceholder: "Enter your name",
        phonePlaceholder: "501234567",
        buttonText: "Try Now!",
        buttonLoading: "Sending...",
        errors: {
            nameRequired: "Please enter your name",
            phoneRequired: "Please enter your WhatsApp number",
            phoneInvalid: "Saudi mobile number must be 9 digits starting with 5 (e.g., 501234567)",
            submitFailed: "Failed to submit. Please try again.",
            genericError: "An error occurred. Please try again.",
        },
        success: "Success! You'll receive a WhatsApp message from Hayak soon.",
    },
    ar: {
        title: "جرّب",
        description: (
            <>
                اكتشف مدى سهولة إدارة الفعاليات مع حيّاك. جربه الآن واستمتع بتجربة الدعوات السلسة بنفسك.
            </>
        ),
        namePlaceholder: "أدخل اسمك",
        phonePlaceholder: "501234567",
        buttonText: "جرّب الأن!",
        buttonLoading: "جاري الإرسال...",
        errors: {
            nameRequired: "الرجاء إدخال اسمك",
            phoneRequired: "الرجاء إدخال رقم واتسابك",
            phoneInvalid: "رقم الجوال السعودي يجب أن يكون 9 أرقام يبدأ بـ 5 (مثال: 501234567)",
            submitFailed: "فشل الإرسال. الرجاء المحاولة مرة أخرى.",
            genericError: "حدث خطأ. الرجاء المحاولة مرة أخرى.",
        },
        success: "نجح! سوف تتلقى رسالة واتساب من حياك قريباً.",
    },
};

interface TryHayakProps {
    locale: 'en' | 'ar';
}

const TryHayak = ({ locale = 'en' }: TryHayakProps) => {
    const isRTL = locale === 'ar';
    const t = translations[locale];

    return (
        <div id="try" className="w-full px-4 xl:px-60 py-16 xl:py-32">
            {/* Server-rendered section for SEO */}
            <div 
                data-server-try-hayak
                className='w-full xl:h-[400px] bg-[url("/try_pattern_mob.svg")] xl:bg-[url("/try_bg.svg")] bg-cover xl:bg-contain bg-center bg-no-repeat py-10 xl:py-5 flex flex-col items-center justify-center rounded-[20px] xl:rounded-none'
            >
                <div className="flex items-center justify-center gap-5 px-4 xl:px-60 w-full">
                    <div className="flex flex-col w-full xl:w-1/2">
                        <div className="flex justify-center items-center gap-2 xl:gap-3">
                            <h2 className="text-2xl xl:text-4xl font-bold">{t.title}</h2>
                            <Image
                                src="/Logo.svg"
                                className="mb-2 xl:mb-5"
                                alt={isRTL ? "شعار حياك" : "Hayak logo"}
                                width={60}
                                height={60}
                                style={{ width: '60px', height: '60px' }}
                            />
                        </div>
                        <div>
                            <p className="text-base xl:text-lg text-center mb-6 xl:mb-8">
                                {t.description}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Client component for form and animations */}
            <TryHayakClient 
                locale={locale}
                translations={t}
            />
        </div>
    );
};

export default TryHayak;
