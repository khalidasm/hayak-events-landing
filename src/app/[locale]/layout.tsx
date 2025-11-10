import type { Metadata } from "next";
import { IBM_Plex_Sans_Arabic } from "next/font/google";
import "../globals.css";
import { Toaster } from "@/components/ui/sonner";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { notFound } from "next/navigation";

const ibmPlexSansArabic = IBM_Plex_Sans_Arabic({
  variable: "--font-ibm-plex-sans",
  subsets: ["arabic", "latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

const locales = ['en', 'ar'];
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://hayaksa.com';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  
  const title = locale === 'ar' 
    ? "حياك - إدارة فعاليات سلسة"
    : "Hayak Events - Seamless Event Management";
  
  const description = locale === 'ar'
    ? "ادعُ الأشخاص المميزين لديك بكل سلاسة مع حياك. إدارة الفعاليات والضيوف والتذاكر والمزيد."
    : "Invite your special people seamlessly with Hayak. Manage events, guests, tickets, and more.";
  
  const canonicalUrl = `${baseUrl}/${locale}`;
  
  return {
    title,
    description,
    keywords: locale === 'ar'
      ? "حياك, إدارة الفعاليات, إدارة الضيوف, تذاكر الفعاليات, نظام إدارة الفعاليات, السعودية"
      : "Hayak, event management, guest management, event tickets, event management system, Saudi Arabia",
    authors: [{ name: "Hayak Events" }],
    creator: "Hayak Events",
    publisher: "Hayak Events",
    alternates: {
      canonical: canonicalUrl,
      languages: {
        'en': `${baseUrl}/en`,
        'ar': `${baseUrl}/ar`,
        'x-default': `${baseUrl}/en`,
      },
    },
    openGraph: {
      type: 'website',
      title,
      description,
      url: canonicalUrl,
      siteName: "Hayak Events",
      locale: locale === 'ar' ? 'ar_SA' : 'en_US',
      alternateLocale: locale === 'ar' ? 'en_US' : 'ar_SA',
      images: [
        {
          url: `${baseUrl}/Logo.svg`,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [`${baseUrl}/Logo.svg`],
      creator: '@hayakevents',
      site: '@hayakevents',
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    verification: {
      // Add your verification codes here when available
      // google: 'your-google-verification-code',
      // yandex: 'your-yandex-verification-code',
      // yahoo: 'your-yahoo-verification-code',
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  
  // Validate locale
  if (!locales.includes(locale)) {
    notFound();
  }

  const isRTL = locale === 'ar';
  const dir = isRTL ? 'rtl' : 'ltr';

  // Structured data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Hayak Events",
    "alternateName": locale === 'ar' ? "حياك" : "Hayak",
    "url": baseUrl,
    "logo": `${baseUrl}/Logo.svg`,
    "description": locale === 'ar'
      ? "منصة إدارة الفعاليات الشاملة لإدارة الضيوف والتذاكر والفعاليات"
      : "Comprehensive event management platform for managing guests, tickets, and events",
    "sameAs": [
      // Add social media links when available
      // "https://twitter.com/hayakevents",
      // "https://linkedin.com/company/hayakevents",
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Customer Service",
      "availableLanguage": ["English", "Arabic"],
    },
  };

  const websiteStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Hayak Events",
    "alternateName": locale === 'ar' ? "حياك" : "Hayak",
    "url": baseUrl,
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": `${baseUrl}/${locale}/search?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <html lang={locale} dir={dir}>
      <body
        className={`${ibmPlexSansArabic.variable} font-sans antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteStructuredData) }}
        />
        <LanguageProvider locale={locale}>
          {children}
          <Toaster />
        </LanguageProvider>
      </body>
    </html>
  );
}

