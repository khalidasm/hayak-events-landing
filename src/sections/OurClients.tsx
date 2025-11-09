import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const OurClients = () => {
    return (
        <motion.div 
            className="w-full relative px-4 sm:px-8 md:px-16 lg:px-60 py-16 sm:py-24 lg:py-32 flex flex-col gap-10"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
        >
            <motion.div 
                className='bg-[url("/our_client_pattern.svg")] bg-cover bg-center bg-no-repeat rounded-[20px] py-10 px-6 sm:py-16 sm:px-8 lg:py-20 lg:px-10 flex flex-col items-center gap-10'
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            >
                <motion.h1 
                    className="text-2xl sm:text-3xl md:text-4xl font-bold text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                >
                    Our <span className="text-[#4F2396]">Clients</span>
                </motion.h1>
                <motion.p 
                    className="text-base sm:text-lg md:text-xl text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
                >
                    Hayak multiplies your event planning and exposure without <br />
                    extra logins or hassles.
                </motion.p>
                {/* Mobile: auto-playing marquee carousel */}
                <motion.div 
                    className="relative sm:hidden w-full overflow-hidden"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
                >
                    <motion.div
                        className="flex items-center gap-6"
                        animate={{ x: ["0%", "-100%"] }}
                        transition={{ duration: 15, ease: "linear", repeat: Infinity }}
                    >
                        <div className="flex items-center gap-6">
                            <div className="flex-shrink-0 w-36 h-36 flex items-center justify-center">
                                <Image src="/clients/mbsc.svg" alt="mbsc" width={144} height={144} className="object-contain w-full h-full" />
                            </div>
                            <div className="flex-shrink-0 w-36 h-36 flex items-center justify-center">
                                <Image src="/clients/seet.svg" alt="seet" width={144} height={144} className="object-contain w-full h-full" />
                            </div>
                            <div className="flex-shrink-0 w-36 h-36 flex items-center justify-center">
                                <Image src="/clients/starthub.svg" alt="starthub" width={144} height={144} className="object-contain w-full h-full" />
                            </div>
                            <div className="flex-shrink-0 w-36 h-36 flex items-center justify-center">
                                <Image src="/clients/dah.svg" alt="dah" width={144} height={144} className="object-contain w-full h-full" />
                            </div>
                            <div className="flex-shrink-0 w-36 h-36 flex items-center justify-center">
                                <Image src="/clients/designathon.svg" alt="designathon" width={144} height={144} className="object-contain w-full h-full" />
                            </div>
                            <div className="flex-shrink-0 w-36 h-36 flex items-center justify-center">
                                <Image src="/clients/startsmart.svg" alt="startsmart" width={144} height={144} className="object-contain w-full h-full" />
                            </div>
                            <div className="flex-shrink-0 w-36 h-36 flex items-center justify-center">
                                <Image src="/clients/taahab.svg" alt="taahab" width={144} height={144} className="object-contain w-full h-full" />
                            </div>
                            <div className="flex-shrink-0 w-36 h-36 flex items-center justify-center">
                                <Image src="/clients/vibes.svg" alt="vibes" width={144} height={144} className="object-contain w-full h-full" />
                            </div>
                            <div className="flex-shrink-0 w-36 h-36 flex items-center justify-center">
                                <Image src="/clients/adc.svg" alt="adc" width={144} height={144} className="object-contain w-full h-full" />
                            </div>
                            <div className="flex-shrink-0 w-36 h-36 flex items-center justify-center">
                                <Image src="/clients/bab.svg" alt="bab" width={144} height={144} className="object-contain w-full h-full" />
                            </div>
                            <div className="flex-shrink-0 w-36 h-36 flex items-center justify-center">
                                <Image src="/clients/backyard.svg" alt="backyard" width={144} height={144} className="object-contain w-full h-full" />
                            </div>
                            <div className="flex-shrink-0 w-36 h-36 flex items-center justify-center">
                                <Image src="/clients/bluehorse.svg" alt="bluehorse" width={144} height={144} className="object-contain w-full h-full" />
                            </div>
                        </div>
                        <div className="flex items-center gap-6">
                            <div className="flex-shrink-0 w-36 h-36 flex items-center justify-center">
                                <Image src="/clients/mbsc.svg" alt="mbsc" width={144} height={144} className="object-contain w-full h-full" />
                            </div>
                            <div className="flex-shrink-0 w-36 h-36 flex items-center justify-center">
                                <Image src="/clients/seet.svg" alt="seet" width={144} height={144} className="object-contain w-full h-full" />
                            </div>
                            <div className="flex-shrink-0 w-36 h-36 flex items-center justify-center">
                                <Image src="/clients/starthub.svg" alt="starthub" width={144} height={144} className="object-contain w-full h-full" />
                            </div>
                            <div className="flex-shrink-0 w-36 h-36 flex items-center justify-center">
                                <Image src="/clients/dah.svg" alt="dah" width={144} height={144} className="object-contain w-full h-full" />
                            </div>
                            <div className="flex-shrink-0 w-36 h-36 flex items-center justify-center">
                                <Image src="/clients/designathon.svg" alt="designathon" width={144} height={144} className="object-contain w-full h-full" />
                            </div>
                            <div className="flex-shrink-0 w-36 h-36 flex items-center justify-center">
                                <Image src="/clients/startsmart.svg" alt="startsmart" width={144} height={144} className="object-contain w-full h-full" />
                            </div>
                            <div className="flex-shrink-0 w-36 h-36 flex items-center justify-center">
                                <Image src="/clients/taahab.svg" alt="taahab" width={144} height={144} className="object-contain w-full h-full" />
                            </div>
                            <div className="flex-shrink-0 w-36 h-36 flex items-center justify-center">
                                <Image src="/clients/vibes.svg" alt="vibes" width={144} height={144} className="object-contain w-full h-full" />
                            </div>
                            <div className="flex-shrink-0 w-36 h-36 flex items-center justify-center">
                                <Image src="/clients/adc.svg" alt="adc" width={144} height={144} className="object-contain w-full h-full" />
                            </div>
                            <div className="flex-shrink-0 w-36 h-36 flex items-center justify-center">
                                <Image src="/clients/bab.svg" alt="bab" width={144} height={144} className="object-contain w-full h-full" />
                            </div>
                            <div className="flex-shrink-0 w-36 h-36 flex items-center justify-center">
                                <Image src="/clients/backyard.svg" alt="backyard" width={144} height={144} className="object-contain w-full h-full" />
                            </div>
                            <div className="flex-shrink-0 w-36 h-36 flex items-center justify-center">
                                <Image src="/clients/bluehorse.svg" alt="bluehorse" width={144} height={144} className="object-contain w-full h-full" />
                            </div>
                        </div>
                    </motion.div>
                </motion.div>

                {/* Desktop / larger screens: grid */}
                <motion.div 
                    className="hidden sm:grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 md:gap-10"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
                >
                    <div className="w-full aspect-square flex items-center justify-center">
                        <Image
                            src="/clients/mbsc.svg"
                            alt="mbsc"
                            width={150}
                            height={150}
                            className="object-contain w-full h-full"
                        />
                    </div>
                    <div className="w-full aspect-square flex items-center justify-center">
                        <Image
                            src="/clients/seet.svg"
                            alt="seet"
                            width={150}
                            height={150}
                            className="object-contain w-full h-full"
                        />
                    </div>
                    <div className="w-full aspect-square flex items-center justify-center">
                        <Image
                            src="/clients/starthub.svg"
                            alt="starthub"
                            width={150}
                            height={150}
                            className="object-contain w-full h-full"
                        />
                    </div>
                    <div className="w-full aspect-square flex items-center justify-center">
                        <Image
                            src="/clients/dah.svg"
                            alt="dah"
                            width={150}
                            height={150}
                            className="object-contain w-full h-full"
                        />
                    </div>
                    <div className="w-full aspect-square flex items-center justify-center">
                        <Image
                            src="/clients/designathon.svg"
                            alt="designathon"
                            width={150}
                            height={150}
                            className="object-contain w-full h-full"
                        />
                    </div>
                    <div className="w-full aspect-square flex items-center justify-center">
                        <Image
                            src="/clients/startsmart.svg"
                            alt="startsmart"
                            width={150}
                            height={150}
                            className="object-contain w-full h-full"
                        />
                    </div>
                    <div className="w-full aspect-square flex items-center justify-center">
                        <Image
                            src="/clients/taahab.svg"
                            alt="taahab"
                            width={150}
                            height={150}
                            className="object-contain w-full h-full"
                        />
                    </div>
                    <div className="w-full aspect-square flex items-center justify-center">
                        <Image
                            src="/clients/vibes.svg"
                            alt="vibes"
                            width={150}
                            height={150}
                            className="object-contain w-full h-full"
                        />
                    </div>
                    <div className="w-full aspect-square flex items-center justify-center">
                        <Image
                            src="/clients/adc.svg"
                            alt="adc"
                            width={150}
                            height={150}
                            className="object-contain w-full h-full"
                        />
                    </div>
                    <div className="w-full aspect-square flex items-center justify-center">
                        <Image
                            src="/clients/bab.svg"
                            alt="bab"
                            width={150}
                            height={150}
                            className="object-contain w-full h-full"
                        />
                    </div>
                    <div className="w-full aspect-square flex items-center justify-center">
                        <Image
                            src="/clients/backyard.svg"
                            alt="backyard"
                            width={150}
                            height={150}
                            className="object-contain w-full h-full"
                        />
                    </div>
                    <div className="w-full aspect-square flex items-center justify-center">
                        <Image
                            src="/clients/bluehorse.svg"
                            alt="bluehorse"
                            width={150}
                            height={150}
                            className="object-contain w-full h-full"
                        />
                    </div>
                </motion.div>
            </motion.div>   
        </motion.div>
    );
};


export default OurClients;