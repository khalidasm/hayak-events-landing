import React from "react";
import { motion } from "framer-motion";
import TestimonialCarousel from "@/components/TestimonialCarousel";

const Testimonials = () => {
    const testimonialsData = [
        {
            id: "1",
            testimonial: "Thank you all so much for everything, everyone was talking about how great & smooth this graduation was. We appreciate all the hard and effort. Thank you.",
            name: "Mohamed Ali",
            title: "Professor at Dar Al-Hekma University",
            avatarSrc: "https://github.com/shadcn.png",
            avatarFallback: "MA"
        },
        {
            id: "2",
            testimonial: "The event management was absolutely flawless. Hayak Events made our corporate conference a huge success. Highly recommended for any professional event.",
            name: "Sarah Ahmed",
            title: "Marketing Director at TechCorp",
            avatarSrc: "https://github.com/shadcn.png",
            avatarFallback: "SA"
        },
        {
            id: "3",
            testimonial: "Outstanding service and attention to detail. Our wedding was perfect thanks to the Hayak team. They handled everything seamlessly from start to finish.",
            name: "Ahmed Hassan",
            title: "Software Engineer",
            avatarSrc: "https://github.com/shadcn.png",
            avatarFallback: "AH"
        },
        {
            id: "4",
            testimonial: "Professional, creative, and reliable. Hayak Events transformed our product launch into an unforgettable experience. The team's expertise is unmatched.",
            name: "Fatima Al-Zahra",
            title: "CEO at StartupHub",
            avatarSrc: "https://github.com/shadcn.png",
            avatarFallback: "FZ"
        }
    ];

    return (
        <motion.div 
            className="w-full relative px-4 sm:px-8 md:px-16 lg:px-60 py-16 sm:py-24 lg:py-32 flex flex-col gap-40"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
        >
            <motion.h1 
                className="text-4xl font-bold text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            >
                Testimonials
            </motion.h1>
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            >
                <TestimonialCarousel 
                    testimonials={testimonialsData}
                    cardsToShow={2}
                    autoRotateInterval={5000}
                />
            </motion.div>
        </motion.div>
    );
};

export default Testimonials;
