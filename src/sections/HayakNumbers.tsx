    import React, { useRef } from "react";
    import Image from "next/image";
    import { motion, useInView } from "framer-motion";
    import NumberTile from "@/components/NumberTile";

    const HayakNumbers = () => {
        const ref = useRef(null);
        const isInView = useInView(ref, { once: true, margin: "-100px" });

        return (
            <div ref={ref} className="w-full relative px-4 sm:px-8 md:px-16 lg:px-60 py-16 sm:py-24 lg:py-32 flex flex-col gap-10">
                <motion.div 
                    className="flex flex-col md:flex-row items-center justify-center md:justify-between gap-10"
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <motion.div 
                        className="flex flex-col items-center md:items-start gap-5"
                        initial={{ opacity: 0, x: -30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center">
                            Hayak In <span className="text-[#4F2396]">Numbers</span>
                        </h1>
                        <p className="w-[75%] text-xl">
                            Make guest arrivals effortless with a seamless, QR-based
                            check-in system that's fast, secure, and keeps you
                            updated in real time, ensuring smooth entry for every
                            guest while giving organizers full control
                            and peace of mind.
                        </p>
                    </motion.div>
                    <motion.div 
                        className="flex items-center justify-center md:justify-start place-items-center md:place-items-start gap-5 relative w-fit"
                        initial={{ opacity: 0, x: 30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <div className="flex flex-col items-center md:items-start justify-center gap-5 w-full md:w-auto">
                            <NumberTile imageSrc="/num_br.svg" prefix="+" value={1000} label="Events"  />
                            <NumberTile imageSrc="/num_tr.svg" prefix="+" value={1000} label="Check-in" kLabel />
                        </div>
                        <div className="flex flex-col items-center md:items-start justify-center gap-5 w-full md:w-auto">
                            <NumberTile imageSrc="/num_bl.svg" prefix="+" value={1000} label="Printed Badges" kLabel />
                            <NumberTile imageSrc="/num_tl.svg" prefix="+" value={1000} label="Sent Invitations" kLabel />
                        </div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                            transition={{ duration: 0.5, delay: 0.6 }}
                        >
                            <Image
                                src="/Logo.png"
                                alt="logo"
                                width={100}
                                height={100}
                                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                            />
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>
        );
    };

    export default HayakNumbers;
