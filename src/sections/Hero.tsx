import React from "react";
import Image from "next/image";
import HeroContent from "./HeroContent";

const translations = {
    en: (
        <>
            Invite your special people <br />
            <span className="text-[#4F2396]"> Seamlessly </span>
            with Us
        </>
    ),
    ar: (
        <>
            ادعُ الأشخاص المميزين لديك
            <span className="text-[#4F2396]"> بكل <br /> سلاسة معنا. </span>
        </>
    )
};

interface HeroProps {
    locale: 'en' | 'ar';
}

const Hero = ({ locale = 'en' }: HeroProps) => {
    const isRTL = locale === 'ar';
    
    return (
        <div className="w-full flex flex-col gap-3 xl:gap-5 items-center justify-center pt-24 xl:pt-32 pb-16 xl:pb-60 px-4 xl:px-60">
            <Image src="/Logo.svg" alt={isRTL ? "شعار حياك - منصة إدارة الفعاليات" : "Hayak Events logo - Event management platform"} width={120} height={120} />
            <h1 className="font-semibold text-2xl xl:text-[48px] text-center px-4">
                {translations[locale]}
            </h1>
            <HeroContent isRTL={isRTL} />
        </div>
    );
};

export default Hero;
