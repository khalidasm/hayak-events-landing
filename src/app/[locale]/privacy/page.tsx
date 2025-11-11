import React from "react";
import type { Metadata } from "next";
import PrivacyContent from "./PrivacyContent";

const translations = {
    en: {
        titleText: "Hayak Privacy Policy",
        title: (
            <>
                Hayak Privacy <span className="text-[#4F2396]">Policy</span>
            </>
        ),
        intro: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        sectionTitle: "Lorem ipsum dolor sit amet",
        sectionContent: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
    ar: {
        titleText: "سياسة الخصوصية لحيّاك",
        title: (
            <>
                سياسة الخصوصية <span className="text-[#4F2396]">لحيّاك</span>
            </>
        ),
        intro: "لوريم إيبسوم دولور سيت أميت، كونسيكتيتور أديبيسينغ إيليت. سيد دو إيوسمود تيمبور إنسيديدونت أوت لابور إت دولور ماجنا أليكوا. أوت إنيم أد مينيم فينيام، كويس نوسترود إكسيرسيتاتيون أوللامكو لابوريس نيسي أوت أليكويب إكس إيا كومودو كونسيكوات.",
        sectionTitle: "لوريم إيبسوم دولور سيت أميت",
        sectionContent: "لوريم إيبسوم دولور سيت أميت، كونسيكتيتور أديبيسينغ إيليت. سيد دو إيوسمود تيمبور إنسيديدونت أوت لابور إت دولور ماجنا أليكوا. أوت إنيم أد مينيم فينيام، كويس نوسترود إكسيرسيتاتيون أوللامكو لابوريس نيسي أوت أليكويب إكس إيا كومودو كونسيكوات. دويز أوتي إيرور دولور إن ريبريهينديريت إن فولوبتات فيليت إسسي سيليوم دولور إيو فوجيات نولا بارياتور.",
    },
};

export async function generateMetadata({
    params,
}: {
    params: Promise<{ locale: string }>;
}): Promise<Metadata> {
    const { locale } = await params;
    const t = translations[locale as 'en' | 'ar'];
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://hayaksa.com';
    const canonicalUrl = `${baseUrl}/${locale}/privacy`;

    return {
        title: t.titleText,
        description: t.intro,
        alternates: {
            canonical: canonicalUrl,
            languages: {
                'en': `${baseUrl}/en/privacy`,
                'ar': `${baseUrl}/ar/privacy`,
            },
        },
    };
}

interface PrivacyPageProps {
    params: Promise<{
        locale: string;
    }>;
}

export default async function PrivacyPage({ params }: PrivacyPageProps) {
    const { locale: localeParam } = await params;
    const locale = (localeParam as 'en' | 'ar') || 'en';
    const t = translations[locale];

    return <PrivacyContent locale={locale} translations={t} />;
}

