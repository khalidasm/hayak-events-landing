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
        <div className="w-full py-16 xl:py-32 px-4 xl:px-60">
            <motion.div
                ref={containerRef}
                initial={{ opacity: 0 }}
                animate={containerInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="w-full h-full flex flex-col xl:flex-row items-center gap-8 xl:gap-20 mt-16 xl:mt-[200px]"
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
                    className="relative w-full xl:w-1/2 flex justify-center order-2 xl:order-1"
                >
                    <Image
                        src="/st_card.svg"
                        alt="st_card"
                        width={1200}
                        height={1200}
                        className="w-full max-w-md xl:max-w-none h-auto"
                    />
                    <motion.div
                        animate={{ y: [-5, 5, -5] }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                        className="absolute -bottom-14 xl:-bottom-28 -left-6 xl:-left-12 hidden xl:block"
                    >
                        <Image
                            src="/st_card_1.svg"
                            alt="st_card_1"
                            width={300}
                            height={300}
                            className="w-[150px] xl:w-[300px] h-auto"
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
                    className="flex flex-col gap-3 xl:gap-5 w-full xl:w-1/2 order-1 xl:order-2"
                >
                    <h1 className="text-2xl xl:text-4xl font-bold text-center xl:text-left">
                        Statistics{" "}
                        <span className="text-[#4F2396]">Feature</span>
                    </h1>
                    <p className="text-base xl:text-lg text-center xl:text-left">
                        Gain powerful insights into your events with real-time
                        statistics. Track attendance, monitor guest engagement,
                        and measure performance with clear, visual reports that
                        help you make smarter decisions and
                        elevate future events.
                    </p>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default StatFeature;
