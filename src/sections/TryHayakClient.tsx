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
            phoneInvalid: string;
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
    const [phoneError, setPhoneError] = useState("");

    // Hide server-rendered section synchronously before browser paint
    useLayoutEffect(() => {
        const serverTryHayak = document.querySelector('[data-server-try-hayak]');
        if (serverTryHayak) {
            (serverTryHayak as HTMLElement).style.display = 'none';
            (serverTryHayak as HTMLElement).setAttribute('aria-hidden', 'true');
        }
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

    // Validate phone number
    const validatePhoneNumber = (phone: string): string | null => {
        if (!phone.trim()) {
            return translations.errors.phoneRequired;
        }

        // Remove any non-digit characters
        const digitsOnly = phone.replace(/\D/g, '');
        
        // Saudi Arabia: must be 9 digits starting with 5
        if (digitsOnly.length !== 9 || !/^5[0-9]{8}$/.test(digitsOnly)) {
            return translations.errors.phoneInvalid;
        }

        return null;
    };

    // Handle phone number change
    const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setPhoneNumber(value);
        // Validate and clear error if phone becomes valid
        if (phoneError) {
            const error = validatePhoneNumber(value);
            setPhoneError(error || "");
        }
    };

    // Handle phone number blur (validate on blur)
    const handlePhoneBlur = () => {
        if (phoneNumber.trim()) {
            const error = validatePhoneNumber(phoneNumber);
            setPhoneError(error || "");
        }
    };

    // Handle form submission
    const handleSubmit = async () => {
        if (!name.trim()) {
            toast.error(translations.errors.nameRequired);
            return;
        }

        const phoneValidationError = validatePhoneNumber(phoneNumber);
        if (phoneValidationError) {
            setPhoneError(phoneValidationError);
            toast.error(phoneValidationError);
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
            setPhoneError('');
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
                        <div className="text-2xl xl:text-4xl font-bold">{translations.title}</div>
                        <Image
                            src="/Logo.svg"
                            className="mb-2 xl:mb-5"
                            alt={isRTL ? "شعار حياك" : "Hayak logo"}
                            width={100}
                            height={100}
                            style={{ width: '100px', height: '100px' }}
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
                            <div className="w-full max-w-sm xl:max-w-md">
                                <div className={`flex items-center gap-2`}>
                                    <div className="flex items-center border rounded-md px-2 xl:px-3 py-2">
                                        <span className="text-xs xl:text-sm text-[#241044]">+966</span>
                                    </div>
                                    <Input
                                        type="tel"
                                        placeholder={translations.phonePlaceholder}
                                        value={phoneNumber}
                                        onChange={handlePhoneChange}
                                        onBlur={handlePhoneBlur}
                                        className={`flex-1 text-sm xl:text-base ${phoneError ? "border-red-500" : ""}`}
                                        disabled={isLoading}
                                        dir={isRTL ? "rtl" : "ltr"}
                                    />
                                </div>
                                {phoneError && (
                                    <p className={`text-red-500 text-xs mt-1 ${
                                        isRTL ? "text-right" : "text-left"
                                    }`}>{phoneError}</p>
                                )}
                            </div>
                            <Button 
                                className="w-full max-w-sm xl:max-w-md bg-[#4F2396] hover:bg-[#4F2396] text-white text-sm xl:text-base disabled:opacity-50"
                                onClick={handleSubmit}
                                disabled={!name.trim() || !phoneNumber.trim() || !!phoneError || isLoading}
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

