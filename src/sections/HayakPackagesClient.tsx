"use client";

import React, { useRef, useLayoutEffect } from "react";
import { motion, useInView } from "framer-motion";
import PackageCard from "../components/PackageCard";

interface HayakPackagesClientProps {
    locale: 'en' | 'ar';
    translations: {
        title: React.ReactNode;
        bestDeal: string;
        buttonText: string;
        packages: {
            basic: { title: string; items: string[] };
            essential: { title: string; items: string[] };
            deluxe: { title: string; items: string[] };
            premium: { title: string; items: string[] };
            elite: { title: string; items: string[] };
        };
    };
}

const HayakPackagesClient = ({ locale, translations }: HayakPackagesClientProps) => {
    const isRTL = locale === 'ar';
    
    // Refs for scroll-triggered animations
    const containerRef = useRef(null);
    const titleRef = useRef(null);
    const packagesRef = useRef(null);

    // Hide server-rendered section synchronously before browser paint
    useLayoutEffect(() => {
        const serverHayakPackages = document.querySelector('[data-server-hayak-packages]');
        if (serverHayakPackages) {
            (serverHayakPackages as HTMLElement).style.display = 'none';
            (serverHayakPackages as HTMLElement).setAttribute('aria-hidden', 'true');
        }
    }, []);

    // InView states for scroll-triggered animations
    const containerInView = useInView(containerRef, {
        once: true,
        margin: "-100px",
    });
    const titleInView = useInView(titleRef, { once: true, margin: "-100px" });
    const packagesInView = useInView(packagesRef, {
        once: true,
        margin: "-100px",
    });

    // Convert items to PackageItem format
    const formatItems = (items: string[]) => items.map(text => ({ text }));

    return (
        <motion.div
            ref={containerRef}
            initial={{ opacity: 0 }}
            animate={containerInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full relative flex flex-col gap-[var(--spacing-gap-3xl)]"
        >
            <motion.h2
                ref={titleRef}
                initial={{ opacity: 0, y: 50 }}
                animate={
                    titleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
                }
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="text-2xl md:text-3xl lg:text-4xl xl:text-4xl text-center font-semibold"
            >
                {translations.title}
            </motion.h2>
            <motion.div
                ref={packagesRef}
                initial={{ opacity: 0, y: 100 }}
                animate={
                    packagesInView
                        ? { opacity: 1, y: 0 }
                        : { opacity: 0, y: 100 }
                }
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                className="flex flex-col items-center justify-center gap-10 p-6 rounded-[20px] md:rounded-[20px] xl:py-0 xl:rounded-none xl:gap-0 xl:flex-row xl:items-stretch bg-[#F9F4FF] xl:bg-transparent"
            >
                <PackageCard
                    variant={isRTL ? "last" : "first"}
                    title={translations.packages.basic.title}
                    price={1200}
                    items={formatItems(translations.packages.basic.items)}
                    buttonText={translations.buttonText}
                    locale={locale}
                    bestDealText={translations.bestDeal}
                />
                <PackageCard
                    variant="middle"
                    title={translations.packages.essential.title}
                    price={2100}
                    items={formatItems(translations.packages.essential.items)}
                    buttonText={translations.buttonText}
                    locale={locale}
                    bestDealText={translations.bestDeal}
                />
                <PackageCard
                    variant="middle"
                    title={translations.packages.deluxe.title}
                    price={2900}
                    items={formatItems(translations.packages.deluxe.items)}
                    buttonText={translations.buttonText}
                    isRecommended={true}
                    locale={locale}
                    bestDealText={translations.bestDeal}
                />
                <PackageCard
                    variant="middle"
                    title={translations.packages.premium.title}
                    price={3800}
                    items={formatItems(translations.packages.premium.items)}
                    buttonText={translations.buttonText}
                    locale={locale}
                    bestDealText={translations.bestDeal}
                />
                <PackageCard
                    variant={isRTL ? "first" : "last"}
                    title={translations.packages.elite.title}
                    price={4300}
                    items={formatItems(translations.packages.elite.items)}
                    buttonText={translations.buttonText}
                    locale={locale}
                    bestDealText={translations.bestDeal}
                />
            </motion.div>
        </motion.div>
    );
};

export default HayakPackagesClient;

