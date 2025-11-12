import React from "react";
import Image from "next/image";
import HeroContent from "./HeroContent";
import AnimatedLogo from "./AnimatedLogo";
import AnimatedTitle from "./AnimatedTitle";
import AnimatedDescription from "./AnimatedDescription";

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
    
    const descriptionText = locale === 'en' 
        ? "Invite your special people seamlessly with us. Hayak Events provides a seamless event management platform for managing your events, guests, and invitations."
        : "ادعُ الأشخاص المميزين لديك بكل سلاسة معنا. توفر حياك منصة إدارة فعاليات سلسة لإدارة فعالياتك وضيوفك ودعواتك.";
    
    return (
        <div className="w-full flex flex-col gap-[var(--spacing-gap-sm)] md:gap-[var(--spacing-gap-md)] lg:gap-[var(--spacing-gap-lg)] xl:gap-[var(--spacing-gap-lg)] items-center justify-center pt-[var(--spacing-section-py-mobile)] md:pt-28 lg:pt-30 xl:pt-32 pb-[var(--spacing-section-py-mobile)] md:pb-[var(--spacing-section-py-tablet)] lg:pb-40 xl:pb-[var(--spacing-section-py-desktop)] px-[var(--spacing-section-px-mobile)] md:px-[var(--spacing-section-px-tablet)] lg:px-[var(--spacing-section-px-small-laptop)] xl:px-[var(--spacing-section-px-desktop)]">
            <AnimatedLogo>
                <Image 
                    src="/Logo.webp" 
                    alt={isRTL ? "شعار حياك - منصة إدارة الفعاليات" : "Hayak Events logo - Event management platform"} 
                    width={120} 
                    height={120}
                    priority
                    quality={90}
                    fetchPriority="high"
                />
            </AnimatedLogo>
            <AnimatedTitle>
                <h1 className="font-semibold text-2xl md:text-3xl lg:text-4xl xl:text-[48px] text-center px-[var(--spacing-section-px-mobile)]">
                    {translations[locale]}
                </h1>
            </AnimatedTitle>
            {/* H1 content in visible body text for SEO */}
            <AnimatedDescription>
                <p className="text-center text-base md:text-lg xl:text-lg text-gray-600 px-[var(--spacing-section-px-mobile)] max-w-2xl">
                    {descriptionText}
                </p>
            </AnimatedDescription>
            <HeroContent isRTL={isRTL} />
        </div>
    );
};

export default Hero;
