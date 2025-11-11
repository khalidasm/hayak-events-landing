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
            <Image 
                src="/Logo.svg" 
                alt={isRTL ? "شعار حياك - منصة إدارة الفعاليات" : "Hayak Events logo - Event management platform"} 
                width={120} 
                height={120}
                priority
            />
            <h1 className="font-semibold text-2xl xl:text-[48px] text-center px-4">
                {translations[locale]}
            </h1>
            {/* H1 content in visible body text for SEO */}
            <p className="text-center text-base xl:text-lg text-gray-600 px-4 max-w-2xl">
                {locale === 'en' 
                    ? "Invite your special people seamlessly with us. Hayak Events provides a seamless event management platform for managing your events, guests, and invitations."
                    : "ادعُ الأشخاص المميزين لديك بكل سلاسة معنا. توفر حياك منصة إدارة فعاليات سلسة لإدارة فعالياتك وضيوفك ودعواتك."
                }
            </p>
            <HeroContent isRTL={isRTL} />
        </div>
    );
};

export default Hero;
