"use client";

import React, { useRef, useLayoutEffect, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, useInView } from 'framer-motion';

interface FooterClientProps {
    locale: 'en' | 'ar';
    translations: {
        quickActions: string;
        plans: string;
        features: string;
        services: string;
        tryMe: string;
        support: string;
        faqs: string;
        contactSales: string;
        contactUs: string;
        followUs: string;
        privacyPolicy: string;
        refundPolicy: string;
        termsOfService: string;
        copyright: string;
    };
}

const FooterClient = ({ locale, translations }: FooterClientProps) => {
    const isRTL = locale === 'ar';
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    // Hide server-rendered section synchronously before browser paint
    useLayoutEffect(() => {
        const serverFooter = document.querySelector('[data-server-footer]');
        if (serverFooter) (serverFooter as HTMLElement).style.display = 'none';
    }, []);

    const pathname = usePathname();
    
    // Smooth scroll handler for anchor links on home page
    useEffect(() => {
        const isHomePage = pathname === `/${locale}` || pathname === `/${locale}/`;
        
        if (!isHomePage) {
            // If not on home page, let Next.js Link handle navigation
            return;
        }
        
        const handleSmoothScroll = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            const anchor = target.closest('a[href*="#"]') as HTMLAnchorElement;
            
            if (anchor && anchor.hash) {
                // Only handle if it's an anchor link on the same page
                const href = anchor.getAttribute('href');
                if (href && href.startsWith(`/${locale}#`)) {
                    e.preventDefault();
                    const targetId = anchor.hash.substring(1);
                    const targetElement = document.getElementById(targetId);
                    
                    if (targetElement) {
                        const offset = 80; // Offset for fixed headers if any
                        const elementPosition = targetElement.getBoundingClientRect().top;
                        const offsetPosition = elementPosition + window.pageYOffset - offset;

                        window.scrollTo({
                            top: offsetPosition,
                            behavior: 'smooth'
                        });
                    }
                }
            }
        };

        // Attach event listener to footer links
        const footer = document.querySelector('footer');
        if (footer) {
            footer.addEventListener('click', handleSmoothScroll);
        }

        return () => {
            if (footer) {
                footer.removeEventListener('click', handleSmoothScroll);
            }
        };
    }, [pathname, locale]);

    return (
        <motion.div 
            ref={ref}
            className="bg-[#4F2396] text-white rounded-[40px] px-6 xl:px-20 py-10"
            initial={{ 
                y: 100, 
                opacity: 0,
                scale: 0.9
            }}
            animate={isInView ? { 
                y: 0, 
                opacity: 1,
                scale: 1
            } : {}}
            transition={{
                type: "spring",
                stiffness: 200,
                damping: 25,
                duration: 0.8
            }}
        >
            <div className="max-w-6xl mx-auto">
                <div className={`flex flex-col xl:grid xl:grid-cols-9 gap-8 xl:gap-0 ${
                    isRTL ? "text-center xl:text-right" : "text-center xl:text-left"
                }`}>
                    {/* Logo Column */}
                    <div className='space-y-4 xl:col-span-2 flex flex-col items-center xl:items-start'>
                        <div className='flex items-center justify-center xl:justify-start'>
                            <Link href={`/${locale}`}>
                                <Image 
                                    src="/logo_white.png" 
                                    alt={isRTL ? "شعار حياك" : "Hayak logo"} 
                                    width={100} 
                                    height={100} 
                                    loading="lazy"
                                />
                            </Link>
                        </div>
                    </div>

                    {/* Quick Actions Column */}
                    <div className='space-y-4 xl:col-span-2 flex flex-col items-center xl:items-start'>
                        <h3 className="font-bold text-xl">{translations.quickActions}</h3>
                        <ul className="space-y-3">
                            <li><Link href={`/${locale}#plans`} className="hover:text-[#241044] transition-colors text-lg">{translations.plans}</Link></li>
                            <li><Link href={`/${locale}#features`} className="hover:text-[#241044] transition-colors text-lg">{translations.features}</Link></li>
                            <li><Link href={`/${locale}#services`} className="hover:text-[#241044] transition-colors text-lg">{translations.services}</Link></li>
                            <li><Link href={`/${locale}#try`} className="hover:text-[#241044] transition-colors text-lg">{translations.tryMe}</Link></li>
                        </ul>
                    </div>

                    {/* Support Column */}
                    <div className='space-y-4 xl:col-span-2 flex flex-col items-center xl:items-start'>
                        <h3 className="font-bold text-xl">{translations.support}</h3>
                        <ul className="space-y-3">
                            <li><Link href={`/${locale}#faqs`} className="hover:text-[#241044] transition-colors text-lg">{translations.faqs}</Link></li>
                            <li><Link href={`/${locale}#contact-sales`} className="hover:text-[#241044] transition-colors text-lg">{translations.contactSales}</Link></li>
                            <li><Link href={`/${locale}#contact`} className="hover:text-[#241044] transition-colors text-lg">{translations.contactUs}</Link></li>
                        </ul>
                    </div>

                    {/* Follow us Column */}
                    <div className='space-y-4 xl:col-span-3 flex flex-col items-center xl:items-start'>
                        <h3 className="font-bold text-xl">{translations.followUs}</h3>
                        <div className='flex mb-6 space-x-3 justify-center xl:justify-start'>
                            {/* TikTok */}
                            <a href="#" className="w-12 h-12 bg-white rounded-lg flex items-center justify-center hover:bg-gray-200 transition-colors" aria-label="TikTok">
                                <svg className="w-6 h-6 text-[#6B46C1]" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                                </svg>
                            </a>
                            
                            {/* X (Twitter) */}
                            <a href="#" className="w-12 h-12 bg-white rounded-lg flex items-center justify-center hover:bg-gray-200 transition-colors" aria-label="X (Twitter)">
                                <svg className="w-6 h-6 text-[#6B46C1]" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                                </svg>
                            </a>
                            
                            {/* Instagram */}
                            <a href="#" className="w-12 h-12 bg-white rounded-lg flex items-center justify-center hover:bg-gray-200 transition-colors" aria-label="Instagram">
                                <svg className="w-6 h-6 text-[#6B46C1]" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987s11.987-5.367 11.987-11.987C24.004 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.297-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.807.875 1.297 2.026 1.297 3.323s-.49 2.448-1.297 3.323c-.875.807-2.026 1.297-3.323 1.297zm7.83-9.281c-.49 0-.98-.49-.98-.98s.49-.98.98-.98.98.49.98.98-.49.98-.98.98z"/>
                                </svg>
                            </a>
                            
                            {/* LinkedIn */}
                            <a href="#" className="w-12 h-12 bg-white rounded-lg flex items-center justify-center hover:bg-gray-200 transition-colors" aria-label="LinkedIn">
                                <svg className="w-6 h-6 text-[#6B46C1]" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                                </svg>
                            </a>
                        </div>
                        
                        {/* Policy Links */}
                        <div className='flex flex-col xl:flex-row items-center xl:items-center gap-2 xl:gap-2'>
                            <Link href={`/${locale}/privacy`} className="hover:text-[#241044] transition-colors text-sm">{translations.privacyPolicy}</Link>
                            <a href="#refund" className="hover:text-[#241044] transition-colors text-sm">{translations.refundPolicy}</a>
                            <Link href={`/${locale}/terms`} className="hover:text-[#241044] transition-colors text-sm">{translations.termsOfService}</Link>
                        </div>
                        
                        {/* Copyright */}
                        <div className="pt-4">
                            <p className="text-sm">{translations.copyright}</p>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default FooterClient;

