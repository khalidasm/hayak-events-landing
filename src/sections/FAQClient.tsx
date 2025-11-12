"use client";

import React, { useLayoutEffect } from 'react';
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQClientProps {
    locale: 'en' | 'ar';
    translations: {
        title: React.ReactNode;
        faqs: Array<{
            question: string;
            answer: string;
        }>;
    };
}

const FAQClient = ({ locale, translations }: FAQClientProps) => {
    const isRTL = locale === 'ar';

    // Hide server-rendered section synchronously before browser paint
    useLayoutEffect(() => {
        const serverFAQ = document.querySelector('[data-server-faq]');
        if (serverFAQ) {
            (serverFAQ as HTMLElement).style.display = 'none';
            (serverFAQ as HTMLElement).setAttribute('aria-hidden', 'true');
        }
    }, []);

    return (
        <motion.div 
            className="w-full relative flex flex-col gap-[var(--spacing-gap-lg)]"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
        >
            <motion.h2 
                className="text-2xl md:text-3xl lg:text-4xl xl:text-4xl font-bold mb-[var(--spacing-gap-md)] text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            >
                {translations.title}
            </motion.h2>
            
            <motion.div 
                className="bg-[#F8F6FA] rounded-2xl"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            >
                <Accordion type="single" collapsible className="w-full" dir={isRTL ? "rtl" : "ltr"}>
                    {translations.faqs.map((faq, index) => (
                        <AccordionItem 
                            key={index} 
                            value={`item-${index}`}
                            className={`bg-[#EFEBF5] border-0 ${
                                index === 0 ? 'rounded-t-lg' : index === translations.faqs.length - 1 ? 'rounded-b-lg' : ''
                            }`}
                        >
                            <AccordionTrigger className={`px-6 py-4 text-[#4A3A6B] font-semibold hover:no-underline ${
                                isRTL ? "text-right" : "text-left"
                            }`}>
                                {faq.question}
                            </AccordionTrigger>
                            <AccordionContent className={`px-6 p-4 text-[#241044] bg-[#F8F6FA] rounded-b-lg ${
                                isRTL ? "text-right" : "text-left"
                            }`}>
                                {faq.answer}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </motion.div>
        </motion.div>
    );
};

export default FAQClient;

