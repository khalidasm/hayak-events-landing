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
        <div className="bg-[#F5F0FF] w-full xl:h-[900px] relative px-4 xl:px-60 py-24 xl:py-48">
            {/* Server-rendered section for SEO */}
            <div 
                data-server-check-in-feature
                className="w-full xl:w-1/2 h-full flex flex-col gap-52"
            >
                <Image src="/Logo.svg" alt={isRTL ? "شعار حياك" : "Hayak Events logo"} width={100} height={100} className="hidden xl:block" />
                <div className="flex flex-col gap-5">
                    <h2 className={`text-2xl xl:text-5xl font-bold ${
                        isRTL ? "text-center xl:text-right" : "text-center xl:text-left"
                    }`}>
                        {t.title}
                    </h2>
                    <p className={`text-base xl:text-2xl w-full xl:w-[90%] ${
                        isRTL ? "text-center xl:text-right" : "text-center xl:text-left"
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
