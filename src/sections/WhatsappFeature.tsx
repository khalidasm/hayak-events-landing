import React, { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
const WhatsappFeature = () => {
    // Container refs
    const containerRef = useRef(null);
    const leftSectionRef = useRef(null);
    const rightSectionRef = useRef(null);
    
    // InView states
    const containerInView = useInView(containerRef, { once: true, margin: "-100px" });
    const leftSectionInView = useInView(leftSectionRef, { once: true, margin: "-100px" });
    const rightSectionInView = useInView(rightSectionRef, { once: true, margin: "-100px" });

    return (
        <motion.div 
            ref={containerRef}
            initial={{ opacity: 0 }}
            animate={containerInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full px-4 xl:px-60 py-16 xl:py-32"
        >
            <div className='w-full h-full xl:h-[400px] bg-[url("/whatsapp_pattern_res.svg")] xl:bg-[url("/whatsapp_feature_pattern.svg")] bg-cover xl:bg-contain bg-center bg-no-repeat py-5 flex flex-col items-center justify-center rounded-[20px] xl:rounded-none'>
                <div className="flex flex-col xl:flex-row items-center gap-5 px-4 xl:px-32 w-full">
                    <motion.div 
                        ref={leftSectionRef}
                        initial={{ opacity: 0, x: -100 }}
                        animate={leftSectionInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="flex flex-col w-full xl:w-1/2"
                    >
                        <div className="flex flex-col xl:flex-row items-center gap-3 xl:gap-5">
                            <Image
                                src="/Logo.svg"
                                className="mb-2 xl:mb-5"
                                alt="whatsapp_feature_pattern"
                                width={100}
                                height={100}
                            />
                            <h1 className="text-2xl xl:text-4xl font-bold text-center xl:text-left">
                                Whatsapp Feature
                            </h1>
                        </div>
                        <div className="mt-4">
                            <p className="text-base xl:text-lg text-center xl:text-left">
                                Effortlessly send event invitation confirmation
                                messages via WhatsApp or Email, allowing event
                                organizers to compile a verified guest list in
                                advance.
                            </p>
                        </div>
                    </motion.div>
                    <motion.div 
                        ref={rightSectionRef}
                        initial={{ opacity: 0, x: 100 }}
                        animate={rightSectionInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="w-full xl:w-1/2 flex items-center justify-center"
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
                                src="/whatsapp_card.svg"
                                alt="whatsapp_card"
                                width={400}
                                height={400}
                                className="w-[250px] xl:w-[400px] h-auto"
                            />
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </motion.div>
    );
};

export default WhatsappFeature;
