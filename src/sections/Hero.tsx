import React from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

const Hero = () => {
    const { scrollYProgress } = useScroll();
    const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.2]);
    const cardScale = useTransform(scrollYProgress, [0.2, 0.8], [1, 1.3]);
    return (
        <div className="w-full flex flex-col gap-3 sm:gap-5 items-center justify-center pt-16 sm:pt-24 lg:pt-32 pb-16 sm:pb-24 lg:pb-32 px-4 sm:px-8 md:px-16 lg:px-60">
            <Image src="/Logo.svg" alt="Logo" width={120} height={120} />
            <h1 className="font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-[48px] text-center px-4">
                Invite your special people <br />
                <span className="text-[#4F2396]"> Seamlessly </span>
                with Us
            </h1>
            <div className="relative mt-8 sm:mt-14 w-full max-w-4xl">
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    style={{ scale }}
                    className="w-full"
                >
                    <Image
                        src="/hero.svg"
                        alt="hero"
                        width={1000}
                        height={1000}
                        className="w-full h-auto"
                    />
                </motion.div>

                <motion.div
                    className="absolute -left-20 sm:-left-55 -bottom-20 sm:-bottom-45 hidden sm:block"
                    style={{ scale: cardScale }}
                    initial={{ x: -100, opacity: 0 }}
                    animate={{
                        x: 0,
                        opacity: 1,
                        y: [0, -10, 0],
                    }}
                    transition={{
                        duration: 0.8,
                        delay: 0.3,
                        y: {
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut",
                        },
                    }}
                >
                    <Image
                        src="/hero-card-left.svg"
                        alt="card-left"
                        width={400}
                        height={300}
                        className="w-[200px] sm:w-[400px] h-auto"
                    />
                </motion.div>

                <motion.div
                    className="absolute -right-20 sm:-right-55 -bottom-20 sm:-bottom-45 hidden sm:block"
                    style={{ scale: cardScale }}
                    initial={{ x: 100, opacity: 0 }}
                    animate={{
                        x: 0,
                        opacity: 1,
                        y: [0, -10, 0],
                    }}
                    transition={{
                        duration: 0.8,
                        delay: 0.5,
                        y: {
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut",
                        },
                    }}
                >
                    <Image
                        src="/hero-card-right.svg"
                        alt="card-right"
                        width={400}
                        height={300}
                        className="w-[200px] sm:w-[400px] h-auto"
                    />
                </motion.div>
            </div>
        </div>
    );
};

export default Hero;
