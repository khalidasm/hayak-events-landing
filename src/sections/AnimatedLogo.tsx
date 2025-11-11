"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface AnimatedLogoProps {
    children: React.ReactNode;
    delay?: number;
}

const AnimatedLogo = ({ children, delay = 0 }: AnimatedLogoProps) => {
    const [shouldAnimate, setShouldAnimate] = useState(false);

    useEffect(() => {
        // Trigger animation after component mounts on client
        const timer = setTimeout(() => {
            setShouldAnimate(true);
        }, 50);
        return () => clearTimeout(timer);
    }, []);

    return (
        <motion.div
            initial={{ opacity: 1, scale: 1 }}
            animate={shouldAnimate ? { opacity: [0, 1], scale: [0.8, 1] } : { opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay }}
            style={{ willChange: "opacity, transform" }}
        >
            {children}
        </motion.div>
    );
};

export default AnimatedLogo;

