import React from "react";
import { motion } from "framer-motion";
import ContactForm from "@/components/ContactForm";

const ContactUs = () => {
    return (
        <motion.div 
            className="w-full relative px-4 sm:px-8 md:px-16 lg:px-60 py-16 sm:py-24 lg:py-32 flex flex-col gap-10"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
        >
            <motion.div 
                className="flex items-center justify-between gap-20"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            >
                <motion.div 
                    className="flex-1"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                >
                    <h1 className="text-4xl font-bold mb-4">
                        Need More <span className="text-[#4F2396]">Help?</span>
                    </h1>
                    <p className="text-xl text-[#241044]">
                        Our team is here to make your event experience smooth
                        and hassle-free. Whether you have a question about
                        tickets, need support with booking, or want tips to get
                        the most out of your event, we're always ready to help.
                    </p>
                </motion.div>
                <motion.div 
                    className="flex-1"
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
                >
                    <ContactForm />
                </motion.div>
            </motion.div>
        </motion.div>
    );
};

export default ContactUs;
