import React from 'react'
import Image from 'next/image'
import FeaturesCarousel from '@/components/FeaturesCarousel'

const FeatureCarousel = () => {
  return (
    <div className="h-[375px] bg-[url('/section2.svg')] bg-cover mt-60 flex flex-col items-center justify-center">
    <div className="text-3xl font-bold text-center flex items-center">
      with <Image src="/logo.png" alt="Logo" width={100} height={100} className="inline-block mb-5" /> you can <FeaturesCarousel />
    </div>
</div>
  )
}

export default FeatureCarousel