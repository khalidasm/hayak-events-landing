import React, { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

const CheckInFeature = () => {
    // Refs for scroll-triggered animations
    const containerRef = useRef(null);
    const leftContentRef = useRef(null);
    const rightCardRef = useRef(null);
    const bouncingCardRef = useRef(null);

    // InView states for scroll-triggered animations
    const containerInView = useInView(containerRef, { once: true, margin: "-100px" });
    const leftContentInView = useInView(leftContentRef, { once: true, margin: "-100px" });
    const rightCardInView = useInView(rightCardRef, { once: true, margin: "-100px" });
    const bouncingCardInView = useInView(bouncingCardRef, { once: true, margin: "-100px" });

    return (
        <motion.div 
            ref={containerRef}
            initial={{ opacity: 0 }}
            animate={containerInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="bg-[#F5F0FF] w-full xl:h-[900px] relative px-4 xl:px-60 py-16 xl:py-32"
        >
            <motion.div 
                ref={leftContentRef}
                initial={{ opacity: 0, x: -100 }}
                animate={leftContentInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="w-full xl:w-1/2 h-full flex flex-col gap-60"
            >
                <Image src="/Logo.svg" alt="logo" width={100} height={100} className="hidden xl:block" />
                <div className="flex flex-col gap-5">
                    <h1 className="text-2xl xl:text-5xl text-center xl:text-left font-bold">
                        Check-in <span className="text-[#4F2396]">Feature</span>
                    </h1>
                    <p className="text-base xl:text-2xl text-center xl:text-left w-full xl:w-[90%]">
                        Make guest arrivals effortless with a seamless, QR based
                        check-in system that's fast, secure, and keeps you
                        updated in real time, ensuring smooth entry for every
                        guest while giving organizers full control and peace of mind.
                        and peace of mind.
                    </p>
                </div>
            </motion.div>
            <motion.div 
                ref={rightCardRef}
                initial={{ opacity: 0, x: 100 }}
                animate={rightCardInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="hidden xl:block absolute xl:top-8 xl:right-0"
            >
                <Image
                    src="/ch_card.svg"
                    alt="ch_card"
                    width={900}
                    height={900}
                />
            </motion.div>
            <motion.div 
                ref={bouncingCardRef}
                initial={{ opacity: 0, x: 100 }}
                animate={
                    bouncingCardInView 
                        ? { opacity: 1, x: 0 }
                        : { opacity: 0, x: 100 }
                }
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="hidden xl:block absolute -bottom-5 right-[550px]"
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
                        src="/ch_card_1.svg"
                        alt="ch_card_1"
                        width={400}
                        height={400}
                    />
                </motion.div>
            </motion.div>
            <div className="block xl:hidden">
                <Image
                    src="/chr_card.svg"
                    alt="ch_card"
                    width={1200}
                    height={1200}
                />
            </div>
        </motion.div>
    );
};

export default CheckInFeature;
