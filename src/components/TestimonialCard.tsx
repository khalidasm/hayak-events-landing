import React from "react";
import Image from "next/image";

interface TestimonialCardProps {
    testimonial: string;
    name: string;
    title: string;
    avatarSrc?: string;
    avatarFallback?: string;
    className?: string;
    locale?: 'en' | 'ar';
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
    testimonial,
    name,
    title,
    avatarSrc,
    avatarFallback = "CN",
    className = "",
    locale = 'en',
}) => {
    const isRTL = locale === 'ar';
    
    return (
        <div
            className={`bg-[#FBF6FF] rounded-[20px] w-full p-10 pt-16 relative flex flex-col items-start gap-5 ${className}`}
        >
            <p className={`text-[#241044] leading-relaxed ${
                isRTL ? "text-right" : "text-left"
            }`}>{testimonial}</p>
            <div className={`flex flex-col items-start gap-1 ${
                isRTL ? "items-end" : ""
            }`}>
                <span className="text-lg font-bold text-[#4F2396]">{name}</span>
                <span className="text-[#B3B6B9]">{title}</span>
            </div>
            <div className={`absolute -top-16 ${isRTL ? "right-10" : "left-10"} w-28 h-28 border-4 border-[#4F2396] bg-[#4F2396] rounded-full flex items-center justify-center`}>
                <Image
                    src="/logo_white.webp"
                    alt={isRTL ? "شعار حياك" : "Hayak logo"}
                    width={80}
                    height={80}
                    className="object-contain p-2"
                    quality={85}
                />
            </div>
            <Image
                src="/qoute.svg"
                alt={isRTL ? "رمز اقتباس" : "quote icon"}
                width={100}
                height={100}
                className={`absolute bottom-5 ${isRTL ? "left-5" : "right-5"} hidden xl:block`}
                quality={85}
            />
            <Image
                src="/qoute.svg"
                alt={isRTL ? "رمز اقتباس" : "quote icon"}
                width={50}
                height={50}
                className={`absolute bottom-5 ${isRTL ? "left-5" : "right-5"} block xl:hidden`}
                quality={85}
            />
        </div>
    );
};

export default TestimonialCard;
