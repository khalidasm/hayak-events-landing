"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "./ui/button";

const Navbar = () => {
    const navLinks = [
        { label: "Features", href: "#features" },
        { label: "Services", href: "#services" },
        { label: "Plans", href: "#plans" },
        { label: "Try me", href: "#try" },
        { label: "Contact us", href: "#contact" },
    ];

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    return (
        <motion.nav
            className="fixed left-4 right-4 top-0 z-50 mt-4 xl:mt-7 xl:left-1/2 xl:right-auto xl:-translate-x-1/2 flex w-auto xl:w-11/12 xl:max-w-7xl flex-col items-center rounded-full p-2 xl:p-3 overflow-hidden"
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
            <div className="flex w-full items-center justify-between min-w-0 gap-2 xl:gap-4">
                {/* Logo */}
                <div className="flex items-center gap-2 xl:gap-3 flex-shrink-0">
                    <Image 
                        src="/Logo.svg" 
                        alt="Logo" 
                        width={50} 
                        height={50} 
                        className="ml-2 xl:ml-3 flex-shrink-0" 
                    />
                    
                    {/* Language Button */}
                    <Button
                        variant="outline"
                        size="sm"
                        className="h-8 px-3 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-700 border-gray-200 text-xs xl:text-sm font-medium"
                    >
                        AR
                    </Button>
                </div>

                {/* Navigation Links - Hidden on mobile, visible on desktop */}
                <nav className="hidden xl:flex items-center gap-4 xl:gap-6 flex-1 justify-center">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            onClick={(e) => handleNavClick(e, link.href)}
                            className="text-gray-700 hover:text-[#241044] transition-colors text-sm xl:text-base whitespace-nowrap"
                        >
                            {link.label}
                        </Link>
                    ))}
                </nav>

                {/* Log in Button */}
                <Button
                    className="bg-[#4F2396] hover:bg-[#241044]/90 text-white rounded-full hidden xl:block px-10 h-8 xl:h-9 text-xs xl:text-sm font-medium flex-shrink-0 mr-2 xl:mr-3"
                >
                    Log in
                </Button>
            </div>
        </motion.nav>
    );
};

export default Navbar;
