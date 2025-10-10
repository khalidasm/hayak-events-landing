import React from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

const Hero = () => {
    const { scrollYProgress } = useScroll();
    const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.2]);
    const cardScale = useTransform(scrollYProgress, [0.2, 0.8], [1, 1.3]);
    return (
        <div className="w-full flex flex-col gap-5 items-center justify-center mt-20">
            <Image src="/logo.png" alt="Logo" width={200} height={200} />
            <h1 className="font-semibold text-[48px] text-center">
                Recruit The Right People <br /> The Smart{" "}
                <span className="text-[#4F2396]">Way!</span>
            </h1>
            <div className="relative mt-14">
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    style={{ scale }}
                >
                    <Image
                        src="/hero.svg"
                        alt="hero"
                        width={1000}
                        height={1000}
                    />
                </motion.div>

                <motion.div
                    className="absolute -left-55 -bottom-45"
                    style={{ scale: cardScale }}
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                >
                    <Image
                        src="/hero-card-left.svg"
                        alt="card-left"
                        width={400}
                        height={300}
                    />
                </motion.div>

                <motion.div
                    className="absolute -right-55 -bottom-45"
                    style={{ scale: cardScale }}
                    initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                >
                    <Image
                        src="/hero-card-right.svg"
                        alt="card-right"
                        width={400}
                        height={300}
                    />
                </motion.div>
            </div>
        </div>
    );
};

export default Hero;
