"use client";

import React from "react";
import Navbar from "../components/Navbar";
import Hero from "@/sections/Hero";
import FeatureCarousel from "@/sections/FeatureCarousel";
import HayakService from "@/sections/HayakService";
import WhatsappFeature from "@/sections/WhatsappFeature";
import CheckInFeature from "@/sections/CheckInFeature";
import StatFeature from "@/sections/StatFeature";

const home = () => {
    return (
        <div className="w-full h-screen bg-white">
            <Navbar />
            <Hero />
            <FeatureCarousel />
            <HayakService />
            <WhatsappFeature />
            <CheckInFeature />
            <StatFeature />
        </div>
    );
};

export default home;
