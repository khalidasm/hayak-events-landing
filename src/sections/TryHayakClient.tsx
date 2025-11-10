"use client";

import React, { useRef, useState, useLayoutEffect } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

interface TryHayakClientProps {
    locale: 'en' | 'ar';
    translations: {
        title: string;
        description: React.ReactNode;
        namePlaceholder: string;
        phonePlaceholder: string;
        buttonText: string;
        buttonLoading: string;
        errors: {
            nameRequired: string;
            phoneRequired: string;
            submitFailed: string;
            genericError: string;
        };
        success: string;
    };
}

const TryHayakClient = ({ locale, translations }: TryHayakClientProps) => {
    const isRTL = locale === 'ar';
    
    // Container refs
    const containerRef = useRef(null);
    const leftSectionRef = useRef(null);
    
    // State for form fields
    const [name, setName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    // Hide server-rendered section synchronously before browser paint
    useLayoutEffect(() => {
        const serverTryHayak = document.querySelector('[data-server-try-hayak]');
        if (serverTryHayak) (serverTryHayak as HTMLElement).style.display = 'none';
    }, []);

    // InView states
    const containerInView = useInView(containerRef, {
        once: true,
        margin: "-100px",
    });
    const leftSectionInView = useInView(leftSectionRef, {
        once: true,
        margin: "-100px",
    });

    // Handle form submission
    const handleSubmit = async () => {
        if (!name.trim()) {
            toast.error(translations.errors.nameRequired);
            return;
        }

        if (!phoneNumber.trim()) {
            toast.error(translations.errors.phoneRequired);
            return;
        }

        setIsLoading(true);

        try {
            // Format phone number: remove all non-digits and ensure it starts with 966
            const cleanedNumber = phoneNumber.replace(/\D/g, '');
            const formattedMobile = cleanedNumber.startsWith('966') 
                ? cleanedNumber 
                : `966${cleanedNumber}`;

            const response = await fetch('https://api.hayaksa.com/api/event/tryme/new/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    first_name: name,
                    mobile: formattedMobile,
                    lang: locale
                }),
            });

            if (!response.ok) {
                // Try to parse the error response to get the detail message
                let errorMessage = translations.errors.submitFailed;
                try {
                    const errorData = await response.json();
                    if (errorData.detail) {
                        errorMessage = errorData.detail;
                    }
                } catch {
                    // If parsing fails, use the default error message
                }
                throw new Error(errorMessage);
            }

            toast.success(translations.success);
            setName('');
            setPhoneNumber('');
        } catch (err) {
            toast.error(err instanceof Error ? err.message : translations.errors.genericError);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <motion.div
            ref={containerRef}
            initial={{ opacity: 0 }}
            animate={containerInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className='w-full xl:h-[400px] bg-[url("/try_pattern_mob.svg")] xl:bg-[url("/try_bg.svg")] bg-cover xl:bg-contain bg-center bg-no-repeat py-10 xl:py-5 flex flex-col items-center justify-center rounded-[20px] xl:rounded-none'
        >
            <div className="flex items-center justify-center gap-5 px-4 xl:px-60 w-full">
                <motion.div
                    ref={leftSectionRef}
                    initial={{ opacity: 0, x: isRTL ? 100 : -100 }}
                    animate={
                        leftSectionInView
                            ? { opacity: 1, x: 0 }
                            : { opacity: 0, x: isRTL ? 100 : -100 }
                    }
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="flex flex-col w-full xl:w-1/2"
                >
                    <div className="flex justify-center items-center gap-2 xl:gap-3">
                        <h2 className="text-2xl xl:text-4xl font-bold">{translations.title}</h2>
                        <Image
                            src="/Logo.svg"
                            className="mb-2 xl:mb-5"
                            alt={isRTL ? "شعار حياك" : "Hayak logo"}
                            width={60}
                            height={60}
                            style={{ width: '60px', height: '60px' }}
                        />
                    </div>
                    <div>
                        <p className="text-base xl:text-lg text-center mb-6 xl:mb-8">
                            {translations.description}
                        </p>
                        
                        {/* Form Inputs */}
                        <div className="flex flex-col items-center gap-3 xl:gap-4">
                            <Input
                                type="text"
                                placeholder={translations.namePlaceholder}
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="w-full max-w-sm xl:max-w-md text-sm xl:text-base shadow-none"
                                disabled={isLoading}
                                dir={isRTL ? "rtl" : "ltr"}
                            />
                            <div className={`flex items-center gap-2 w-full max-w-sm xl:max-w-md`}>
                                <div className="flex items-center border rounded-md px-2 xl:px-3 py-2">
                                    <span className="text-xs xl:text-sm text-[#241044]">+966</span>
                                </div>
                                <Input
                                    type="tel"
                                    placeholder={translations.phonePlaceholder}
                                    value={phoneNumber}
                                    onChange={(e) => setPhoneNumber(e.target.value)}
                                    className="flex-1 text-sm xl:text-base"
                                    disabled={isLoading}
                                    dir={isRTL ? "rtl" : "ltr"}
                                />
                            </div>
                            <Button 
                                className="w-full max-w-sm xl:max-w-md bg-[#4F2396] hover:bg-[#4F2396] text-white text-sm xl:text-base disabled:opacity-50"
                                onClick={handleSubmit}
                                disabled={!name.trim() || !phoneNumber.trim() || isLoading}
                            >
                                {isLoading ? translations.buttonLoading : translations.buttonText}
                            </Button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default TryHayakClient;

