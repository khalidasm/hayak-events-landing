import React from "react";
import dynamic from "next/dynamic";
import Hero from "@/sections/Hero";
import FeatureCarousel from "@/sections/FeatureCarousel";
import HayakService from "@/sections/HayakService";
import StatFeature from "@/sections/StatFeature";

// Lazy load below-the-fold components to improve initial load
const WhatsappFeature = dynamic(() => import("@/sections/WhatsappFeature"), {
  loading: () => <div className="min-h-[400px]" />,
});
const CheckInFeature = dynamic(() => import("@/sections/CheckInFeature"), {
  loading: () => <div className="min-h-[400px]" />,
});
const TryHayak = dynamic(() => import("@/sections/TryHayak"), {
  loading: () => <div className="min-h-[400px]" />,
});
const HayakPackages = dynamic(() => import("@/sections/HayakPackages"), {
  loading: () => <div className="min-h-[400px]" />,
});
const HayakNumbers = dynamic(() => import("@/sections/HayakNumbers"), {
  loading: () => <div className="min-h-[400px]" />,
});
const OurClients = dynamic(() => import("@/sections/OurClients"), {
  loading: () => <div className="min-h-[400px]" />,
});
const Testimonials = dynamic(() => import("@/sections/Testimonials"), {
  loading: () => <div className="min-h-[400px]" />,
});
const ContactUs = dynamic(() => import("@/sections/ContactUs"), {
  loading: () => <div className="min-h-[400px]" />,
});
const FAQ = dynamic(() => import("@/sections/FAQ"), {
  loading: () => <div className="min-h-[400px]" />,
});

interface HomePageProps {
    params: Promise<{
        locale: string;
    }>;
}

export default async function HomePage({ params }: HomePageProps) {
    const { locale: localeParam } = await params;
    const locale = (localeParam as 'en' | 'ar') || 'en';

    return (
        <>
            <Hero locale={locale} />
            <section id="features" aria-label={locale === 'ar' ? 'الميزات' : 'Features'}>
                <FeatureCarousel locale={locale} />
            </section>
            <section id="services" aria-label={locale === 'ar' ? 'الخدمات' : 'Services'}>
                <HayakService locale={locale} />
            </section>
            <WhatsappFeature locale={locale} />
            <CheckInFeature locale={locale} />
            <StatFeature locale={locale} />
            <TryHayak locale={locale} />
            <HayakPackages locale={locale} />
            <HayakNumbers locale={locale} />
            <OurClients locale={locale} />
            <Testimonials locale={locale} />
            <ContactUs locale={locale} />
            <FAQ locale={locale} />
        </>
    );
}

