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
        <div id="try" className="w-full px-[var(--spacing-section-px-mobile)] md:px-[var(--spacing-section-px-tablet)] lg:px-[var(--spacing-section-px-small-laptop)] xl:px-[var(--spacing-section-px-xl)] 2xl:px-[var(--spacing-section-px-2xl)] py-[var(--spacing-section-py-mobile)] md:py-[var(--spacing-section-py-tablet)] lg:py-[var(--spacing-section-py-small-laptop)] xl:py-[var(--spacing-section-py-xl)] 2xl:py-[var(--spacing-section-py-2xl)]">
            {/* Server-rendered section for SEO */}
            <div 
                data-server-try-hayak
                className='w-full lg:h-[400px] xl:h-[400px] bg-[url("/try_pattern_mob.svg")] lg:bg-[url("/try_bg.svg")] bg-cover lg:bg-contain bg-center bg-no-repeat py-10 lg:py-5 xl:py-5 flex flex-col items-center justify-center rounded-[20px] lg:rounded-none xl:rounded-none'
            >
                <div className="flex items-center justify-center gap-[var(--spacing-gap-lg)] px-[var(--spacing-section-px-mobile)] md:px-[var(--spacing-section-px-tablet)] lg:px-[var(--spacing-section-px-small-laptop)] xl:px-[var(--spacing-section-px-xl)] 2xl:px-[var(--spacing-section-px-2xl)] w-full">
                    <div className="flex flex-col w-full lg:w-1/2 xl:w-1/2">
                        <div className="flex justify-center items-center gap-[var(--spacing-gap-xs)] md:gap-2.5 lg:gap-[var(--spacing-gap-sm)]">
                            <h2 className="text-2xl md:text-3xl lg:text-3xl xl:text-4xl font-semibold">{t.title}</h2>
                            <Image
                                src="/Logo.webp"
                                className="mb-2"
                                alt={isRTL ? "شعار حياك" : "Hayak logo"}
                                width={100}
                                height={100}
                                style={{ width: '100px', height: '100px' }}
                                loading="lazy"
                                quality={85}
                            />
                        </div>
                        <div>
                            <p className="text-base md:text-lg lg:text-base xl:text-lg text-center mb-[var(--spacing-gap-xl)] xl:mb-[var(--spacing-gap-2xl)]">
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
