import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import TestimonialCard from "./TestimonialCard";

interface Testimonial {
  id: string;
  testimonial: string;
  name: string;
  title: string;
  avatarSrc?: string;
  avatarFallback?: string;
}

interface TestimonialCarouselProps {
  testimonials: Testimonial[];
  cardsToShow?: number;
  autoRotateInterval?: number;
  className?: string;
  locale?: 'en' | 'ar';
}

const TestimonialCarousel: React.FC<TestimonialCarouselProps> = ({
  testimonials,
  cardsToShow = 2,
  autoRotateInterval = 4000,
  className = "",
  locale = 'en',
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = Math.ceil(testimonials.length / cardsToShow);

  // Auto-rotation effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalSlides);
    }, autoRotateInterval);

    return () => clearInterval(interval);
  }, [totalSlides, autoRotateInterval]);

  const getCurrentTestimonials = () => {
    const startIndex = currentIndex * cardsToShow;
    return testimonials.slice(startIndex, startIndex + cardsToShow);
  };

  return (
    <div className={`relative ${className}`}>
      {/* Carousel Container */}
      <div>
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="flex items-center gap-10"
          >
            {getCurrentTestimonials().map((testimonial) => (
              <div key={testimonial.id} className="flex-1">
                <TestimonialCard
                  testimonial={testimonial.testimonial}
                  name={testimonial.name}
                  title={testimonial.title}
                  avatarSrc={testimonial.avatarSrc}
                  avatarFallback={testimonial.avatarFallback}
                  locale={locale}
                />
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
