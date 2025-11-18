import React from "react";
import Image from "next/image";
import WhatsappFeatureClient from "./WhatsappFeatureClient";

const translations = {
    en: {
        title: "Whatsapp Feature",
        description: (
            <>
                Effortlessly send event invitation confirmation messages via
                WhatsApp or Email, allowing event organizers to compile a
                verified guest list in advance.
            </>
        ),
    },
    ar: {
        title: "ميزة الواتساب في",
        description: (
            <>
                أرسل رسائل تأكيد دعوات الفعاليات بكل سهولة عبر واتساب أو البريد
                الإلكتروني، مما يتيح لمنظمي الفعاليات إعداد قائمة ضيوف مؤكدة
                مسبقًا.
            </>
        ),
    },
};

interface WhatsappFeatureProps {
    locale: "en" | "ar";
}

const WhatsappFeature = ({ locale = "en" }: WhatsappFeatureProps) => {
    const isRTL = locale === "ar";
    const t = translations[locale];

    // Determine background images based on RTL and screen size
    const mobileBg = "/whatsapp_pattern_res.svg";
    // Use Arabic pattern for both locales since English version doesn't exist
    const desktopBg = "/ar/whatsapp_feature_pattern.svg";

    return (
        <>
            {/* Server-rendered section for SEO */}
            <div 
                data-server-whatsapp-feature
                className="w-full px-[var(--spacing-section-px-mobile)] md:px-[var(--spacing-section-px-tablet)] lg:px-[var(--spacing-section-px-small-laptop)] xl:px-[var(--spacing-section-px-xl)] 2xl:px-[var(--spacing-section-px-2xl)] py-[var(--spacing-section-py-mobile)] md:py-[var(--spacing-section-py-tablet)] lg:py-[var(--spacing-section-py-small-laptop)] xl:py-[var(--spacing-section-py-xl)] 2xl:py-[var(--spacing-section-py-2xl)]"
            >
                <style
                    dangerouslySetInnerHTML={{
                        __html: `
                            .whatsapp-bg-responsive {
                                background-image: url("${mobileBg}");
                            }
                        @media (min-width: 1280px) {
                            .whatsapp-bg-responsive {
                                background-image: url("${desktopBg}") !important;
                            }
                        }
                        `,
                    }}
                />
                <div className="whatsapp-bg-responsive w-full h-full xl:h-[400px] bg-cover xl:bg-contain bg-center bg-no-repeat py-5 flex flex-col items-center justify-center rounded-[20px] xl:rounded-none">
                    <div className="flex flex-col xl:flex-row items-center gap-[var(--spacing-gap-lg)] px-[var(--spacing-section-px-mobile)] md:px-[var(--spacing-section-px-tablet)] lg:px-[var(--spacing-inner-px-small-laptop)] xl:px-[var(--spacing-inner-px-xl)] 2xl:px-[var(--spacing-inner-px-2xl)] w-full">
                        <div className="flex flex-col w-full xl:w-1/2">
                            <div
                                className={`flex flex-col xl:flex-row items-center gap-[var(--spacing-gap-sm)]`}
                            >
                                <Image
                                    src="/Logo.webp"
                                    className={`mb-2`}
                                    alt={isRTL ? "شعار حياك" : "Hayak Events logo"}
                                    width={100}
                                    height={100}
                                    style={{
                                        display: isRTL ? "none" : "block",
                                    }}
                                    quality={85}
                                />
                                <h2
                                    className={`text-2xl md:text-3xl lg:text-3xl xl:text-4xl font-semibold w-fit ${
                                        isRTL
                                            ? "text-center xl:text-right"
                                            : "text-center xl:text-left"
                                    }`}
                                >
                                    {t.title}
                                </h2>
                                <Image
                                    src="/Logo.webp"
                                    className={`mb-2`}
                                    alt={isRTL ? "شعار حياك" : "Hayak Events logo"}
                                    width={100}
                                    height={100}
                                    style={{
                                        display: isRTL ? "block" : "none",
                                    }}
                                    quality={85}
                                />
                            </div>
                            <div className="mt-4">
                                <p
                                    className={`text-base md:text-lg lg:text-base xl:text-lg ${
                                        isRTL
                                            ? "text-center xl:text-right"
                                            : "text-center xl:text-left"
                                    }`}
                                >
                                    {t.description}
                                </p>
                            </div>
                        </div>
                        <div className="w-full xl:w-1/2 flex items-center justify-center">
                            <div>
                                <Image
                                    src="/whatsapp_card.webp"
                                    alt={isRTL ? "بطاقة عرض ميزة واتساب" : "WhatsApp integration feature card"}
                                    width={400}
                                    height={400}
                                    className="w-[250px] md:w-[280px] lg:w-[320px] xl:w-[400px] h-auto"
                                    quality={85}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Client component for animations */}
            <WhatsappFeatureClient locale={locale} />
        </>
    );
};

export default WhatsappFeature;
