"use client";

import React, { useRef, useLayoutEffect } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

interface CheckInFeatureClientProps {
    locale: 'en' | 'ar';
    translations: {
        title: React.ReactNode;
        description: React.ReactNode;
    };
}

const CheckInFeatureClient = ({ locale, translations }: CheckInFeatureClientProps) => {
    const isRTL = locale === 'ar';
    
    // Refs for scroll-triggered animations
    const leftContentRef = useRef(null);
    const rightCardRef = useRef(null);
    const bouncingCardRef = useRef(null);

    // Hide server-rendered section synchronously before browser paint
    useLayoutEffect(() => {
        const serverCheckInFeature = document.querySelector('[data-server-check-in-feature]');
        if (serverCheckInFeature) {
            (serverCheckInFeature as HTMLElement).style.display = 'none';
            (serverCheckInFeature as HTMLElement).setAttribute('aria-hidden', 'true');
        }
    }, []);

    // InView states for scroll-triggered animations
    const leftContentInView = useInView(leftContentRef, { once: true, margin: "-100px" });
    const rightCardInView = useInView(rightCardRef, { once: true, margin: "-100px" });
    const bouncingCardInView = useInView(bouncingCardRef, { once: true, margin: "-100px" });

    return (
        <>
            <motion.div 
                ref={leftContentRef}
                initial={{ opacity: 0, x: isRTL ? 100 : -100 }}
                animate={leftContentInView ? { opacity: 1, x: 0 } : { opacity: 0, x: isRTL ? 100 : -100 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="w-full lg:w-1/2 xl:w-1/2 h-full flex flex-col gap-[var(--spacing-gap-2xl)] lg:gap-[var(--spacing-gap-4xl)] xl:gap-[var(--spacing-gap-6xl)]"
            >
                <Image src="/Logo.webp" alt={isRTL ? "شعار حياك" : "Hayak Events logo"} width={100} height={100} className="hidden lg:block" quality={85} />
                <div className="flex flex-col gap-[var(--spacing-gap-lg)]">
                    <div className={`text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold ${
                        isRTL ? "text-center lg:text-right" : "text-center lg:text-left"
                    }`}>
                        {translations.title}
                    </div>
                    <p className={`text-base md:text-lg lg:text-xl xl:text-2xl w-full lg:w-[70%] xl:w-[90%] ${
                        isRTL ? "text-center lg:text-right" : "text-center lg:text-left"
                    }`}>
                        {translations.description}
                    </p>
                </div>
            </motion.div>
            <motion.div 
                ref={rightCardRef}
                initial={{ opacity: 0, x: isRTL ? -100 : 100 }}
                animate={rightCardInView ? { opacity: 1, x: 0 } : { opacity: 0, x: isRTL ? -100 : 100 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className={`hidden lg:block absolute lg:top-8 xl:top-24 2xl:top-8 ${
                    isRTL ? "lg:-left-8 xl:-left-16" : "lg:right-0 xl:right-0"
                }`}
            >
                <Image
                    src={isRTL ? '/ar/ch_card.webp' : '/en/ch_card.webp'}
                    alt={isRTL ? "بطاقة عرض ميزة تسجيل الوصول" : "Check-in feature showcase card"}
                    width={900}
                    height={900}
                    className="w-[600px] lg:w-[550px] xl:w-[700px] 2xl:w-[900px] h-auto"
                    loading="lazy"
                />
            </motion.div>
            <motion.div 
                ref={bouncingCardRef}
                initial={{ opacity: 0, x: isRTL ? -100 : 100 }}
                animate={
                    bouncingCardInView 
                        ? { opacity: 1, x: 0 }
                        : { opacity: 0, x: isRTL ? -100 : 100 }
                }
                transition={{ duration: 0.8, ease: "easeOut" }}
                className={`hidden lg:block absolute lg:-bottom-7 xl:-bottom-0 2xl:-bottom-7 ${
                    isRTL ? "lg:left-[280px] xl:left-[400px] 2xl:left-[550px]" : "lg:right-[280px] xl:right-[450px] 2xl:right-[550px]"
                }`}
            >
                <motion.div
                    animate={{ y: [-5, 5, -5] }}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                >
                    <Image
                        src={isRTL ? '/ar/ch_card_1.webp' : '/en/ch_card_1.webp'}
                        alt={isRTL ? "بطاقة عرض إضافية لتسجيل الوصول" : "Additional check-in feature card"}
                        width={400}
                        height={400}
                        className="w-[250px] lg:w-[250px] xl:w-[325px] 2xl:w-[400px] h-auto"
                        loading="lazy"
                    />
                </motion.div>
            </motion.div>
            <div className="block lg:hidden">
                <Image
                    src={isRTL ? '/ar/ch_card.webp' : '/en/chr_card.webp'}
                    alt={isRTL ? "بطاقة عرض ميزة تسجيل الوصول" : "Check-in feature showcase card"}
                    width={1200}
                    height={1200}
                    loading="lazy"
                    className={isRTL ? "" : "ml-[15px]"}
                />
            </div>
        </>
    );
};

export default CheckInFeatureClient;

