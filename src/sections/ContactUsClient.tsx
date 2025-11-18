"use client";

import React, { useLayoutEffect } from "react";
import { motion } from "framer-motion";
import ContactForm from "@/components/ContactForm";

interface ContactUsClientProps {
    locale: 'en' | 'ar';
    translations: {
        title: React.ReactNode;
        description: React.ReactNode;
    };
}

const ContactUsClient = ({ locale, translations }: ContactUsClientProps) => {
    const isRTL = locale === 'ar';

    // Hide server-rendered section synchronously before browser paint
    useLayoutEffect(() => {
        const serverContactUs = document.querySelector('[data-server-contact-us]');
        if (serverContactUs) {
            (serverContactUs as HTMLElement).style.display = 'none';
            (serverContactUs as HTMLElement).setAttribute('aria-hidden', 'true');
        }
    }, []);

    return (
        <motion.div 
            className="w-full relative flex flex-col gap-12"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
        >
            <motion.div 
                className={`flex flex-col ${isRTL ? 'xl:flex-row-reverse' : 'xl:flex-row'} items-center xl:items-center justify-between gap-10 xl:gap-20`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            >
                <motion.div 
                    className={`flex-1 w-full ${
                        isRTL ? "xl:order-2" : ""
                    }`}
                    initial={{ opacity: 0, x: isRTL ? 30 : -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                >
                    <div className={`text-2xl md:text-3xl lg:text-3xl xl:text-4xl font-semibold mb-[var(--spacing-gap-sm)] xl:mb-[var(--spacing-gap-md)] ${
                        isRTL ? "text-center xl:text-right" : "text-center xl:text-left"
                    }`}>
                        {translations.title}
                    </div>
                    <p className={`text-base md:text-lg lg:text-lg xl:text-xl text-[#241044] ${
                        isRTL ? "text-center xl:text-right" : "text-center xl:text-left"
                    }`}>
                        {translations.description}
                    </p>
                </motion.div>
                <motion.div 
                    className={`flex-1 w-full ${
                        isRTL ? "xl:order-1" : ""
                    }`}
                    initial={{ opacity: 0, x: isRTL ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
                >
                    <ContactForm locale={locale} />
                </motion.div>
            </motion.div>
        </motion.div>
    );
};

export default ContactUsClient;

