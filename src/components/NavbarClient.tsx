"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu } from "lucide-react";
import { Button } from "./ui/button";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTrigger,
} from "./ui/sheet";
import { useRouter, usePathname } from "next/navigation";
import NavbarContent from "./NavbarContent";

interface NavbarClientProps {
    locale: 'en' | 'ar';
    translations: {
        features: string;
        services: string;
        plans: string;
        tryMe: string;
        contactUs: string;
        logIn: string;
        openMenu: string;
    };
}

const NavbarClient = ({ locale, translations }: NavbarClientProps) => {
    const [isSheetOpen, setIsSheetOpen] = useState(false);
    const [mounted, setMounted] = useState(false);
    const router = useRouter();
    const pathname = usePathname();
    const isRTL = locale === 'ar';

    useEffect(() => {
        setMounted(true);
        // Hide server-rendered navbar once client component mounts
        const serverNavbar = document.querySelector('[data-server-navbar]');
        if (serverNavbar) {
            (serverNavbar as HTMLElement).style.display = 'none';
        }
    }, []);

    const navLinks = [
        { label: translations.features, href: "#features" },
        { label: translations.services, href: "#services" },
        { label: translations.plans, href: "#plans" },
        { label: translations.tryMe, href: "#try" },
        { label: translations.contactUs, href: "#contact" },
    ];

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        const isHomePage = pathname === `/${locale}` || pathname === `/${locale}/`;
        
        if (isHomePage) {
            // If on home page, just scroll to the element
            const element = document.querySelector(href);
            if (element) {
                element.scrollIntoView({ behavior: "smooth", block: "start" });
            }
        } else {
            // If on another page, navigate to home page with anchor
            router.push(`/${locale}${href}`);
        }
        setIsSheetOpen(false);
    };

    const toggleLanguage = () => {
        const newLocale = locale === "en" ? "ar" : "en";
        // Replace locale in pathname
        const segments = pathname.split("/").filter(Boolean);
        if (segments[0] === "en" || segments[0] === "ar") {
            segments[0] = newLocale;
        } else {
            segments.unshift(newLocale);
        }
        const newPath = "/" + segments.join("/");
        router.push(newPath);
    };

    if (!mounted) {
        return null;
    }

    return (
        <motion.nav
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
            initial={{ 
                y: -100, 
                opacity: 0,
                scale: 0.8
            }}
            animate={{ 
                y: 0, 
                opacity: 1,
                scale: 1
            }}
            whileHover={{
                background: "rgba(245, 240, 255, 0.8)",
                backdropFilter: "blur(12px) saturate(200%)",
            }}
            transition={{
                type: "spring",
                stiffness: 300,
                damping: 30,
                duration: 0.6,
                delay: 0.2
            }}
        >
            <NavbarContent
                locale={locale}
                isRTL={isRTL}
                navLinks={navLinks}
                translations={translations}
                isSheetOpen={isSheetOpen}
                setIsSheetOpen={setIsSheetOpen}
                handleNavClick={handleNavClick}
                toggleLanguage={toggleLanguage}
            />
        </motion.nav>
    );
};

export default NavbarClient;

