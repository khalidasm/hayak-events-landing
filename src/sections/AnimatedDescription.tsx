"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface AnimatedDescriptionProps {
    children: React.ReactNode;
    delay?: number;
}

const AnimatedDescription = ({ children, delay = 0.4 }: AnimatedDescriptionProps) => {
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
            initial={{ opacity: 1, y: 0 }}
            animate={shouldAnimate ? { opacity: [0, 1], y: [20, 0] } : { opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay }}
            style={{ willChange: "opacity, transform" }}
        >
            {children}
        </motion.div>
    );
};

export default AnimatedDescription;

