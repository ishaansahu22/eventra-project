// components/Footer.js
'use client' // Add 'use client' just in case, though not strictly needed for this file
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 mt-16">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Logo & Social */}
          <div className="col-span-2 md:col-span-1">
            <h2 className="text-2xl font-bold text-primary">Eventra</h2>
            <p className="text-gray-500 text-sm mt-2">Your perfect event, simplified.</p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-gray-400 hover:text-gray-500"><Facebook /></a>
              <a href="#" className="text-gray-400 hover:text-gray-500"><Instagram /></a>
              <a href="#" className="text-gray-400 hover:text-gray-500"><Twitter /></a>
              <a href="#" className="text-gray-400 hover:text-gray-500"><Linkedin /></a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              <li><Link href="/" className="text-base text-gray-500 hover:text-gray-900">Home</Link></li>
              <li><Link href="/#categories" className="text-base text-gray-500 hover:text-gray-900">Categories</Link></li>
              <li><Link href="/#vendors" className="text-base text-gray-500 hover:text-gray-900">Vendors</Link></li>
              <li><Link href="/login" className="text-base text-gray-500 hover:text-gray-900">Login</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">Company</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="text-base text-gray-500 hover:text-gray-900">About Us</a></li>
              <li><a href="#" className="text-base text-gray-500 hover:text-gray-900">Careers</a></li>
              <li><a href="#" className="text-base text-gray-500 hover:text-gray-900">Blog</a></li>
              <li><a href="#" className="text-base text-gray-500 hover:text-gray-900">Contact Us</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">Legal</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="text-base text-gray-500 hover:text-gray-900">Privacy Policy</a></li>
              <li><a href="#" className="text-base text-gray-500 hover:text-gray-900">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 border-t border-gray-200 pt-8 text-center">
          <p className="text-base text-gray-400">&copy; {new Date().getFullYear()} Eventra. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}