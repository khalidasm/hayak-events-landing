"use client";

import React, { useRef, useLayoutEffect } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

interface StatFeatureClientProps {
    locale: 'en' | 'ar';
    translations: {
        title: React.ReactNode;
        description: React.ReactNode;
    };
}

const StatFeatureClient = ({ locale, translations }: StatFeatureClientProps) => {
    const isRTL = locale === 'ar';
    
    // Refs for scroll-triggered animations
    const ticketSystemLeftRef = useRef(null);
    const ticketSystemRightRef = useRef(null);
    const containerRef = useRef(null);

    // Hide server-rendered section synchronously before browser paint
    useLayoutEffect(() => {
        const serverStatFeature = document.querySelector('[data-server-stat-feature]');
        if (serverStatFeature) {
            (serverStatFeature as HTMLElement).style.display = 'none';
            (serverStatFeature as HTMLElement).setAttribute('aria-hidden', 'true');
        }
    }, []);

    // InView states for scroll-triggered animations
    const ticketSystemLeftInView = useInView(ticketSystemLeftRef, {
        once: true,
        margin: "-100px",
    });
    const ticketSystemRightInView = useInView(ticketSystemRightRef, {
        once: true,
        margin: "-100px",
    });
    const containerInView = useInView(containerRef, {
        once: true,
        margin: "-100px",
    });

    return (
        <motion.div
            ref={containerRef}
            initial={{ opacity: 0 }}
            animate={containerInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full h-full flex flex-col xl:flex-row items-center gap-8 xl:gap-20"
        >
            <motion.div
                ref={ticketSystemLeftRef}
                initial={{ opacity: 0, x: isRTL ? 100 : -100 }}
                animate={
                    ticketSystemLeftInView
                        ? { opacity: 1, x: 0 }
                        : { opacity: 0, x: isRTL ? 100 : -100 }
                }
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative w-full xl:w-1/2 flex justify-center order-2 xl:order-1"
            >
                <Image
                    src={isRTL ? '/ar/st_card.svg' : '/en/st_card.svg'}
                    alt={isRTL ? 'بطاقة الإحصاءات' : 'Statistics card'}
                    width={1200}
                    height={1200}
                    className="w-full max-w-md xl:max-w-none h-auto"
                />
                <motion.div
                    animate={{ y: [-5, 5, -5] }}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className='absolute -bottom-14 xl:-bottom-28 hidden xl:block -left-6 xl:-left-12'
                >
                    <Image
                        src={isRTL ? '/ar/st_card_1.svg' : '/en/st_card_1.svg'}
                        alt={isRTL ? 'بطاقة إحصاءات إضافية' : 'Additional statistics card'}
                        width={300}
                        height={300}
                        className="w-[150px] xl:w-[300px] h-auto"
                    />
                </motion.div>
            </motion.div>
            <motion.div
                ref={ticketSystemRightRef}
                initial={{ opacity: 0, x: isRTL ? -100 : 100 }}
                animate={
                    ticketSystemRightInView
                        ? { opacity: 1, x: 0 }
                        : { opacity: 0, x: isRTL ? -100 : 100 }
                }
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="flex flex-col gap-3 xl:gap-5 w-full xl:w-1/2 order-1 xl:order-2"
            >
                <div className={`text-2xl xl:text-4xl font-bold ${
                    isRTL ? "text-center xl:text-right" : "text-center xl:text-left"
                }`}>
                    {translations.title}
                </div>
                <p className={`text-base xl:text-lg ${
                    isRTL ? "text-center xl:text-right" : "text-center xl:text-left"
                }`}>
                    {translations.description}
                </p>
            </motion.div>
        </motion.div>
    );
};

export default StatFeatureClient;

