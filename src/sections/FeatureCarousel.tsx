import React from 'react'
import Image from 'next/image'
import FeaturesCarousel from '@/components/FeaturesCarousel'

const FeatureCarousel = () => {
  return (
    <div id="features" className="h-[200px] xl:h-[375px] bg-[url('/section2.svg')] bg-cover bg-center py-16 xl:py-32 flex flex-col items-center justify-center px-4 xl:px-60">
      <div className="text-lg xl:text-3xl font-bold text-center flex flex-col xl:flex-row items-center justify-center gap-1 xl:gap-2">
        <span>with</span>
        <Image 
          src="/Logo.svg" 
          alt="Logo" 
          width={100} 
          height={100} 
        />
        <span>you can</span>
        <FeaturesCarousel />
      </div>
    </div>
  )
}

export default FeatureCarousel