import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import footerImg from '@/public/icon-white.png' 
import { Facebook, Instagram, Twitter } from 'lucide-react'
import { Container } from '@/components/ui/container'

export function Footer() {
  return (
    <footer className="bg-[#22a8d9] text-white font-manrope">
      <Container variant={"fullMobileBreakpointPadded"} className="py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="space-y-4">
            <Image src={footerImg} alt="footer img" width={200}/>
            <p className="text-white/80">
              Creating unforgettable memories through exceptional experiences and world-class hospitality.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="hover:text-white/80">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="hover:text-white/80">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="hover:text-white/80">
                <Twitter className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="hover:text-white/80">About Us</Link></li>
              <li><Link href="#" className="hover:text-white/80">Accommodations</Link></li>
              <li><Link href="#" className="hover:text-white/80">Dining</Link></li>
              <li><Link href="#" className="hover:text-white/80">Experiences</Link></li>
              <li><Link href="#" className="hover:text-white/80">Special Offers</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Contact</h3>
            <ul className="space-y-2">
              <li>123 Paradise Lane</li>
              <li>Adventure Island, AI 12345</li>
              <li>Phone: (555) 123-4567</li>
              <li>Email: info@adventureisland.com</li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Newsletter</h3>
            <p className="text-white/80">Subscribe to receive special offers and updates.</p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 rounded-md bg-white/10 border border-white/20 focus:outline-none focus:border-white"
              />
              <button className="px-4 py-2 bg-white text-[#22a8d9] rounded-md hover:bg-white/90">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/20 text-center text-white/80">
          <p>© {new Date().getFullYear()} Adventure Island. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  )
}