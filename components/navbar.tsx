"use client"
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import Link from 'next/link'
import navIcon from "@/public/icon.png"

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 font-manrope transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
    }`}>
      <div className="container flex items-center justify-between h-24 px-4 mx-auto">
        <div className={`flex items-center gap-4 ${isScrolled ? 'text-black' : 'text-white'}`}>
          <Button variant="ghost" className={`hover:bg-transparent ${isScrolled ? 'hover:text-black/80' : 'hover:text-white/80'} cursor-pointer`}>Home</Button>
          <Button variant="ghost" className={`hover:bg-transparent ${isScrolled ? 'hover:text-black/80' : 'hover:text-white/80'} cursor-pointer`}>About</Button>
          <Button variant="ghost" className={`hover:bg-transparent ${isScrolled ? 'hover:text-black/80' : 'hover:text-white/80'} cursor-pointer`}>Accommodations</Button>
          <Button variant="ghost" className={`hover:bg-transparent ${isScrolled ? 'hover:text-black/80' : 'hover:text-white/80'} cursor-pointer`}>Dining</Button>
        </div>

        <Link
          href="/"
          className="absolute left-1/2 -translate-x-1/2 text-2xl mt-3 font-bold uppercase tracking-wider"
        >
          <Image src={navIcon} alt="adventure island" width={150} />
        </Link>

        {/* Right Menu */}
        <div className={`flex items-center gap-4 ${isScrolled ? 'text-black' : 'text-white'}`}>
          <Button variant="ghost" className={`hover:bg-transparent ${isScrolled ? 'hover:text-black/80' : 'hover:text-white/80'} cursor-pointer`}>Experiences</Button>
          <Button variant="ghost" className={`hover:bg-transparent ${isScrolled ? 'hover:text-black/80' : 'hover:text-white/80'} cursor-pointer`}>Special Offers</Button>
          <Button variant="ghost" className={`hover:bg-transparent ${isScrolled ? 'hover:text-black/80' : 'hover:text-white/80'} cursor-pointer`}>Gallery</Button>
          <Button variant="secondary" className="hover:bg-gray-300 cursor-pointer">Book Now</Button>
        </div>
      </div>
    </nav>
  )
}