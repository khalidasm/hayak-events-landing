"use client";

import React, { useEffect, useState, useLayoutEffect } from "react";
import { motion } from "framer-motion";
import TestimonialCarousel from "@/components/TestimonialCarousel";

interface TestimonialsClientProps {
    locale: 'en' | 'ar';
    translations: {
        title: string | React.ReactNode;
        testimonials: Array<{
            id: string;
            testimonial: string;
            name: string;
            title: string;
        }>;
    };
}

const TestimonialsClient = ({ locale, translations }: TestimonialsClientProps) => {
    const [cardsToShow, setCardsToShow] = useState(1);

    // Hide server-rendered section synchronously before browser paint
    useLayoutEffect(() => {
        const serverTestimonials = document.querySelector('[data-server-testimonials]');
        if (serverTestimonials) {
            (serverTestimonials as HTMLElement).style.display = 'none';
            (serverTestimonials as HTMLElement).setAttribute('aria-hidden', 'true');
        }
    }, []);

    useEffect(() => {
        const computeCardsToShow = () => {
            if (window.innerWidth >= 1280) {
                setCardsToShow(2);
            } else {
                setCardsToShow(1);
            }
        };
        computeCardsToShow();
        window.addEventListener("resize", computeCardsToShow);
        return () => window.removeEventListener("resize", computeCardsToShow);
    }, []);

    // Prepare testimonials data (no avatar image, will use logo)
    const testimonialsData = translations.testimonials.map((testimonial) => ({
        ...testimonial,
        avatarSrc: undefined, // No avatar image, will use Hayak logo
        avatarFallback: undefined, // Not needed, logo will be shown
    }));

    return (
        <motion.div 
            className="w-full relative flex flex-col gap-24 xl:gap-40"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
        >
            <motion.h1 
                className="text-2xl xl:text-4xl font-semibold text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            >
                {translations.title}
            </motion.h1>
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            >
                <TestimonialCarousel 
                    testimonials={testimonialsData}
                    cardsToShow={cardsToShow}
                    autoRotateInterval={5000}
                    locale={locale}
                />
            </motion.div>
        </motion.div>
    );
};

export default TestimonialsClient;

