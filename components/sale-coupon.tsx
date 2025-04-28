import React from 'react'
import { Button } from '@/components/ui/button'

export function SaleCoupon() {
  return (
    <div className="bg-[#003049] w-full py-6 px-4 font-manrope">
      <div className="container mx-auto flex flex-col items-center justify-center gap-2 text-center">
        <h2 className="text-[#FFD700] text-3xl md:text-4xl font-bold">
          Spring Spectacular Sale
        </h2>
        <p className="text-white text-xl md:text-2xl font-semibold">
          Save up to 45% on Tickets
        </p>
        <Button 
          className="mt-2 bg-[#4CAF50] hover:bg-[#45a049] text-white px-8 py-2 rounded-sm transition-colors cursor-pointer"
        >
          Buy Now
        </Button>
      </div>
    </div>
  )
}