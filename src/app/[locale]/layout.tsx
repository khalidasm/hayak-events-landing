import type { Metadata, Viewport } from "next";
import { IBM_Plex_Sans_Arabic } from "next/font/google";
import "../globals.css";
import { Toaster } from "@/components/ui/sonner";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnchorScrollHandler from "@/components/AnchorScrollHandler";
import FloatingWhatsAppButton from "@/components/FloatingWhatsApp";

const ibmPlexSansArabic = IBM_Plex_Sans_Arabic({
  variable: "--font-ibm-plex-sans",
  subsets: ["arabic", "latin"],
  weight: ["400", "500", "600"],
  display: 'swap',
  preload: true,
  fallback: ['system-ui', 'arial'],
  adjustFontFallback: true,
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
    ? "حياك - منصة إدارة الفعاليات السلسة | إدارة الضيوف والتذاكر"
    : "Hayak Events - Seamless Event Management Platform | Guest Management & Tickets";
  
  const description = locale === 'ar'
    ? "ادعُ الأشخاص المميزين لديك بكل سلاسة مع حياك. إدارة الفعاليات والضيوف والتذاكر والمزيد."
    : "Invite your special people seamlessly with Hayak. Manage events, guests, tickets, and more.";
  
  const canonicalUrl = `${baseUrl}/${locale}`;
  
  // Build languages object with explicit self-referential link
  const languages: Record<string, string> = {
    'en': `${baseUrl}/en`,
    'ar': `${baseUrl}/ar`,
    'x-default': `${baseUrl}/en`,
  };
  
  // Ensure self-referential link is explicitly included
  languages[locale] = canonicalUrl;
  
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
      languages,
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
          url: `${baseUrl}/og-image.png`,
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
      images: [`${baseUrl}/og-image.png`],
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
    icons: {
      icon: [
        { url: '/favicons/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
        { url: '/favicons/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
        { url: '/favicons/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
        { url: '/favicons/android-icon-192x192.png', sizes: '192x192', type: 'image/png' },
      ],
      apple: [
        { url: '/favicons/apple-icon-57x57.png', sizes: '57x57', type: 'image/png' },
        { url: '/favicons/apple-icon-60x60.png', sizes: '60x60', type: 'image/png' },
        { url: '/favicons/apple-icon-72x72.png', sizes: '72x72', type: 'image/png' },
        { url: '/favicons/apple-icon-76x76.png', sizes: '76x76', type: 'image/png' },
        { url: '/favicons/apple-icon-114x114.png', sizes: '114x114', type: 'image/png' },
        { url: '/favicons/apple-icon-120x120.png', sizes: '120x120', type: 'image/png' },
        { url: '/favicons/apple-icon-144x144.png', sizes: '144x144', type: 'image/png' },
        { url: '/favicons/apple-icon-152x152.png', sizes: '152x152', type: 'image/png' },
        { url: '/favicons/apple-icon-180x180.png', sizes: '180x180', type: 'image/png' },
      ],
      shortcut: '/favicons/favicon.ico',
    },
    manifest: '/favicons/manifest.json',
    verification: {
      // Add your verification codes here when available
      // google: 'your-google-verification-code',
      // yandex: 'your-yandex-verification-code',
      // yahoo: 'your-yahoo-verification-code',
    },
  };
}

export function generateViewport(): Viewport {
  return {
    themeColor: '#4F2396',
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
    "logo": `${baseUrl}/Logo.png`,
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
    // Removed SearchAction as search functionality may not be implemented
    // Uncomment and update if search is available:
    // "potentialAction": {
    //   "@type": "SearchAction",
    //   "target": {
    //     "@type": "EntryPoint",
    //     "urlTemplate": `${baseUrl}/${locale}/search?q={search_term_string}`,
    //   },
    //   "query-input": "required name=search_term_string",
    // },
  };

  // Note: Hero image preload removed - Next.js Image with priority handles this better

  return (
    <html lang={locale} dir={dir}>
      <head>
        {/* Preconnect to external resources */}
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Essential favicons only - others loaded lazily */}
        <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-icon-180x180.png" />
        <link rel="manifest" href="/favicons/manifest.json" />
        <meta name="msapplication-TileColor" content="#4F2396" />
        <meta name="msapplication-TileImage" content="/favicons/ms-icon-144x144.png" />
        <meta name="msapplication-config" content="/favicons/browserconfig.xml" />
        <meta name="theme-color" content="#4F2396" />
      </head>
      <body
        className={`${ibmPlexSansArabic.variable} font-sans antialiased`}
        suppressHydrationWarning
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
          <AnchorScrollHandler />
          <div className="w-full min-h-screen bg-white overflow-x-hidden">
            <Navbar locale={locale as 'en' | 'ar'} />
            <main>
              {children}
            </main>
            <Footer locale={locale as 'en' | 'ar'} />
          </div>
          <FloatingWhatsAppButton locale={locale as 'en' | 'ar'} />
          <Toaster />
        </LanguageProvider>
      </body>
    </html>
  );
}

