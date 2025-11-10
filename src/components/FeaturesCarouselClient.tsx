"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

interface FeaturesCarouselClientProps {
    features: string[];
}

const FeaturesCarouselClient = ({ features }: FeaturesCarouselClientProps) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % features.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [features.length]);

    // Hide server-rendered version once client component mounts
    useEffect(() => {
        if (mounted) {
            const serverRendered = document.querySelector('[data-server-carousel]');
            if (serverRendered) {
                (serverRendered as HTMLElement).style.display = 'none';
            }
        }
    }, [mounted]);

    if (!mounted) {
        return null;
    }

    return (
        <span className="relative inline-block h-8 xl:h-12 min-w-[150px] w-auto xl:w-[200px] items-center justify-center mt-2 xl:mt-3 text-center">
            <AnimatePresence mode="wait">
                <motion.span
                    key={currentIndex}
                    className="whitespace-nowrap text-lg xl:text-3xl font-bold text-[#4F2396]"
                    initial={{ opacity: 0, y: 20, scale: 0.8 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -20, scale: 0.8 }}
                    transition={{
                        duration: 0.6,
                        ease: [0.4, 0.0, 0.2, 1],
                        type: "tween",
                    }}
                >
                    {features[currentIndex]}
                </motion.span>
            </AnimatePresence>
        </span>
    );
};

export default FeaturesCarouselClient;

