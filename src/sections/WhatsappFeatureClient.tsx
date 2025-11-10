"use client";

import React, { useRef, useLayoutEffect } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

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

interface WhatsappFeatureClientProps {
    locale: "en" | "ar";
}

const WhatsappFeatureClient = ({ locale = "en" }: WhatsappFeatureClientProps) => {
    const isRTL = locale === "ar";
    const t = translations[locale];

    // Hide server-rendered section synchronously before browser paint
    useLayoutEffect(() => {
        const serverWhatsappFeature = document.querySelector('[data-server-whatsapp-feature]');
        if (serverWhatsappFeature) (serverWhatsappFeature as HTMLElement).style.display = 'none';
    }, []);

    // Container refs
    const containerRef = useRef(null);
    const leftSectionRef = useRef(null);
    const rightSectionRef = useRef(null);

    // InView states
    const containerInView = useInView(containerRef, {
        once: true,
        margin: "-100px",
    });
    const leftSectionInView = useInView(leftSectionRef, {
        once: true,
        margin: "-100px",
    });
    const rightSectionInView = useInView(rightSectionRef, {
        once: true,
        margin: "-100px",
    });

    // Determine background images based on RTL and screen size
    const mobileBg = "/whatsapp_pattern_res.svg";
    const desktopBg = isRTL
        ? "/ar/whatsapp_feature_pattern.svg"
        : "/en/whatsapp_feature_pattern.svg";

    return (
        <motion.div
            ref={containerRef}
            initial={{ opacity: 0 }}
            animate={containerInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full px-4 xl:px-60 py-16 xl:py-32"
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
                <div className="flex flex-col xl:flex-row items-center gap-5 px-4 xl:px-32 w-full">
                    <motion.div
                        ref={leftSectionRef}
                        initial={{ opacity: 0, x: -100 }}
                        animate={
                            leftSectionInView
                                ? { opacity: 1, x: 0 }
                                : { opacity: 0, x: -100 }
                        }
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="flex flex-col w-full xl:w-1/2"
                    >
                        <div
                            className={`flex flex-col xl:flex-row items-center gap-3`}
                        >
                            <Image
                                src="/Logo.svg"
                                className={`mb-2 xl:mb-5`}
                                alt={isRTL ? "شعار حياك" : "Hayak Events logo"}
                                width={100}
                                height={100}
                                style={{
                                    display: isRTL ? "none" : "block",
                                }}
                            />
                            <h2
                                className={`text-2xl xl:text-4xl font-bold w-fit ${
                                    isRTL
                                        ? "text-center xl:text-right"
                                        : "text-center xl:text-left"
                                }`}
                            >
                                {t.title}
                            </h2>
                            <Image
                                src="/Logo.svg"
                                className={`mb-2 xl:mb-5`}
                                alt={isRTL ? "شعار حياك" : "Hayak Events logo"}
                                width={100}
                                height={100}
                                style={{
                                    display: isRTL ? "block" : "none",
                                }}
                            />
                        </div>
                        <div className="mt-4">
                            <p
                                className={`text-base xl:text-lg ${
                                    isRTL
                                        ? "text-center xl:text-right"
                                        : "text-center xl:text-left"
                                }`}
                            >
                                {t.description}
                            </p>
                        </div>
                    </motion.div>
                    <motion.div
                        ref={rightSectionRef}
                        initial={{ opacity: 0, x: 100 }}
                        animate={
                            rightSectionInView
                                ? { opacity: 1, x: 0 }
                                : { opacity: 0, x: 100 }
                        }
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="w-full xl:w-1/2 flex items-center justify-center"
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
                                src="/whatsapp_card.svg"
                                alt={isRTL ? "بطاقة عرض ميزة واتساب" : "WhatsApp integration feature card"}
                                width={400}
                                height={400}
                                className="w-[250px] xl:w-[400px] h-auto"
                            />
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </motion.div>
    );
};

export default WhatsappFeatureClient;

