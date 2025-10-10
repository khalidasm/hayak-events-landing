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
            className="w-full px-40 py-32"
        >
            <div className='w-full h-[400px] bg-[url("/whatsapp_feature_pattern.svg")] bg-contain bg-center bg-no-repeat py-5 flex flex-col items-center justify-center'>
                <div className="flex items-center gap-5 px-40">
                    <motion.div 
                        ref={leftSectionRef}
                        initial={{ opacity: 0, x: -100 }}
                        animate={leftSectionInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="flex flex-col w-1/2"
                    >
                        <div className="flex items-center">
                            <Image
                                src="/Logo.png"
                                className="mb-5"
                                alt="whatsapp_feature_pattern"
                                width={100}
                                height={100}
                            />
                            <h1 className="text-4xl font-bold">
                                Whatsapp Feature
                            </h1>
                        </div>
                        <div>
                            <p className="text-lg">
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
                        className="w-1/2 flex items-center justify-center"
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
                            />
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </motion.div>
    );
};

export default WhatsappFeature;
