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
                className="w-full xl:w-1/2 h-full flex flex-col gap-52"
            >
                <Image src="/Logo.png" alt={isRTL ? "شعار حياك" : "Hayak Events logo"} width={100} height={100} className="hidden xl:block" unoptimized />
                <div className="flex flex-col gap-5">
                    <div className={`text-2xl xl:text-5xl font-bold ${
                        isRTL ? "text-center xl:text-right" : "text-center xl:text-left"
                    }`}>
                        {translations.title}
                    </div>
                    <p className={`text-base xl:text-2xl w-full xl:w-[90%] ${
                        isRTL ? "text-center xl:text-right" : "text-center xl:text-left"
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
                className={`hidden xl:block absolute xl:top-8 ${
                    isRTL ? "xl:-left-16" : "xl:right-0"
                }`}
            >
                <Image
                    src={isRTL ? '/ar/ch_card.png' : '/en/ch_card.png'}
                    alt={isRTL ? "بطاقة عرض ميزة تسجيل الوصول" : "Check-in feature showcase card"}
                    width={900}
                    height={900}
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
                className={`hidden xl:block absolute -bottom-5 ${
                    isRTL ? "left-[550px]" : "right-[550px]"
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
                        src={isRTL ? '/ar/ch_card_1.png' : '/en/ch_card_1.png'}
                        alt={isRTL ? "بطاقة عرض إضافية لتسجيل الوصول" : "Additional check-in feature card"}
                        width={400}
                        height={400}
                        loading="lazy"
                    />
                </motion.div>
            </motion.div>
            <div className="block xl:hidden">
                <Image
                    src={isRTL ? '/ar/ch_card.png' : '/en/chr_card.png'}
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

