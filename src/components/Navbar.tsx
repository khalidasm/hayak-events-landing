import React from "react";
import Image from "next/image";
import Link from "next/link";
import NavbarClient from "./NavbarClient";

const translations = {
    en: {
        features: "Features",
        services: "Services",
        plans: "Plans",
        tryMe: "Try me",
        contactUs: "Contact us",
        logIn: "Log in",
        openMenu: "Open menu",
    },
    ar: {
        features: "الميزات",
        services: "الخدمات",
        plans: "الخطط",
        tryMe: "جربني",
        contactUs: "تواصل معنا",
        logIn: "تسجيل الدخول",
        openMenu: "فتح القائمة",
    },
};

interface NavbarProps {
    locale: 'en' | 'ar';
}

const Navbar = ({ locale = 'en' }: NavbarProps) => {
    const t = translations[locale];
    const isRTL = locale === 'ar';

    const navLinks = [
        { label: t.features, href: "#features" },
        { label: t.services, href: "#services" },
        { label: t.plans, href: "#plans" },
        { label: t.tryMe, href: "#try" },
        { label: t.contactUs, href: "#contact" },
    ];

    return (
        <>
            {/* Server-rendered navigation for SEO */}
            <nav
                className={`fixed top-0 z-50 mt-4 xl:mt-7 flex w-auto xl:w-11/12 xl:max-w-7xl flex-col items-center rounded-full p-2 xl:p-3 overflow-hidden ${
                    isRTL 
                        ? "left-4 right-4 xl:left-1/2 xl:right-auto xl:-translate-x-1/2" 
                        : "left-4 right-4 xl:left-1/2 xl:right-auto xl:-translate-x-1/2"
                }`}
                style={{
                    background: "rgba(245, 240, 255, 0.7)",
                    backdropFilter: "blur(4px) saturate(180%)",
                    border: "1px solid rgba(255,255,255,0.3)",
                    borderTop: "1px solid rgba(255,255,255,0.6)",
                    borderLeft: "1px solid rgba(255,255,255,0.4)",
                }}
                data-server-navbar
            >
                <div className="flex w-full items-center justify-between min-w-0 gap-2 xl:gap-4">
                    {/* Logo */}
                    <div className={`flex items-center gap-2 xl:gap-3 flex-shrink-0 ${isRTL ? "flex-row-reverse" : ""}`}>
                        <Link href={`/${locale}`}>
                            <Image 
                                src="/Logo.png" 
                                alt={isRTL ? "شعار حياك" : "Hayak Events logo"} 
                                width={50} 
                                height={50} 
                                className={`flex-shrink-0 ${isRTL ? "mr-2" : "ml-2"}`}
                                loading="lazy"
                            />
                        </Link>
                    </div>

                    {/* Navigation Links - Server-rendered for SEO */}
                    <nav className="hidden xl:flex items-center gap-4 xl:gap-6 flex-1 justify-center">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={`/${locale}${link.href}`}
                                className="text-gray-700 hover:text-[#241044] transition-colors text-sm xl:text-base whitespace-nowrap"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </nav>

                    {/* Log in Button - Desktop - Server-rendered */}
                    <Link
                        href="https://app.hayaksa.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`bg-[#4F2396] hover:bg-[#241044]/90 text-white rounded-full hidden xl:block px-10 h-8 xl:h-9 text-xs xl:text-sm font-medium flex-shrink-0 text-center ${
                            isRTL ? "ml-2 xl:ml-3" : "mr-2 xl:mr-3"
                        }`}
                    >
                        {t.logIn}
                    </Link>
                </div>
            </nav>

            {/* Client component for interactivity and animations */}
            <NavbarClient locale={locale} translations={t} />
        </>
    );
};

export default Navbar;
