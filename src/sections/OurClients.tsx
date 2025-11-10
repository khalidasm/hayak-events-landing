import React from "react";
import Image from "next/image";
import OurClientsClient from "./OurClientsClient";

const translations = {
    en: {
        title: (
            <>
                Our <span className="text-[#4F2396]">Clients</span>
            </>
        ),
        description: (
            <>
                Hayak multiplies your event planning and exposure without <br />
                extra logins or hassles.
            </>
        ),
        clients: {
            mbsc: "Prince Mohammad Bin Salman College Business & Entrepreneurship",
            seet: "Monsha'at",
            starthub: "Startup Hub",
            dah: "Dar Al-Hekma University",
            designathon: "Designathon",
            startsmart: "Start Smart",
            taahab: "Tahaub",
            vibes: "VIBES",
            adc: "Architecture and Design Commission",
            bab: "Bab Rizq Jameel",
            backyard: "Backyard Experiential",
            bluehorse: "Blue Horse Trips & Events",
        },
    },
    ar: {
        title: (
            <>
                <span className="text-[#4F2396]">عملائنا</span>
            </>
        ),
        description: (
            <>
                يُضاعف حياك من كفاءة تخطيط فعاليتك وانتشارها دون الحاجة إلى تسجيلات دخول إضافية أو أي عناء.
            </>
        ),
        clients: {
            mbsc: "كليه الامير محمد بن سلمان للإدارة وريادة الأعمال",
            seet: "منشآت",
            starthub: "مجمع ريادة الأعمال",
            dah: "جامعة دار الحكمة",
            designathon: "ديزايناتون",
            startsmart: "ستارت سمارت",
            taahab: "تأهب",
            vibes: "فايبس",
            adc: "هيئة فنون العمارة والتصميم",
            bab: "باب رزق جميل",
            backyard: "باكيارد إكسبيرينشال",
            bluehorse: "بلو هورس للرحلات والفعاليات",
        },
    },
};

const clientLogos = [
    { key: "mbsc", src: "/clients/mbsc.svg" },
    { key: "seet", src: "/clients/seet.svg" },
    { key: "starthub", src: "/clients/starthub.svg" },
    { key: "dah", src: "/clients/dah.svg" },
    { key: "designathon", src: "/clients/designathon.svg" },
    { key: "startsmart", src: "/clients/startsmart.svg" },
    { key: "taahab", src: "/clients/taahab.svg" },
    { key: "vibes", src: "/clients/vibes.svg" },
    { key: "adc", src: "/clients/adc.svg" },
    { key: "bab", src: "/clients/bab.svg" },
    { key: "backyard", src: "/clients/backyard.svg" },
    { key: "bluehorse", src: "/clients/bluehorse.svg" },
] as const;

interface OurClientsProps {
    locale: 'en' | 'ar';
}

const OurClients = ({ locale = 'en' }: OurClientsProps) => {
    const isRTL = locale === 'ar';
    const t = translations[locale];

    return (
        <div className="w-full relative px-4 xl:px-60 py-16 xl:py-32 flex flex-col gap-10">
            {/* Server-rendered section for SEO */}
            <div 
                data-server-our-clients
                className='bg-[url("/our_client_pattern.svg")] bg-cover bg-center bg-no-repeat rounded-[20px] py-10 px-6 xl:py-20 xl:px-10 flex flex-col items-center gap-10'
            >
                <h2 className="text-2xl xl:text-4xl font-bold text-center">
                    {t.title}
                </h2>
                <p className="text-base xl:text-xl text-center">
                    {t.description}
                </p>
                
                {/* Mobile: static grid for SEO */}
                <div className="xl:hidden grid grid-cols-3 gap-6 w-full">
                    {clientLogos.map((client) => (
                        <div key={client.key} className="flex-shrink-0 w-36 h-36 flex items-center justify-center">
                            <Image 
                                src={client.src} 
                                alt={t.clients[client.key as keyof typeof t.clients]} 
                                width={144} 
                                height={144} 
                                className="object-contain w-full h-full" 
                            />
                        </div>
                    ))}
                </div>

                {/* Desktop: static grid for SEO */}
                <div className="hidden xl:grid xl:grid-cols-6 gap-10">
                    {clientLogos.map((client) => (
                        <div key={client.key} className="w-full aspect-square flex items-center justify-center">
                            <Image
                                src={client.src}
                                alt={t.clients[client.key as keyof typeof t.clients]}
                                width={150}
                                height={150}
                                className="object-contain w-full h-full"
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* Client component for animations */}
            <OurClientsClient 
                locale={locale}
                translations={t}
            />

            {/* SEO: Hidden text for search engines */}
            <div className="sr-only">
                <h2>{t.title}</h2>
                <p>{t.description}</p>
                <ul>
                    {clientLogos.map((client) => (
                        <li key={client.key}>{t.clients[client.key as keyof typeof t.clients]}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default OurClients;
