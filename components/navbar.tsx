"use client"
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import Link from 'next/link'
import navIcon from "@/public/icon.png"
import { Menu, X } from 'lucide-react'

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 font-manrope transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}>
      <div className="container flex items-center justify-between h-24 px-4 mx-auto">
        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`lg:hidden ${isScrolled ? 'text-black' : 'text-white'} relative z-[60] cursor-pointer`}
        >
          {isOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>

        {/* Desktop Left Menu */}
        <div className={`hidden lg:flex items-center gap-4 ${isScrolled ? 'text-black' : 'text-white'}`}>
          <Button variant="ghost" className={`hover:bg-transparent hover:text-[#22a8d9] ${isScrolled ? 'text-black' : 'text-white'} cursor-pointer transition-colors`}>Home</Button>
          <Button variant="ghost" className={`hover:bg-transparent hover:text-[#22a8d9] ${isScrolled ? 'text-black' : 'text-white'} cursor-pointer transition-colors`}>About</Button>
          <Button variant="ghost" className={`hover:bg-transparent hover:text-[#22a8d9] ${isScrolled ? 'text-black' : 'text-white'} cursor-pointer transition-colors`}>Accommodations</Button>
          <Button variant="ghost" className={`hover:bg-transparent hover:text-[#22a8d9] ${isScrolled ? 'text-black' : 'text-white'} cursor-pointer transition-colors`}>Dining</Button>
        </div>

        {/* Logo */}
        <Link
          href="/"
          className="absolute left-1/2 -translate-x-1/2 text-2xl mt-3 font-bold uppercase tracking-wider"
        >
          <Image src={navIcon} alt="adventure island" width={150} />
        </Link>

        {/* Desktop Right Menu */}
        <div className={`hidden lg:flex items-center gap-4 ${isScrolled ? 'text-black' : 'text-white'}`}>
          <Button variant="ghost" className={`hover:bg-transparent hover:text-[#22a8d9] ${isScrolled ? 'text-black' : 'text-white'} cursor-pointer transition-colors`}>Experiences</Button>
          <Button variant="ghost" className={`hover:bg-transparent hover:text-[#22a8d9] ${isScrolled ? 'text-black' : 'text-white'} cursor-pointer transition-colors`}>Special Offers</Button>
          <Button variant="ghost" className={`hover:bg-transparent hover:text-[#22a8d9] ${isScrolled ? 'text-black' : 'text-white'} cursor-pointer transition-colors`}>Gallery</Button>
          <Button className="bg-[#22a8d9] hover:bg-[#1b86ad] text-white py-6 cursor-pointer">
            Book Now
          </Button>
        </div>

        {/* Mobile Menu - Fullscreen Design */}
        <div className={`
          lg:hidden fixed inset-0 top-0 bg-gradient-to-b from-black/25 to-black/30
          backdrop-blur-lg transform transition-all duration-500 ease-in-out z-[55]
          ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'}
        `}>
          <div className="flex flex-col items-center justify-center min-h-screen p-8 pt-24">
            <div className="w-full max-w-md space-y-6">
              {/* Navigation Links */}
              <div className="space-y-4">
                <Link href="/" className="block text-2xl font-bold text-white hover:text-[#22a8d9] transition-colors">
                  Home
                </Link>
                <Link href="/about" className="block text-2xl font-bold text-white hover:text-[#22a8d9] transition-colors">
                  About
                </Link>
                <Link href="/accommodations" className="block text-2xl font-bold text-white hover:text-[#22a8d9] transition-colors">
                  Accommodations
                </Link>
                <Link href="/dining" className="block text-2xl font-bold text-white hover:text-[#22a8d9] transition-colors">
                  Dining
                </Link>
                <Link href="/experiences" className="block text-2xl font-bold text-white hover:text-[#22a8d9] transition-colors">
                  Experiences
                </Link>
                <Link href="/special-offers" className="block text-2xl font-bold text-white hover:text-[#22a8d9] transition-colors">
                  Special Offers
                </Link>
                <Link href="/gallery" className="block text-2xl font-bold text-white hover:text-[#22a8d9] transition-colors">
                  Gallery
                </Link>
              </div>

              {/* Book Now Button */}
              <div className="pt-8">
                <Button className="w-full bg-[#22a8d9] hover:bg-[#1b86ad] text-white text-lg py-6">
                  Book Now
                </Button>
              </div>

              {/* Contact Info */}
              <div className="pt-8 text-center text-white/80">
                <p className="text-sm">Contact Us</p>
                <p className="text-lg font-bold">+1 (555) 123-4567</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}