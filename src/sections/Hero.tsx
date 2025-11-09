import React from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

const Hero = () => {
    const { scrollYProgress } = useScroll();
    const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.2]);
    const cardScale = useTransform(scrollYProgress, [0.2, 0.8], [1, 1.3]);
    return (
        <div className="w-full flex flex-col gap-3 xl:gap-5 items-center justify-center pt-24 xl:pt-32 pb-16 xl:pb-60 px-4 xl:px-60">
            <Image src="/Logo.svg" alt="Logo" width={120} height={120} />
            <h1 className="font-semibold text-2xl xl:text-[48px] text-center px-4">
                Invite your special people <br />
                <span className="text-[#4F2396]"> Seamlessly </span>
                with Us
            </h1>
            <div className="relative mt-8 xl:mt-14 w-full max-w-4xl">
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
                    className="absolute -left-20 xl:-left-55 -bottom-20 xl:-bottom-45 hidden xl:block"
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
                        src="/hero-left-card.svg"
                        alt="card-left"
                        width={400}
                        height={300}
                        className="w-[200px] xl:w-[400px] h-auto"
                    />
                </motion.div>

                <motion.div
                    className="absolute -right-20 xl:-right-55 -bottom-20 xl:-bottom-45 hidden xl:block"
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
                        src="/hero-right-card.svg"
                        alt="card-right"
                        width={400}
                        height={300}
                        className="w-[200px] xl:w-[400px] h-auto"
                    />
                </motion.div>
            </div>
        </div>
    );
};

export default Hero;
