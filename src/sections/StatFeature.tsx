import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

const StatFeature = () => {
    // Refs for scroll-triggered animations
    const ticketSystemLeftRef = useRef(null);
    const ticketSystemRightRef = useRef(null);
    const containerRef = useRef(null);

    // InView states for scroll-triggered animations
    const ticketSystemLeftInView = useInView(ticketSystemLeftRef, {
        once: true,
        margin: "-100px",
    });
    const ticketSystemRightInView = useInView(ticketSystemRightRef, {
        once: true,
        margin: "-100px",
    });
    const containerInView = useInView(containerRef, {
        once: true,
        margin: "-100px",
    });
    return (
        <div className="w-full mb-20 px-60">
            <motion.div
                ref={containerRef}
                initial={{ opacity: 0 }}
                animate={containerInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="w-full h-full flex items-center gap-20 mt-[200px]"
            >
                <motion.div
                    ref={ticketSystemLeftRef}
                    initial={{ opacity: 0, x: -100 }}
                    animate={
                        ticketSystemLeftInView
                            ? { opacity: 1, x: 0 }
                            : { opacity: 0, x: -100 }
                    }
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="relative"
                >
                    <Image
                        src="/st_card.svg"
                        alt="st_card"
                        width={1200}
                        height={1200}
                    />
                    <motion.div
                        animate={{ y: [-5, 5, -5] }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                        className="absolute -bottom-28 -left-12"
                    >
                        <Image
                            src="/st_card_1.svg"
                            alt="st_card_1"
                            width={300}
                            height={300}
                        />
                    </motion.div>
                </motion.div>
                <motion.div
                    ref={ticketSystemRightRef}
                    initial={{ opacity: 0, x: 100 }}
                    animate={
                        ticketSystemRightInView
                            ? { opacity: 1, x: 0 }
                            : { opacity: 0, x: 100 }
                    }
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="flex flex-col gap-5 w-full"
                >
                    <h1 className="text-4xl font-bold">
                        Statistics{" "}
                        <span className="text-[#4F2396]">Feature</span>
                    </h1>
                    <p className="text-lg">
                        Gain powerful insights into your events with real-time
                        statistics. Track attendance, monitor guest engagement,
                        and measure performance with clear, visual reports that
                        help you make smarter decisions and
                        elevate future events.
                    </p>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default StatFeature;
