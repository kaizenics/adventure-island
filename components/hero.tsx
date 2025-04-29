import React from 'react'
import { ChevronDown } from 'lucide-react'

export function Hero() {
  return (
    <div className="relative h-[85vh] w-full font-manrope">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/videos/0428.mp4" type="video/mp4" />
      </video>
      
      {/* Overlay to make text more readable */}
      <div className="absolute inset-0 bg-black/40" />
      
      {/* Content */}
      <div className="relative z-10 flex h-full items-center justify-center text-center">
        <div className="max-w-7xl px-4">
          <h1 className="mb-2 text-4xl md:text-5xl font-bold text-white">
            Experience Paradise Like Never Before
          </h1>
          <p className="text-base md:text-xl text-white/90">
            Discover the perfect blend of excitement and relaxation in our tropical paradise
          </p>
        </div>

        {/* Bouncing Arrow */}
        <div className="absolute bottom-8 animate-bounce">
          <ChevronDown className="h-14 w-14 text-white" />
        </div>
      </div>
    </div>
  )
}