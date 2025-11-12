import React from "react";
import Image from "next/image";
import CheckInFeatureClient from "./CheckInFeatureClient";

const translations = {
    en: {
        title: (
            <>
                Check-in <span className="text-[#4F2396]">Feature</span>
            </>
        ),
        description: (
            <>
                Make guest arrivals effortless with a seamless, QR based
                check-in system that's fast, secure, and keeps you
                updated in real time, ensuring smooth entry for every
                guest while giving organizers full control and peace of mind.
            </>
        ),
    },
    ar: {
        title: (
            <>
                ميزة <span className="text-[#4F2396]">تسجيل الوصول</span> 
            </>
        ),
        description: (
            <>
                اجعل وصول الضيوف سهلاً وسلسًا من خلال نظام تسجيل دخول يعتمد على رموز QR يتميز بالسرعة والأمان والتحديث الفوري، مما يضمن دخولا سلسًا لكل ضيف ويوفر للمنظمين تحكمًا كاملا وراحة بال تامة.
            </>
        ),
    },
};

interface CheckInFeatureProps {
    locale: 'en' | 'ar';
}

const CheckInFeature = ({ locale = 'en' }: CheckInFeatureProps) => {
    const isRTL = locale === 'ar';
    const t = translations[locale];

    return (
        <div className="bg-[#F5F0FF] w-full  relative px-[var(--spacing-section-px-mobile)] md:px-[var(--spacing-section-px-tablet)] lg:px-[var(--spacing-section-px-small-laptop)] xl:px-[var(--spacing-section-px-desktop)] py-[var(--spacing-section-py-mobile)] md:py-[var(--spacing-section-py-tablet)] lg:py-[var(--spacing-section-py-small-laptop)] xl:py-[var(--spacing-section-py-desktop)]">
            {/* Server-rendered section for SEO */}
            <div 
                data-server-check-in-feature
                className="w-full lg:w-1/2 xl:w-1/2 h-full flex flex-col gap-[var(--spacing-gap-2xl)] lg:gap-[var(--spacing-gap-4xl)] xl:gap-[var(--spacing-gap-6xl)]"
            >
                <Image src="/Logo.webp" alt={isRTL ? "شعار حياك" : "Hayak Events logo"} width={100} height={100} className="hidden lg:block" quality={85} />
                <div className="flex flex-col gap-[var(--spacing-gap-lg)]">
                    <h2 className={`text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold ${
                        isRTL ? "text-center lg:text-right" : "text-center lg:text-left"
                    }`}>
                        {t.title}
                    </h2>
                    <p className={`text-base md:text-lg lg:text-xl xl:text-2xl w-full lg:w-[95%] xl:w-[90%] ${
                        isRTL ? "text-center lg:text-right" : "text-center lg:text-left"
                    }`}>
                        {t.description}
                    </p>
                </div>
            </div>

            {/* Client component for animations */}
            <CheckInFeatureClient 
                locale={locale}
                translations={{
                    title: t.title,
                    description: t.description,
                }}
            />
        </div>
    );
};

export default CheckInFeature;
