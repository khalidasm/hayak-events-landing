"use client";

import React from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

interface HeroContentProps {
    isRTL: boolean;
}

const HeroContent = ({ isRTL }: HeroContentProps) => {
    const { scrollYProgress } = useScroll();
    const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.2]);
    const cardScale = useTransform(scrollYProgress, [0.2, 0.8], [1, 1.3]);

    return (
        <div className="relative mt-8 xl:mt-14 w-full max-w-4xl">
            <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
                style={{ scale }}
                className="w-full"
            >
                <Image
                    src={isRTL ? '/ar/hero.svg' : '/en/hero.svg'}
                    alt={isRTL ? "صورة رئيسية لمنصة حياك لإدارة الفعاليات" : "Hayak Events platform hero illustration"}
                    width={1000}
                    height={1000}
                    className="w-full h-auto"
                    unoptimized={true}
                />
            </motion.div>

            <motion.div
                className={`absolute -bottom-20 xl:-bottom-45 hidden xl:block ${
                    isRTL ? "-right-20 xl:-right-55" : "-left-20 xl:-left-55"
                }`}
                style={{ scale: cardScale }}
                initial={{ x: isRTL ? 100 : -100, opacity: 0 }}
                animate={{
                    x: 0,
                    opacity: 1,
                    y: [0, -10, 0],
                }}
                transition={{
                    duration: 0.8,
                    delay: 0.3,
                    y: {
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                    },
                }}
            >
                <Image
                    src={isRTL ? '/ar/hero-right-card.svg' : '/en/hero-left-card.svg'}
                    alt={isRTL ? "بطاقة عرض ميزات حياك" : "Hayak features showcase card"}
                    width={400}
                    height={300}
                    className="w-[200px] xl:w-[400px] h-auto"
                    unoptimized={true}
                />
            </motion.div>

            <motion.div
                className={`absolute -bottom-20 xl:-bottom-45 hidden xl:block ${
                    isRTL ? "-left-20 xl:-left-55" : "-right-20 xl:-right-55"
                }`}
                style={{ scale: cardScale }}
                initial={{ x: isRTL ? -100 : 100, opacity: 0 }}
                animate={{
                    x: 0,
                    opacity: 1,
                    y: [0, -10, 0],
                }}
                transition={{
                    duration: 0.8,
                    delay: 0.5,
                    y: {
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                    },
                }}
            >
                <Image
                    src={isRTL ? '/ar/hero-left-card.svg' : '/en/hero-right-card.svg'}
                    alt={isRTL ? "بطاقة عرض خدمات حياك" : "Hayak services showcase card"}
                    width={400}
                    height={300}
                    className="w-[200px] xl:w-[400px] h-auto"
                    unoptimized={true}
                />
            </motion.div>
        </div>
    );
};

export default HeroContent;

