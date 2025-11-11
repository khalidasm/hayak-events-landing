"use client";

import React, { useRef, useLayoutEffect } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import NumberTile from "@/components/NumberTile";

interface HayakNumbersClientProps {
    locale: 'en' | 'ar';
    translations: {
        title: React.ReactNode;
        description: React.ReactNode;
        stats: {
            events: { value: number; label: string; kLabel: boolean };
            checkIn: { value: number; label: string; kLabel: boolean };
            printedBadges: { value: number; label: string; kLabel: boolean };
            sentInvitations: { value: number; label: string; kLabel: boolean };
        };
    };
}

const HayakNumbersClient = ({ locale, translations }: HayakNumbersClientProps) => {
    const isRTL = locale === 'ar';
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    // Hide server-rendered section synchronously before browser paint
    useLayoutEffect(() => {
        const serverHayakNumbers = document.querySelector('[data-server-hayak-numbers]');
        if (serverHayakNumbers) {
            (serverHayakNumbers as HTMLElement).style.display = 'none';
            (serverHayakNumbers as HTMLElement).setAttribute('aria-hidden', 'true');
        }
    }, []);

    return (
        <div ref={ref} className="w-full relative flex flex-col gap-10">
            <motion.div 
                className="flex flex-col xl:flex-row items-center justify-center xl:justify-between gap-10"
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <motion.div 
                    className={`flex flex-col items-center xl:items-start gap-5 w-full xl:w-auto ${
                        isRTL ? "xl:items-end" : ""
                    }`}
                    initial={{ opacity: 0, x: isRTL ? 30 : -30 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: isRTL ? 30 : -30 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <div className={`text-2xl xl:text-4xl font-bold ${
                        isRTL ? "text-center xl:text-right" : "text-center xl:text-left"
                    }`}>
                        {translations.title}
                    </div>
                    <p className={`w-full xl:w-[75%] text-xl ${
                        isRTL ? "text-center xl:text-right" : "text-center xl:text-left"
                    }`}>
                        {translations.description}
                    </p>
                </motion.div>
                <motion.div 
                    className="flex items-center justify-center gap-5 relative w-full"
                    initial={{ opacity: 0, x: isRTL ? -30 : 30 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: isRTL ? -30 : 30 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    <div className="flex items-center justify-center gap-5 w-fit">
                        <div className={`flex flex-col items-center justify-center gap-5 ${isRTL ? "order-2" : "order-1"}`}>
                            <NumberTile 
                                imageSrc="/num_br.svg" 
                                prefix="+" 
                                value={translations.stats.events.value} 
                                label={translations.stats.events.label}
                                kLabel={translations.stats.events.kLabel}
                                alt={isRTL ? "إحصائيات" : "statistics"}
                            />
                            <NumberTile 
                                imageSrc="/num_tr.svg" 
                                prefix="+" 
                                value={translations.stats.checkIn.value} 
                                label={translations.stats.checkIn.label}
                                kLabel={translations.stats.checkIn.kLabel}
                                alt={isRTL ? "إحصائيات" : "statistics"}
                            />
                        </div>
                        <div className={`flex flex-col items-center justify-center gap-5 ${isRTL ? "order-1" : "order-2"}`}>
                            <NumberTile 
                                imageSrc="/num_bl.svg" 
                                prefix="+" 
                                value={translations.stats.printedBadges.value} 
                                label={translations.stats.printedBadges.label}
                                kLabel={translations.stats.printedBadges.kLabel}
                                alt={isRTL ? "إحصائيات" : "statistics"}
                            />
                            <NumberTile 
                                imageSrc="/num_tl.svg" 
                                prefix="+" 
                                value={translations.stats.sentInvitations.value} 
                                label={translations.stats.sentInvitations.label}
                                kLabel={translations.stats.sentInvitations.kLabel}
                                alt={isRTL ? "إحصائيات" : "statistics"}
                            />
                        </div>
                    </div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
                    >
                        <Image
                            src="/Logo.svg"
                            alt={isRTL ? "شعار حياك" : "Hayak logo"}
                            width={100}
                            height={100}
                            unoptimized={true}
                        />
                    </motion.div>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default HayakNumbersClient;

