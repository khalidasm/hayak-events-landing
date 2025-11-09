import React, { useRef, useState } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const TryHayak = () => {
    // Container refs
    const containerRef = useRef(null);
    const leftSectionRef = useRef(null);
    const rightSectionRef = useRef(null);
    
    // State for phone number
    const [phoneNumber, setPhoneNumber] = useState("");

    // InView states
    const containerInView = useInView(containerRef, {
        once: true,
        margin: "-100px",
    });
    const leftSectionInView = useInView(leftSectionRef, {
        once: true,
        margin: "-100px",
    });
    const rightSectionInView = useInView(rightSectionRef, {
        once: true,
        margin: "-100px",
    });

    return (
        <motion.div
            id="try"
            ref={containerRef}
            initial={{ opacity: 0 }}
            animate={containerInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full px-4 sm:px-8 md:px-16 lg:px-60 py-16 sm:py-24 lg:py-32"
        >
            <div className='w-full sm:h-[350px] lg:h-[400px] bg-[url("/try_pattern_mob.svg")] md:bg-[url("/try_bg.svg")] bg-cover md:bg-contain bg-center md:bg-center bg-no-repeat py-10 md:py-5 flex flex-col items-center justify-center rounded-[20px] md:rounded-none'>
                <div className="flex items-center justify-center gap-5 px-4 sm:px-8 md:px-16 lg:px-60 w-full">
                    <motion.div
                        ref={leftSectionRef}
                        initial={{ opacity: 0, x: -100 }}
                        animate={
                            leftSectionInView
                                ? { opacity: 1, x: 0 }
                                : { opacity: 0, x: -100 }
                        }
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="flex flex-col w-full lg:w-1/2"
                    >
                        <div className="flex justify-center items-center gap-2 sm:gap-3">
                            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold">Try</h1>
                            <Image
                                src="/Logo.svg"
                                className="mb-2 sm:mb-5"
                                alt="whatsapp_feature_pattern"
                                width={60}
                                height={60}
                                style={{ width: '60px', height: '60px' }}
                            />
                        </div>
                        <div>
                            <p className="text-base sm:text-lg text-center mb-6 sm:mb-8">
                                Discover how easy event management can be. Try
                                Hayak now and explore the seamless invitation
                                experience for yourself.
                            </p>
                            
                            {/* WhatsApp Number Input */}
                            <div className="flex flex-col items-center gap-3 sm:gap-4">
                                <div className="flex items-center gap-2 w-full max-w-sm sm:max-w-md">
                                    <div className="flex items-center border rounded-md px-2 sm:px-3 py-2">
                                        <span className="text-xs sm:text-sm text-[#241044]">+966</span>
                                    </div>
                                    <Input
                                        type="tel"
                                        placeholder="Enter your WhatsApp number"
                                        value={phoneNumber}
                                        onChange={(e) => setPhoneNumber(e.target.value)}
                                        className="flex-1 text-sm sm:text-base"
                                    />
                                </div>
                                <Button 
                                    className="w-full max-w-sm sm:max-w-md bg-[#4F2396] hover:bg-[#4F2396] text-white text-sm sm:text-base"
                                    onClick={() => {
                                        if (phoneNumber) {
                                            const fullNumber = `+966${phoneNumber}`;
                                            window.open(`https://wa.me/${fullNumber.replace(/\D/g, '')}`, '_blank');
                                        }
                                    }}
                                    disabled={!phoneNumber}
                                >
                                    Try Hayak on WhatsApp
                                </Button>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </motion.div>
    );
};

export default TryHayak;
