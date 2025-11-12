import React from "react";
import Image from "next/image";
import HayakNumbersClient from "./HayakNumbersClient";

const translations = {
    en: {
        title: (
            <>
                Hayak In <span className="text-[#4F2396]">Numbers</span>
            </>
        ),
        description: (
            <>
                Make guest arrivals effortless with a seamless, QR-based
                check-in system that's fast, secure, and keeps you
                updated in real time, ensuring smooth entry for every
                guest while giving organizers full control
                and peace of mind.
            </>
        ),
        stats: {
            events: {
                value: 200,
                label: "Events",
                kLabel: false,
            },
            checkIn: {
                value: 40,
                label: "Check-in",
                kLabel: true,
            },
            printedBadges: {
                value: 10,
                label: "Printed Badges",
                kLabel: true,
            },
            sentInvitations: {
                value: 50,
                label: "Sent Invitations",
                kLabel: true,
            },
        },
    },
    ar: {
        title: (
            <>
                حياك <span className="text-[#4F2396]">بالأرقام</span>
            </>
        ),
        description: (
            <>
                اجعل وصول الضيوف سهلاً وسلسًا من خلال نظام تسجيل دخول يعتمد على رموز QR يتميز بالسرعة والأمان والتحديث الفوري، مما يضمن دخولاً سلسًا لكل ضيف ويوفّر للمنظمين تحكمًا كاملا وراحة بال تامة.
            </>
        ),
        stats: {
            events: {
                value: 200,
                label: "فعالية",
                kLabel: false,
            },
            checkIn: {
                value: 40,
                label: "تسجيل وصول",
                kLabel: true,
            },
            printedBadges: {
                value: 10,
                label: "شارة مطبوعة",
                kLabel: true,
            },
            sentInvitations: {
                value: 50,
                label: "دعوة مرسلة",
                kLabel: true,
            },
        },
    },
};

interface HayakNumbersProps {
    locale: 'en' | 'ar';
}

const HayakNumbers = ({ locale = 'en' }: HayakNumbersProps) => {
    const isRTL = locale === 'ar';
    const t = translations[locale];

    return (
        <div className="w-full relative px-[var(--spacing-section-px-mobile)] md:px-[var(--spacing-section-px-tablet)] lg:px-[var(--spacing-section-px-small-laptop)] xl:px-[var(--spacing-section-px-desktop)] py-[var(--spacing-section-py-mobile)] md:py-[var(--spacing-section-py-tablet)] lg:py-[var(--spacing-section-py-small-laptop)] xl:py-[var(--spacing-section-py-desktop)] flex flex-col gap-[var(--spacing-gap-3xl)]">
            {/* Server-rendered section for SEO */}
            <div 
                data-server-hayak-numbers
                className="flex flex-col xl:flex-row items-center justify-center xl:justify-between gap-[var(--spacing-gap-3xl)]"
            >
                <div className="flex flex-col items-center xl:items-start gap-[var(--spacing-gap-lg)] w-full xl:w-auto">
                    <h2 className={`text-2xl xl:text-4xl font-bold ${
                        isRTL ? "text-center xl:text-right" : "text-center xl:text-left"
                    }`}>
                        {t.title}
                    </h2>
                    <p className={`w-full xl:w-[75%] text-xl ${
                        isRTL ? "text-center xl:text-right" : "text-center xl:text-left"
                    }`}>
                        {t.description}
                    </p>
                </div>
                <div className="flex items-center justify-center gap-[var(--spacing-gap-lg)] relative w-full">
                    <div className="flex items-center justify-center gap-[var(--spacing-gap-lg)] w-fit">
                        <div className={`flex flex-col items-center justify-center gap-[var(--spacing-gap-lg)] ${isRTL ? "order-2" : "order-1"}`}>
                            <div className="relative">
                                <Image 
                                    src="/num_br.svg" 
                                    alt={isRTL 
                                        ? `بطاقة إحصائيات منصة حياك - ${t.stats.events.value} ${t.stats.events.label}` 
                                        : `Hayak Events platform statistics card - ${t.stats.events.value} ${t.stats.events.label}`
                                    } 
                                    width={500} 
                                    height={500} 
                                    loading="lazy"
                                    quality={85}
                                />
                                <div className="absolute flex flex-col items-center gap-2 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                                    <div className="flex items-center gap-2 font-bold text-2xl text-[#4F2396]">
                                        <p>+</p>
                                        <p>{t.stats.events.value}</p>
                                    </div>
                                    <p className="text-lg font-bold text-[#2F155A] text-center">{t.stats.events.label}</p>
                                </div>
                            </div>
                            <div className="relative">
                                <Image 
                                    src="/num_tr.svg" 
                                    alt={isRTL 
                                        ? `بطاقة إحصائيات منصة حياك - ${t.stats.checkIn.value}K ${t.stats.checkIn.label}` 
                                        : `Hayak Events platform statistics card - ${t.stats.checkIn.value}K ${t.stats.checkIn.label}`
                                    } 
                                    width={500} 
                                    height={500} 
                                    loading="lazy"
                                    quality={85}
                                />
                                <div className="absolute flex flex-col items-center gap-2 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                                    <div className="flex items-center gap-2 font-bold text-2xl text-[#4F2396]">
                                        <p>+</p>
                                        <p>{t.stats.checkIn.value}K</p>
                                    </div>
                                    <p className="text-lg font-bold text-[#2F155A] text-center">{t.stats.checkIn.label}</p>
                                </div>
                            </div>
                        </div>
                        <div className={`flex flex-col items-center justify-center gap-[var(--spacing-gap-lg)] ${isRTL ? "order-1" : "order-2"}`}>
                            <div className="relative">
                                <Image 
                                    src="/num_bl.svg" 
                                    alt={isRTL 
                                        ? `بطاقة إحصائيات منصة حياك - ${t.stats.printedBadges.value}K ${t.stats.printedBadges.label}` 
                                        : `Hayak Events platform statistics card - ${t.stats.printedBadges.value}K ${t.stats.printedBadges.label}`
                                    } 
                                    width={500} 
                                    height={500} 
                                    loading="lazy"
                                    quality={85}
                                />
                                <div className="absolute flex flex-col items-center gap-2 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                                    <div className="flex items-center gap-2 font-bold text-2xl text-[#4F2396]">
                                        <p>+</p>
                                        <p>{t.stats.printedBadges.value}K</p>
                                    </div>
                                    <p className="text-lg font-bold text-[#2F155A] text-center">{t.stats.printedBadges.label}</p>
                                </div>
                            </div>
                            <div className="relative">
                                <Image 
                                    src="/num_tl.svg" 
                                    alt={isRTL 
                                        ? `بطاقة إحصائيات منصة حياك - ${t.stats.sentInvitations.value}K ${t.stats.sentInvitations.label}` 
                                        : `Hayak Events platform statistics card - ${t.stats.sentInvitations.value}K ${t.stats.sentInvitations.label}`
                                    } 
                                    width={500} 
                                    height={500} 
                                    loading="lazy"
                                    quality={85}
                                />
                                <div className="absolute flex flex-col items-center gap-2 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                                    <div className="flex items-center gap-2 font-bold text-2xl text-[#4F2396]">
                                        <p>+</p>
                                        <p>{t.stats.sentInvitations.value}K</p>
                                    </div>
                                    <p className="text-lg font-bold text-[#2F155A] text-center">{t.stats.sentInvitations.label}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                        <Image
                            src="/Logo.webp"
                            alt={isRTL ? "شعار حياك" : "Hayak logo"}
                            width={100}
                            height={100}
                            loading="lazy"
                            quality={85}
                        />
                    </div>
                </div>
            </div>

            {/* Client component for animations */}
            <HayakNumbersClient 
                locale={locale}
                translations={t}
            />
        </div>
    );
};

export default HayakNumbers;
