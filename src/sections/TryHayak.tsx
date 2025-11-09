import React, { useRef, useState } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const TryHayak = () => {
    // Container refs
    const containerRef = useRef(null);
    const leftSectionRef = useRef(null);
    const rightSectionRef = useRef(null);
    
    // State for form fields
    const [name, setName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    // InView states
    const containerInView = useInView(containerRef, {
        once: true,
        margin: "-100px",
    });
    const leftSectionInView = useInView(leftSectionRef, {
        once: true,
        margin: "-100px",
    });
    const rightSectionInView = useInView(rightSectionRef, {
        once: true,
        margin: "-100px",
    });

    // Handle form submission
    const handleSubmit = async () => {
        if (!name.trim()) {
            toast.error("Please enter your name");
            return;
        }

        if (!phoneNumber.trim()) {
            toast.error("Please enter your WhatsApp number");
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
                    lang: 'en'
                }),
            });

            if (!response.ok) {
                // Try to parse the error response to get the detail message
                let errorMessage = 'Failed to submit. Please try again.';
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

            toast.success("Success! You'll receive a WhatsApp message from Hayak soon.");
            setName('');
            setPhoneNumber('');
        } catch (err) {
            toast.error(err instanceof Error ? err.message : 'An error occurred. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <motion.div
            id="try"
            ref={containerRef}
            initial={{ opacity: 0 }}
            animate={containerInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full px-4 xl:px-60 py-16 xl:py-32"
        >
            <div className='w-full xl:h-[400px] bg-[url("/try_pattern_mob.svg")] xl:bg-[url("/try_bg.svg")] bg-cover xl:bg-contain bg-center bg-no-repeat py-10 xl:py-5 flex flex-col items-center justify-center rounded-[20px] xl:rounded-none'>
                <div className="flex items-center justify-center gap-5 px-4 xl:px-60 w-full">
                    <motion.div
                        ref={leftSectionRef}
                        initial={{ opacity: 0, x: -100 }}
                        animate={
                            leftSectionInView
                                ? { opacity: 1, x: 0 }
                                : { opacity: 0, x: -100 }
                        }
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="flex flex-col w-full xl:w-1/2"
                    >
                        <div className="flex justify-center items-center gap-2 xl:gap-3">
                            <h1 className="text-2xl xl:text-4xl font-bold">Try</h1>
                            <Image
                                src="/Logo.svg"
                                className="mb-2 xl:mb-5"
                                alt="whatsapp_feature_pattern"
                                width={60}
                                height={60}
                                style={{ width: '60px', height: '60px' }}
                            />
                        </div>
                        <div>
                            <p className="text-base xl:text-lg text-center mb-6 xl:mb-8">
                                Discover how easy event management can be. Try
                                Hayak now and explore the seamless invitation
                                experience for yourself.
                            </p>
                            
                            {/* Form Inputs */}
                            <div className="flex flex-col items-center gap-3 xl:gap-4">
                                <Input
                                    type="text"
                                    placeholder="Enter your name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className="w-full max-w-sm xl:max-w-md text-sm xl:text-base shadow-none"
                                    disabled={isLoading}
                                />
                                <div className="flex items-center gap-2 w-full max-w-sm xl:max-w-md">
                                    <div className="flex items-center border rounded-md px-2 xl:px-3 py-2">
                                        <span className="text-xs xl:text-sm text-[#241044]">+966</span>
                                    </div>
                                    <Input
                                        type="tel"
                                        placeholder="Enter your WhatsApp number"
                                        value={phoneNumber}
                                        onChange={(e) => setPhoneNumber(e.target.value)}
                                        className="flex-1 text-sm xl:text-base"
                                        disabled={isLoading}
                                    />
                                </div>
                                <Button 
                                    className="w-full max-w-sm xl:max-w-md bg-[#4F2396] hover:bg-[#4F2396] text-white text-sm xl:text-base disabled:opacity-50"
                                    onClick={handleSubmit}
                                    disabled={!name.trim() || !phoneNumber.trim() || isLoading}
                                >
                                    {isLoading ? 'Sending...' : 'Try Hayak on WhatsApp'}
                                </Button>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </motion.div>
    );
};

export default TryHayak;
