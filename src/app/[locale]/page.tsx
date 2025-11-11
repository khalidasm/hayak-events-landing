import React from "react";
import Navbar from "../../components/Navbar";
import Hero from "@/sections/Hero";
import FeatureCarousel from "@/sections/FeatureCarousel";
import HayakService from "@/sections/HayakService";
import WhatsappFeature from "@/sections/WhatsappFeature";
import CheckInFeature from "@/sections/CheckInFeature";
import StatFeature from "@/sections/StatFeature";
import TryHayak from "@/sections/TryHayak";
import HayakPackages from "@/sections/HayakPackages";
import HayakNumbers from "@/sections/HayakNumbers";
import OurClients from "@/sections/OurClients";
import Testimonials from "@/sections/Testimonials";
import ContactUs from "@/sections/ContactUs";
import FAQ from "@/sections/FAQ";
import Footer from "@/components/Footer";

interface HomePageProps {
    params: Promise<{
        locale: string;
    }>;
}

export default async function HomePage({ params }: HomePageProps) {
    const { locale: localeParam } = await params;
    const locale = (localeParam as 'en' | 'ar') || 'en';

    return (
        <div className="w-full min-h-screen bg-white overflow-x-hidden">
            <Navbar locale={locale} />
            <main>
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
            </main>
            <Footer locale={locale} />  
        </div>
    );
}

