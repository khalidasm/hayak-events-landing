"use client";

import { motion } from "framer-motion";
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
    
    // Create duplicated array for infinite loop
    const duplicatedFeatures = [...features, ...features];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % features.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <span className="relative inline-block min-w-[400px] h-36 overflow-hidden">
            <motion.div
                className="flex flex-col"
                animate={{
                    y: -currentIndex * 48, // 48px per item (h-12 = 48px)
                }}
                transition={{
                    duration: 0.8,
                    ease: [0.4, 0.0, 0.2, 1], // Custom cubic-bezier for smoother animation
                    type: "tween",
                }}
            >
                {duplicatedFeatures.map((feature, index) => {
                    // Calculate the relative position within the original features array
                    const relativeIndex = index % features.length;
                    
                    // Determine if this is the current, previous, or next item
                    const isActive = relativeIndex === currentIndex;
                    const isPrevious = relativeIndex === (currentIndex - 1 + features.length) % features.length;
                    const isNext = relativeIndex === (currentIndex + 1) % features.length;
                    
                    // Only show items that are current, previous, or next
                    if (!isActive && !isPrevious && !isNext) return null;

                    return (
                        <motion.span
                            key={`${feature}-${index}`}
                            className={`whitespace-nowrap text-3xl font-bold h-12 flex items-center relative ml-2 ${
                                isActive ? "text-[#4F2396]" : "text-gray-400"
                            }`}
                            style={{
                                filter: isActive ? "none" : "blur(1px)",
                                opacity: isActive ? 1 : 0.6,
                            }}
                            animate={{
                                scale: isActive ? 1 : 0.9,
                            }}
                            transition={{
                                duration: 0.8,
                                ease: [0.4, 0.0, 0.2, 1],
                                type: "tween",
                            }}
                        >
                            {(isPrevious || isNext) && (
                                <motion.div
                                    className="absolute rounded-lg pointer-events-none"
                                    style={{
                                        background: "rgba(245, 240, 255, 0.6)",
                                        backdropFilter: "blur(8px) saturate(150%)",
                                        border: "1px solid rgba(255,255,255,0.3)",
                                        width: `${feature.length * 16 + 20}px`,
                                        height: "40px",
                                        left: "-10px",
                                        top: "50%",
                                        transform: "translateY(-50%)",
                                        zIndex: -1,
                                    }}
                                    animate={{
                                        opacity: 0.8,
                                    }}
                                    transition={{
                                        duration: 0.8,
                                        ease: [0.4, 0.0, 0.2, 1],
                                        type: "tween",
                                    }}
                                />
                            )}
                            {feature}
                        </motion.span>
                    );
                })}
            </motion.div>
        </span>
    );
};

export default FeaturesCarousel;
