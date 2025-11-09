"use client";

import React from "react";
import Navbar from "../components/Navbar";
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

const home = () => {
    return (
        <div className="w-full min-h-screen bg-white overflow-x-hidden">
            <Navbar />
            <Hero />
            <FeatureCarousel />
            <HayakService />
            <WhatsappFeature />
            <CheckInFeature />
            <StatFeature />
            <TryHayak />
            <HayakPackages />
            <HayakNumbers />
            <OurClients />
            <Testimonials />
            <ContactUs />
            <FAQ />
            <Footer />  
        </div>
    );
};

export default home;
