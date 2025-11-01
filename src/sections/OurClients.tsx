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
                className='bg-[url("/our_client_pattern.svg")] bg-cover bg-center bg-no-repeat rounded-[20px] py-20 px-10 flex flex-col items-center gap-10'
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            >
                <motion.h1 
                    className="text-4xl font-bold text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                >
                    Our <span className="text-[#4F2396]">Clients</span>
                </motion.h1>
                <motion.p 
                    className="text-xl text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
                >
                    Hayak multiplies your event planning and exposure without <br />
                    extra logins or hassles.
                </motion.p>
                <motion.div 
                    className="grid grid-cols-6 gap-10"
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