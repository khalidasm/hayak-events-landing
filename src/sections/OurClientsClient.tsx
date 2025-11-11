"use client";

import React, { useLayoutEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const clientLogos = [
    { key: "mbsc", src: "/clients/mbsc.svg" },
    { key: "seet", src: "/clients/seet.svg" },
    { key: "starthub", src: "/clients/starthub.svg" },
    { key: "dah", src: "/clients/dah.svg" },
    { key: "designathon", src: "/clients/designathon.svg" },
    { key: "startsmart", src: "/clients/startsmart.svg" },
    { key: "taahab", src: "/clients/taahab.svg" },
    { key: "vibes", src: "/clients/vibes.svg" },
    { key: "adc", src: "/clients/adc.svg" },
    { key: "bab", src: "/clients/bab.svg" },
    { key: "backyard", src: "/clients/backyard.svg" },
    { key: "bluehorse", src: "/clients/bluehorse.svg" },
] as const;

interface OurClientsClientProps {
    locale: 'en' | 'ar';
    translations: {
        title: React.ReactNode;
        description: React.ReactNode;
        clients: {
            mbsc: string;
            seet: string;
            starthub: string;
            dah: string;
            designathon: string;
            startsmart: string;
            taahab: string;
            vibes: string;
            adc: string;
            bab: string;
            backyard: string;
            bluehorse: string;
        };
    };
}

const OurClientsClient = ({ locale, translations }: OurClientsClientProps) => {
    const isRTL = locale === 'ar';

    // Hide server-rendered section synchronously before browser paint
    useLayoutEffect(() => {
        const serverOurClients = document.querySelector('[data-server-our-clients]');
        if (serverOurClients) {
            (serverOurClients as HTMLElement).style.display = 'none';
            (serverOurClients as HTMLElement).setAttribute('aria-hidden', 'true');
        }
    }, []);

    return (
        <motion.div 
            className="w-full relative flex flex-col gap-10"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
        >
            <motion.div 
                className='bg-[url("/our_client_pattern.svg")] bg-cover bg-center bg-no-repeat rounded-[20px] py-10 px-6 xl:py-20 xl:px-10 flex flex-col items-center gap-10'
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            >
                <motion.h1 
                    className="text-2xl xl:text-4xl font-bold text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                >
                    {translations.title}
                </motion.h1>
                <motion.p 
                    className="text-base xl:text-xl text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
                >
                    {translations.description}
                </motion.p>
                
                {/* Mobile: auto-playing marquee carousel */}
                <motion.div 
                    className="relative xl:hidden w-full overflow-hidden"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
                >
                    <motion.div
                        className="flex items-center gap-6"
                        animate={{ 
                            x: isRTL ? ["0%", "50%"] : ["0%", "-50%"]
                        }}
                        transition={{ 
                            duration: 50, 
                            ease: "linear", 
                            repeat: Infinity,
                            repeatType: "loop"
                        }}
                        style={{ width: "fit-content" }}
                    >
                        <div className="flex items-center gap-6 flex-shrink-0">
                            {clientLogos.map((client) => (
                                <div key={client.key} className="flex-shrink-0 w-36 h-36 flex items-center justify-center">
                                    <Image 
                                        src={client.src} 
                                        alt={translations.clients[client.key as keyof typeof translations.clients]} 
                                        width={144} 
                                        height={144} 
                                        className="object-contain w-full h-full" 
                                        quality={85}
                                    />
                                </div>
                            ))}
                        </div>
                        <div className="flex items-center gap-6 flex-shrink-0">
                            {clientLogos.map((client) => (
                                <div key={`${client.key}-duplicate`} className="flex-shrink-0 w-36 h-36 flex items-center justify-center">
                                    <Image 
                                        src={client.src} 
                                        alt={translations.clients[client.key as keyof typeof translations.clients]} 
                                        width={144} 
                                        height={144} 
                                        className="object-contain w-full h-full" 
                                        quality={85}
                                    />
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </motion.div>

                {/* Desktop / larger screens: grid */}
                <motion.div 
                    className="hidden xl:grid xl:grid-cols-6 gap-10"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
                >
                    {clientLogos.map((client) => (
                        <div key={client.key} className="w-full aspect-square flex items-center justify-center">
                            <Image
                                src={client.src}
                                alt={translations.clients[client.key as keyof typeof translations.clients]}
                                width={150}
                                height={150}
                                className="object-contain w-full h-full"
                                loading="lazy"
                                quality={85}
                            />
                        </div>
                    ))}
                </motion.div>
            </motion.div>   
        </motion.div>
    );
};

export default OurClientsClient;

