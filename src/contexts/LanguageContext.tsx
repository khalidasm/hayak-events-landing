"use client";

import React, { createContext, useContext } from "react";
import { useParams, usePathname } from "next/navigation";
import { useRouter } from "next/navigation";

type Language = "en" | "ar";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  isRTL: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ 
  children, 
  locale 
}: { 
  children: React.ReactNode;
  locale: string;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();
  
  // Get locale from URL params (from [locale] route)
  const currentLocale = (params?.locale as Language) || (locale as Language) || "en";
  const language: Language = currentLocale === "ar" || currentLocale === "en" ? currentLocale : "en";
  const isRTL = language === "ar";

  const setLanguage = (lang: Language) => {
    // Replace the locale in the current pathname
    const segments = pathname.split("/").filter(Boolean);
    if (segments[0] === "en" || segments[0] === "ar") {
      segments[0] = lang;
    } else {
      segments.unshift(lang);
    }
    const newPath = "/" + segments.join("/");
    router.push(newPath);
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, isRTL }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}

