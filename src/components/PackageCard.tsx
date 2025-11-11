"use client";

import React from "react";
import Image from "next/image";
import { Button } from "./ui/button";

interface PackageItem {
    text: string;
}

interface PackageCardProps {
    title: string;
    price: number;
    items: PackageItem[];
    buttonText?: string;
    variant: "first" | "middle" | "last" | "single";
    className?: string;
    isRecommended?: boolean;
    locale?: 'en' | 'ar';
    bestDealText?: string;
}

const PackageCard: React.FC<PackageCardProps> = ({
    title,
    price,
    items,
    buttonText = "Get Started",
    variant,
    className = "",
    isRecommended = false,
    locale = 'en',
    bestDealText = "Best Deal",
}) => {
    const isRTL = locale === 'ar';
    
    const handleGetStarted = () => {
        const phoneNumber = "966543956530";
        const packageName = title;
        
        // Professional messages in both languages
        const message = isRTL
            ? `مرحباً، أود التقدم بطلب للحصول على باقة ${packageName}`
            : `Hello, I would like to request the ${packageName} package.`;
        
        const encodedMessage = encodeURIComponent(message);
        const whatsappUrl = `https://api.whatsapp.com/send/?phone=${phoneNumber}&text=${encodedMessage}`;
        
        window.open(whatsappUrl, "_blank");
    };
    
    const getVariantStyles = () => {
        const baseStyles = `flex flex-col gap-10 p-5 xl:w-[250px] w-full border-2 border-[#C8BBDE] rounded-[20px] ${
            isRecommended ? "bg-[#E5DEEF]" : "bg-[#FBF6FF]"
        }`;

        switch (variant) {
            case "first":
                return `${baseStyles} xl:border-r-0 xl:rounded-tr-none xl:rounded-br-none`;
            case "middle":
                return `${baseStyles} xl:border-x-0 xl:rounded-tr-none xl:rounded-br-none xl:rounded-tl-none xl:rounded-bl-none`;
            case "last":
                return `${baseStyles} xl:border-l-0 xl:rounded-tl-none xl:rounded-bl-none`;
            case "single":
                return baseStyles;
            default:
                return baseStyles;
        }
    };

    return (
        <div className={`${getVariantStyles()} ${className} relative`}>
            {/* Best Deal Label */}
            {isRecommended && (
                <div className="absolute -top-3.5 left-1/2 transform -translate-x-1/2 bg-[#4F2396] text-white px-4 py-1 rounded-full text-sm font-medium">
                    {bestDealText}
                </div>
            )}
            
            {/* Header Section */}
            <div className="flex flex-col items-center justify-center gap-5">
                <h3 className="text-xl font-bold text-[#241044]">{title}</h3>
                <span className="flex items-center gap-1 text-2xl font-bold text-[#241044]">
                    {price}{" "}
                        <Image
                            src="/saudi_riyal.svg"
                            alt={isRTL ? "ريال سعودي" : "Saudi Riyal"}
                            width={20}
                            height={20}
                            quality={85}
                        />
                </span>
                <Button
                    onClick={handleGetStarted}
                    className={`${
                        isRecommended
                            ? "bg-[#4F2396] text-[#fff] hover:bg-[#4F2396]/70"
                            : "bg-[#EDE9F5] text-[#4F2396] hover:bg-[#4F2396] hover:text-[#fff]"
                    } w-full`}
                >
                    {buttonText}
                </Button>
            </div>

            {/* Features List */}
            <ul className="flex flex-col gap-5 flex-1">
                {items.map((item, index) => (
                    <li key={index} className="flex items-center gap-2">
                        <Image
                            src="/package_checkbox.svg"
                            alt={isRTL ? "علامة اختيار" : "checkbox"}
                            width={20}
                            height={20}
                            quality={85}
                        />
                        <span className="text-sm text-[#241044]">{item.text}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PackageCard;
