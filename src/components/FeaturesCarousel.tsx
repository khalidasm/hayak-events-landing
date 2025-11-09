"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const features = [
    "Guests management",
    "Invitation confirmation",
    "Whatsapp & Email Invitations",
    "Event Confirmation",
    "Invitation Confirmation",
    "Guest Check in",
];

const FeaturesCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % features.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <span className="relative inline-block h-8 xl:h-12 w-[150px] xl:w-[200px] items-center justify-center mt-2 xl:mt-3">
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

export default FeaturesCarousel;
