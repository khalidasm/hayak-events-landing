import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

type NumberTileProps = {
    imageSrc: string;
    alt?: string;
    width?: number;
    height?: number;
    prefix?: string;
    value?: string | number;
    label?: string;
    kLabel?: boolean;
    className?: string;
};

const NumberTile: React.FC<NumberTileProps> = ({
    imageSrc,
    alt = "stat",
    width = 500,
    height = 500,
    prefix,
    value,
    label,
    kLabel = false,
    className,
}) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const [displayValue, setDisplayValue] = useState(0);
    const showOverlay = prefix !== undefined || value !== undefined || label !== undefined;

    // Convert value to number for animation
    const numericValue = typeof value === 'string' ? parseFloat(value) : value;

    useEffect(() => {
        if (isInView && typeof numericValue === 'number') {
            const duration = 2000; // 2 seconds
            const steps = 60; // 60 steps for smooth animation
            const increment = numericValue / steps;
            const stepDuration = duration / steps;

            let currentStep = 0;
            const timer = setInterval(() => {
                currentStep++;
                const newValue = Math.min(increment * currentStep, numericValue);
                setDisplayValue(Math.round(newValue));
                
                if (currentStep >= steps) {
                    clearInterval(timer);
                }
            }, stepDuration);

            return () => clearInterval(timer);
        } else if (isInView && value !== undefined) {
            setDisplayValue(value as number);
        }
    }, [isInView, numericValue, value]);

    return (
        <div ref={ref} className={`relative ${className ?? ""}`}>
            <Image src={imageSrc} alt={alt} width={width} height={height} unoptimized />
            {showOverlay && (
                <div className="absolute flex flex-col items-center gap-2 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    {(prefix !== undefined || value !== undefined) && (
                        <div className="flex items-center gap-2 font-bold text-2xl text-[#4F2396]">
                            {prefix !== undefined && <p>{prefix}</p>}
                            {value !== undefined && (
                                <motion.p
                                    initial={{ opacity: 0 }}
                                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    {typeof numericValue === 'number' ? displayValue : value}
                                    {kLabel ? "K" : ""}
                                </motion.p>
                            )}
                        </div>
                    )}
                    {label !== undefined && (
                        <motion.p 
                            className="text-lg font-bold text-[#2F155A] text-center"
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                        >
                            {label}
                        </motion.p>
                    )}
                </div>
            )}
        </div>
    );
};

export default NumberTile;


