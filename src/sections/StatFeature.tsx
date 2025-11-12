import React from "react";
import Image from "next/image";
import StatFeatureClient from "./StatFeatureClient";

const translations = {
    en: {
        title: (
            <>
                Statistics{" "}
                <span className="text-[#4F2396]">Feature</span>
            </>
        ),
        description: (
            <>
                Gain powerful insights into your events with real-time
                statistics. Track attendance, monitor guest engagement,
                and measure performance with clear, visual reports that
                help you make smarter decisions and
                elevate future events.
            </>
        ),
    },
    ar: {
        title: (
            <>
                ميزة <span className="text-[#4F2396]">الإحصاءات</span> 
            </>
        ),
        description: (
            <>
                احصل على رؤى قوية حول فعالياتك من خلال إحصاءات فورية. تتبع معدلات الحضور، وراقب تفاعل الضيوف، وقس الأداء عبر تقارير مرئية وواضحة تساعدك على اتخاذ قرارات أذكى والارتقاء بفعالياتك المستقبلية.
            </>
        ),
    },
};

interface StatFeatureProps {
    locale: 'en' | 'ar';
}

const StatFeature = ({ locale = 'en' }: StatFeatureProps) => {
    const isRTL = locale === 'ar';
    const t = translations[locale];

    return (
        <div className="w-full py-[var(--spacing-section-py-mobile)] md:py-[var(--spacing-section-py-tablet)] lg:py-[var(--spacing-section-py-small-laptop)] xl:py-[var(--spacing-section-py-desktop)] px-[var(--spacing-section-px-mobile)] md:px-[var(--spacing-section-px-tablet)] lg:px-[var(--spacing-section-px-small-laptop)] xl:px-[var(--spacing-section-px-desktop)]">
            {/* Server-rendered section for SEO */}
            <div 
                data-server-stat-feature
                className="w-full h-full flex flex-col xl:flex-row items-center gap-[var(--spacing-gap-2xl)] xl:gap-[var(--spacing-gap-5xl)]"
            >
                <div className="relative w-full xl:w-1/2 flex justify-center order-2 xl:order-1">
                    <Image
                        src={isRTL ? '/ar/st_card.webp' : '/en/st_card.webp'}
                        alt={isRTL 
                            ? 'بطاقة عرض ميزة الإحصاءات في الوقت الفعلي لمنصة حياك لإدارة الفعاليات' 
                            : 'Hayak Events platform real-time statistics feature showcase card'
                        }
                        width={1200}
                        height={1200}
                        className="w-full max-w-md xl:max-w-none h-auto"
                        loading="lazy"
                    />
                    <div className='absolute -bottom-14 xl:-bottom-28 hidden xl:block -left-6 xl:-left-12'>
                        <Image
                            src={isRTL ? '/ar/st_card_1.webp' : '/en/st_card_1.webp'}
                            alt={isRTL 
                                ? 'بطاقة عرض إضافية لميزة الإحصاءات في الوقت الفعلي' 
                                : 'Additional real-time statistics feature showcase card'
                            }
                            width={300}
                            height={300}
                            className="w-[150px] xl:w-[300px] h-auto"
                            loading="lazy"
                        />
                    </div>
                </div>
                <div className="flex flex-col gap-[var(--spacing-gap-sm)] xl:gap-[var(--spacing-gap-lg)] w-full xl:w-1/2 order-1 xl:order-2">
                    <h2 className={`text-2xl md:text-3xl lg:text-3xl xl:text-4xl font-bold ${
                        isRTL ? "text-center xl:text-right" : "text-center xl:text-left"
                    }`}>
                        {t.title}
                    </h2>
                    <p className={`text-base md:text-lg lg:text-base xl:text-lg ${
                        isRTL ? "text-center xl:text-right" : "text-center xl:text-left"
                    }`}>
                        {t.description}
                    </p>
                </div>
            </div>

            {/* Client component for animations */}
            <StatFeatureClient 
                locale={locale}
                translations={{
                    title: t.title,
                    description: t.description,
                }}
            />
        </div>
    );
};

export default StatFeature;
