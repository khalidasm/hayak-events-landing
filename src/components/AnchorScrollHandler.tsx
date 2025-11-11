"use client";

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function AnchorScrollHandler() {
    const pathname = usePathname();

    useEffect(() => {
        // Wait for page to fully load
        const timer = setTimeout(() => {
            const hash = window.location.hash;
            if (hash) {
                const targetId = hash.substring(1);
                const targetElement = document.getElementById(targetId);
                
                if (targetElement) {
                    const offset = 100; // Offset for fixed navbar
                    const elementPosition = targetElement.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - offset;

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        }, 100);

        return () => clearTimeout(timer);
    }, [pathname]);

    return null;
}

