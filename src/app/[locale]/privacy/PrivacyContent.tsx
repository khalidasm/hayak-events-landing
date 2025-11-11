"use client";

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

interface PrivacyContentProps {
    locale: 'en' | 'ar';
    translations: {
        title: React.ReactNode;
        intro: string;
        sectionTitle: string;
        sectionContent: string;
    };
}

const PrivacyContent = ({ locale, translations }: PrivacyContentProps) => {
    const isRTL = locale === 'ar';
    const titleRef = useRef(null);
    const introRef = useRef(null);
    const titleInView = useInView(titleRef, { once: true, margin: "-100px" });
    const introInView = useInView(introRef, { once: true, margin: "-100px" });

    return (
        <div className="pt-32 xl:pt-40 pb-16 px-4 xl:px-60">
            <div className={`max-w-7xl mx-auto ${isRTL ? 'text-right' : 'text-left'}`}>
                {/* Page Title */}
                <motion.h1
                    ref={titleRef}
                    className="text-3xl xl:text-5xl font-bold text-[#241044] mb-6 xl:mb-8 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={titleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                >
                    {translations.title}
                </motion.h1>

                {/* Introduction Paragraph */}
                <motion.p
                    ref={introRef}
                    className="text-base xl:text-lg text-gray-600 mb-8 xl:mb-12 leading-relaxed"
                    initial={{ opacity: 0, y: 20 }}
                    animate={introInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
                >
                    {translations.intro}
                </motion.p>

                {/* Numbered Sections */}
                <div className="space-y-8 xl:space-y-12">
                    {[1, 2, 3, 4].map((num, index) => (
                        <SectionItem
                            key={num}
                            num={num}
                            sectionTitle={translations.sectionTitle}
                            sectionContent={translations.sectionContent}
                            delay={0.6 + index * 0.2}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

interface SectionItemProps {
    num: number;
    sectionTitle: string;
    sectionContent: string;
    delay: number;
}

const SectionItem = ({ num, sectionTitle, sectionContent, delay }: SectionItemProps) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <motion.section
            ref={ref}
            className="space-y-4"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, ease: "easeOut", delay }}
        >
            <h2 className="text-xl xl:text-2xl font-bold text-[#241044]">
                {num}. {sectionTitle}
            </h2>
            <p className="text-base xl:text-lg text-gray-600 leading-relaxed">
                {sectionContent}
            </p>
        </motion.section>
    );
};

export default PrivacyContent;

