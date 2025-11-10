import React from "react";
import FeaturesCarouselClient from "./FeaturesCarouselClient";

const translations = {
    en: [
        "Guests management",
        "Invitation confirmation",
        "Whatsapp & Email Invitations",
        "Event Confirmation",
        "Invitation Confirmation",
        "Guest Check in",
    ],
    ar: [
        "إدارة الضيوف",
        "تأكيد الدعوات",
        "دعوات الواتساب والبريد الإلكتروني",
        "تأكيد الفعالية",
        "تأكيد الدعوة",
        "تسجيل وصول الضيوف",
    ],
};

interface FeaturesCarouselProps {
    locale: 'en' | 'ar';
}

const FeaturesCarousel = ({ locale = 'en' }: FeaturesCarouselProps) => {
    const features = translations[locale];
    const firstFeature = features[0];

    return (
        <>
            {/* Server-rendered first feature for SEO - hidden after client hydration */}
            <span 
                data-server-carousel
                className="relative inline-block h-8 xl:h-12 min-w-[150px] w-auto xl:w-[200px] items-center justify-center mt-2 xl:mt-3 text-center"
            >
                <span className="whitespace-nowrap text-lg xl:text-3xl font-bold text-[#4F2396]">
                    {firstFeature}
                </span>
            </span>
            
            {/* Client component for carousel animation (takes over after hydration) */}
            <FeaturesCarouselClient features={features} />
            
            {/* SEO: Hidden list of all features for search engines */}
            <div className="sr-only">
                {features.map((feature, index) => (
                    <span key={index}>{feature}</span>
                ))}
            </div>
        </>
    );
};

export default FeaturesCarousel;
