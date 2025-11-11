import React from "react";
import HayakPackagesClient from "./HayakPackagesClient";

const translations = {
    en: {
        title: (
            <>
                Hayak <span className="text-[#4F2396]">Packages</span>
            </>
        ),
        bestDeal: "Best Deal",
        buttonText: "Get Started",
        packages: {
            basic: {
                title: "Basic",
                items: [
                    "Up to 100 guests",
                    "Invitation with QR Code",
                    "Confirmation",
                    "Customizable Text in Design",
                    "Thank-You Note After Event",
                    "Guest Support (WhatsApp)",
                    "1 Scanner on Event Day",
                    "30 Replacement Invites",
                ],
            },
            essential: {
                title: "Essential",
                items: [
                    "Up to 200 guests",
                    "Invitation with QR Code",
                    "Confirmation",
                    "Customizable Text in Design",
                    "RSVP 1 Reminder",
                    "Thank-You Note After Event",
                    "Guest Support (WhatsApp)",
                    "1 Scanner on Event Day",
                    "100 Replacement Invites",
                    "Plus-one guest per invitation",
                ],
            },
            deluxe: {
                title: "Deluxe",
                items: [
                    "Up to 250 guests",
                    "Invitation with QR Code",
                    "Confirmation",
                    "Customizable Text in Design",
                    "Custom Message Text for Invitations",
                    "RSVP 1 Reminder",
                    "Thank-You Note After Event",
                    "Guest Support (WhatsApp)",
                    "2 Scanner on Event Day",
                    "150 Replacement Invites",
                    "Plus-Two guest per invitation",
                ],
            },
            premium: {
                title: "Premium",
                items: [
                    "Up to 350 guests",
                    "Invitation with QR Code",
                    "Confirmation",
                    "Customizable Text in Design",
                    "Custom Message Text for Invitations",
                    "RSVP 2 Reminders",
                    "Thank-You Note After Event",
                    "Guest Support (WhatsApp)",
                    "Dedicated Account Manager",
                    "2 Scanner on Event Day",
                    "Data Entry Service",
                    "300 Replacement Invites",
                    "Plus-Three guest per invitation",
                ],
            },
            elite: {
                title: "Elite",
                items: [
                    "Up to 500 guests",
                    "Invitation with QR Code",
                    "Confirmation",
                    "Customizable Text in Design",
                    "Custom Message Text for Invitations",
                    "RSVP 2 Reminders",
                    "Thank-You Note After Event",
                    "Guest Support (WhatsApp)",
                    "Dedicated Account Manager",
                    "2 Scanner on Event Day",
                    "Data Entry Service",
                    "Priority Support",
                    "500 Replacement Invites",
                    "Plus-Four guest per invitation",
                ],
            },
        },
    },
    ar: {
        title: (
            <>
                خطط <span className="text-[#4F2396]">حيّاك</span> 
            </>
        ),
        bestDeal: "أفضل صفقة",
        buttonText: "أبدأ الآن",
        packages: {
            basic: {
                title: "العادية",
                items: [
                    "حتى 100 ضيف",
                    "دعوة مع رمز الاستجابة السريعة",
                    "تأكيد",
                    "نص قابل للتخصيص في التصميم",
                    "رسالة شكر بعد الحدث",
                    "دعم الضيوف (واتساب)",
                    "1 ماسح ضوئي في يوم الحدث",
                    "30 دعوة بديلة",
                ],
            },
            essential: {
                title: "الضرورية",
                items: [
                    "حتى 200 ضيف",
                    "دعوة مع رمز الاستجابة السريعة",
                    "تأكيد",
                    "نص قابل للتخصيص في التصميم",
                    "تذكير 1 RSVP",
                    "ملاحظة شكر بعد الحدث",
                    "دعم الضيوف (واتساب)",
                    "ماسح ضوئي واحد في يوم الحدث",
                    "100 دعوة بديلة",
                    "ضيف إضافي واحد لكل دعوة",
                ],
            },
            deluxe: {
                title: "الديلوكس",
                items: [
                    "حتى 250 ضيف",
                    "دعوة مع رمز الاستجابة السريعة",
                    "تأكيد",
                    "نص قابل للتخصيص في التصميم",
                    "نص رسالة مخصص للدعوات",
                    "تذكير 1 للرد",
                    "رسالة شكر بعد الحدث",
                    "دعم الضيوف (واتساب)",
                    "2 ماسح ضوئي في يوم الحدث",
                    "150 دعوة بديلة",
                    "ضيفان إضافيان لكل دعوة",
                ],
            },
            premium: {
                title: "المميزة",
                items: [
                    "حتى 350 ضيفًا",
                    "دعوة مع رمز الاستجابة السريعة",
                    "تأكيد",
                    "نص قابل للتخصيص في التصميم",
                    "نص رسالة مخصص للدعوات",
                    "تذكيرين للرد",
                    "شكرا لك بعد الحدث",
                    "دعم الضيوف (واتساب)",
                    "مدير حساب مخصص",
                    "جهازان ماسحان في يوم الحدث",
                    "خدمة إدخال البيانات",
                    "300 دعوة بديلة",
                    "ثلاثة ضيوف إضافيين لكل دعوة",
                ],
            },
            elite: {
                title: "النخبة",
                items: [
                    "حتى 500 ضيف",
                    "دعوة مع رمز الاستجابة السريعة",
                    "تأكيد",
                    "نص قابل للتخصيص في التصميم",
                    "نص رسالة مخصص للدعوات",
                    "تذكيرين للرد على الدعوة",
                    "رسالة شكر بعد الحدث",
                    "دعم الضيوف (واتساب)",
                    "مدير حساب مخصص",
                    "2 ماسح ضوئي في يوم الحدث",
                    "خدمة إدخال البيانات",
                    "دعم ذو أولوية",
                    "500 دعوة بديلة",
                    "أربعة ضيوف إضافيين لكل دعوة",
                ],
            },
        },
    },
};

interface HayakPackagesProps {
    locale: 'en' | 'ar';
}

const HayakPackages = ({ locale = 'en' }: HayakPackagesProps) => {
    const t = translations[locale];
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://hayaksa.com';

    // Product/Service structured data for SEO
    const packagesStructuredData = {
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "Event Management Platform",
        "provider": {
            "@type": "Organization",
            "name": "Hayak Events",
            "alternateName": locale === 'ar' ? "حياك" : "Hayak",
            "url": baseUrl,
        },
        "areaServed": {
            "@type": "Country",
            "name": "Saudi Arabia"
        },
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": locale === 'ar' ? "خطط حياك" : "Hayak Packages",
            "itemListElement": Object.entries(t.packages).map(([key, pkg], index) => ({
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": pkg.title,
                    "description": pkg.items.join(", ")
                },
                "position": index + 1
            }))
        }
    };

    return (
        <section id="plans" className="w-full relative px-4 xl:px-60 py-24 xl:py-48 flex flex-col gap-10">
            {/* Product/Service structured data */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(packagesStructuredData) }}
            />
            {/* Server-rendered section for SEO */}
            <div 
                data-server-hayak-packages
                className="w-full relative flex flex-col gap-10"
            >
                <h2 className="text-2xl xl:text-4xl text-center font-bold">
                    {t.title}
                </h2>
                <div className="flex flex-col items-center justify-center gap-10 p-6 rounded-[20px] xl:py-0 xl:rounded-none xl:gap-0 xl:flex-row xl:items-stretch bg-[#F9F4FF] xl:bg-transparent">
                    {/* Basic Package */}
                    <div className="flex flex-col gap-10 p-5 xl:w-[250px] w-full border-2 border-[#C8BBDE] rounded-[20px] bg-[#FBF6FF] xl:border-r-0 xl:rounded-tr-none xl:rounded-br-none">
                        <div className="flex flex-col items-center justify-center gap-5">
                            <h2 className="text-xl font-bold text-[#241044]">{t.packages.basic.title}</h2>
                            <span className="flex items-center gap-1 text-2xl font-bold text-[#241044]">
                                1200 <span className="text-[#241044]">إ</span>
                            </span>
                        </div>
                        <ul className="flex flex-col gap-5 flex-1">
                            {t.packages.basic.items.map((item, index) => (
                                <li key={index} className="flex items-center gap-2">
                                    <span className="text-sm text-[#241044]">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    {/* Essential Package */}
                    <div className="flex flex-col gap-10 p-5 xl:w-[250px] w-full border-2 border-[#C8BBDE] rounded-[20px] bg-[#FBF6FF] xl:border-x-0 xl:rounded-tr-none xl:rounded-br-none xl:rounded-tl-none xl:rounded-bl-none">
                        <div className="flex flex-col items-center justify-center gap-5">
                            <h2 className="text-xl font-bold text-[#241044]">{t.packages.essential.title}</h2>
                            <span className="flex items-center gap-1 text-2xl font-bold text-[#241044]">
                                2100 <span className="text-[#241044]">إ</span>
                            </span>
                        </div>
                        <ul className="flex flex-col gap-5 flex-1">
                            {t.packages.essential.items.map((item, index) => (
                                <li key={index} className="flex items-center gap-2">
                                    <span className="text-sm text-[#241044]">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    {/* Deluxe Package */}
                    <div className="flex flex-col gap-10 p-5 xl:w-[250px] w-full border-2 border-[#C8BBDE] rounded-[20px] bg-[#E5DEEF] xl:border-x-0 xl:rounded-tr-none xl:rounded-br-none xl:rounded-tl-none xl:rounded-bl-none relative">
                        <div className="absolute -top-3.5 left-1/2 transform -translate-x-1/2 bg-[#4F2396] text-white px-4 py-1 rounded-full text-sm font-medium">
                            {t.bestDeal}
                        </div>
                        <div className="flex flex-col items-center justify-center gap-5">
                            <h2 className="text-xl font-bold text-[#241044]">{t.packages.deluxe.title}</h2>
                            <span className="flex items-center gap-1 text-2xl font-bold text-[#241044]">
                                2900 <span className="text-[#241044]">إ</span>
                            </span>
                        </div>
                        <ul className="flex flex-col gap-5 flex-1">
                            {t.packages.deluxe.items.map((item, index) => (
                                <li key={index} className="flex items-center gap-2">
                                    <span className="text-sm text-[#241044]">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    {/* Premium Package */}
                    <div className="flex flex-col gap-10 p-5 xl:w-[250px] w-full border-2 border-[#C8BBDE] rounded-[20px] bg-[#FBF6FF] xl:border-x-0 xl:rounded-tr-none xl:rounded-br-none xl:rounded-tl-none xl:rounded-bl-none">
                        <div className="flex flex-col items-center justify-center gap-5">
                            <h2 className="text-xl font-bold text-[#241044]">{t.packages.premium.title}</h2>
                            <span className="flex items-center gap-1 text-2xl font-bold text-[#241044]">
                                3800 <span className="text-[#241044]">إ</span>
                            </span>
                        </div>
                        <ul className="flex flex-col gap-5 flex-1">
                            {t.packages.premium.items.map((item, index) => (
                                <li key={index} className="flex items-center gap-2">
                                    <span className="text-sm text-[#241044]">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    {/* Elite Package */}
                    <div className="flex flex-col gap-10 p-5 xl:w-[250px] w-full border-2 border-[#C8BBDE] rounded-[20px] bg-[#FBF6FF] xl:border-l-0 xl:rounded-tl-none xl:rounded-bl-none">
                        <div className="flex flex-col items-center justify-center gap-5">
                            <h2 className="text-xl font-bold text-[#241044]">{t.packages.elite.title}</h2>
                            <span className="flex items-center gap-1 text-2xl font-bold text-[#241044]">
                                4300 <span className="text-[#241044]">إ</span>
                            </span>
                        </div>
                        <ul className="flex flex-col gap-5 flex-1">
                            {t.packages.elite.items.map((item, index) => (
                                <li key={index} className="flex items-center gap-2">
                                    <span className="text-sm text-[#241044]">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            {/* Client component for animations */}
            <HayakPackagesClient 
                locale={locale}
                translations={t}
            />
        </section>
    );
};

export default HayakPackages;
