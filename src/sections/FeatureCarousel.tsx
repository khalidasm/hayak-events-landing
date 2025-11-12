import React from 'react'
import Image from 'next/image'
import FeaturesCarousel from '@/components/FeaturesCarousel'

const translations = {
  en: {
    with: "with",
    youCan: "you can"
  },
  ar: {
    with: "مع",
    youCan: "يمكنك"
  }
}

interface FeatureCarouselProps {
  locale: 'en' | 'ar'
}

const FeatureCarousel = ({ locale = 'en' }: FeatureCarouselProps) => {
  const t = translations[locale]

  return (
    <div id="features" className="h-[200px] lg:h-[300px] xl:h-[375px] bg-[url('/section2.svg')] bg-cover bg-center py-24 md:py-32 lg:py-36 xl:py-48 flex flex-col items-center justify-center px-4 md:px-6 lg:px-12 xl:px-60">
      <div className="text-lg xl:text-3xl font-bold text-center flex flex-col xl:flex-row items-center justify-center gap-1 xl:gap-2">
        <span>{t.with}</span>
        <Image 
          src="/Logo.webp" 
          alt={locale === 'ar' ? "شعار حياك" : "Hayak Events logo"} 
          width={100} 
          height={100} 
        />
        <span>{t.youCan}</span>
        <FeaturesCarousel locale={locale} />
      </div>
    </div>
  )
}

export default FeatureCarousel