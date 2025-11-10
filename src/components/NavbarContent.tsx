"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "./ui/button";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTrigger,
} from "./ui/sheet";

interface NavbarContentProps {
    locale: 'en' | 'ar';
    isRTL: boolean;
    navLinks: Array<{ label: string; href: string }>;
    translations: {
        logIn: string;
        openMenu: string;
    };
    isSheetOpen: boolean;
    setIsSheetOpen: (open: boolean) => void;
    handleNavClick: (e: React.MouseEvent<HTMLAnchorElement>, href: string) => void;
    toggleLanguage: () => void;
}

const NavbarContent = ({
    locale,
    isRTL,
    navLinks,
    translations,
    isSheetOpen,
    setIsSheetOpen,
    handleNavClick,
    toggleLanguage,
}: NavbarContentProps) => {
    return (
        <div className="flex w-full items-center justify-between min-w-0 gap-2 xl:gap-4">
            {/* Logo */}
            <div className='flex items-center gap-2 xl:gap-3 flex-shrink-0'>
                <Image 
                    src="/Logo.svg" 
                    alt={isRTL ? "شعار حياك" : "Hayak Events logo"} 
                    width={50} 
                    height={50} 
                    className={`flex-shrink-0 ${isRTL ? "mr-2 xl:mr-3" : "ml-2 xl:ml-3"}`}
                />
                
                {/* Language Button */}
                <Button
                    variant="outline"
                    size="sm"
                    onClick={toggleLanguage}
                    className="hidden xl:block h-8 px-3 bg-[#4F2396]/20 text-[#3B1A71] hover:bg-[#4F2396]/30 text-xs xl:text-sm font-medium rounded-full"
                >
                    {locale === "en" ? "AR" : "EN"}
                </Button>
            </div>

            {/* Navigation Links - Hidden on mobile, visible on desktop */}
            <nav className="hidden xl:flex items-center gap-4 xl:gap-6 flex-1 justify-center">
                {navLinks.map((link) => (
                    <Link
                        key={link.href}
                        href={`/${locale}${link.href}`}
                        onClick={(e) => handleNavClick(e, link.href)}
                        className="text-gray-700 hover:text-[#241044] transition-colors text-sm xl:text-base whitespace-nowrap"
                    >
                        {link.label}
                    </Link>
                ))}
            </nav>

            {/* Mobile Menu Button */}
            <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
                <SheetTrigger asChild>
                    <Button
                        variant="ghost"
                        size="icon"
                        className={`xl:hidden h-10 w-10 rounded-full ${isRTL ? "ml-2" : "mr-2"}`}
                    >
                        <Menu className="h-6 w-6 text-gray-700" />
                        <span className="sr-only">{translations.openMenu}</span>
                    </Button>
                </SheetTrigger>
                <SheetContent side={isRTL ? "left" : "right"} className="w-[300px] sm:w-[400px] p-0">
                    <SheetHeader className="px-6 pt-6 pb-4 border-b">
                        <div className="flex items-center justify-center mb-4">
                            <Image 
                                src="/Logo.svg" 
                                alt={isRTL ? "شعار حياك" : "Hayak Events logo"} 
                                width={100} 
                                height={100} 
                                className="flex-shrink-0" 
                            />
                        </div>
                    </SheetHeader>
                    <div className="flex flex-col gap-2 px-6 py-6">
                        {/* Navigation Links */}
                        <nav className="flex flex-col gap-2">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={`/${locale}${link.href}`}
                                    onClick={(e) => handleNavClick(e, link.href)}
                                    className="text-gray-700 hover:text-[#241044] transition-colors text-base font-medium py-3 px-2 rounded-lg hover:bg-gray-50"
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </nav>
                        
                        {/* Language Button */}
                        <div className={`flex gap-2 w-full items-center ${isRTL ? "flex-row-reverse" : ""}`}>
                            <div className="pt-4 pb-2 w-[25%]">
                                <Button
                                    variant="outline"
                                    size="sm"
                                    onClick={toggleLanguage}
                                    className="w-full h-10 rounded-full bg-[#4F2396]/20 text-[#3B1A71] hover:bg-[#4F2396]/30 text-sm font-medium"
                                >
                                    {locale === "en" ? "AR" : "EN"}
                                </Button>
                            </div>
                            
                            {/* Log in Button */}
                            <Button
                                onClick={() => {
                                    setIsSheetOpen(false);
                                    window.open("https://app.hayaksa.com/", "_blank");
                                }}
                                className="bg-[#4F2396] hover:bg-[#241044]/90 text-white rounded-full flex-1 h-10 text-sm font-medium mt-2"
                            >
                                {translations.logIn}
                            </Button>
                        </div>
                    </div>
                </SheetContent>
            </Sheet>

            {/* Log in Button - Desktop */}
            <Button
                onClick={() => {
                    window.open("https://app.hayaksa.com", "_blank");
                }}
                className={`bg-[#4F2396] hover:bg-[#241044]/90 text-white rounded-full hidden xl:block px-10 h-8 xl:h-9 text-xs xl:text-sm font-medium flex-shrink-0 ${
                    isRTL ? "ml-2 xl:ml-3" : "mr-2 xl:mr-3"
                }`}
            >
                {translations.logIn}
            </Button>
        </div>
    );
};

export default NavbarContent;

