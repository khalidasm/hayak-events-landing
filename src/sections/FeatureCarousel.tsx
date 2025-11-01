import React from 'react'
import Image from 'next/image'
import FeaturesCarousel from '@/components/FeaturesCarousel'

const FeatureCarousel = () => {
  return (
    <div className="h-[200px] sm:h-[300px] lg:h-[375px] bg-[url('/section2.svg')] bg-cover bg-center py-16 sm:py-24 lg:py-32 flex flex-col items-center justify-center px-4">
      <div className="text-lg sm:text-2xl lg:text-3xl font-bold text-center flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2">
        <span>with</span>
        <Image 
          src="/logo.png" 
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