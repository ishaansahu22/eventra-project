// components/Navbar.js
'use client'
import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/search' },
    { name: 'Vendors', href: '/search' },
    { name: 'About Us', href: '/about' },
  ]

  return (
    <nav className="absolute top-0 left-0 right-0 z-50 pt-6">
      <div className="container-xl">
        <div className="flex justify-between items-center bg-white/90 backdrop-blur-md rounded-xl shadow-sm px-6 py-4">
          {/* Logo */}
          <Link href="/" className="text-3xl font-bold text-primary">
            Eventra
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href} className="font-medium text-gray-600 hover:text-primary transition-colors">
                {link.name}
              </Link>
            ))}
            <Link href="/login" className="font-medium text-gray-600 hover:text-primary transition-colors">
              Login
            </Link>
            <Link href="/signup" className="bg-primary text-white px-5 py-2.5 rounded-lg font-medium hover:bg-primary-dark transition-colors">
              Sign Up
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-24 left-0 right-0 container-xl px-4">
          <div className="bg-white rounded-lg shadow-xl overflow-hidden mx-4">
            <nav className="flex flex-col p-4 space-y-2">
              {navLinks.map((link) => (
                <Link key={link.name} href={link.href} className="block px-4 py-2 text-lg font-medium text-gray-700 rounded-md hover:bg-gray-100 hover:text-primary">
                  {link.name}
                </Link>
              ))}
              <hr className="my-2" />
              <Link href="/login" className="block px-4 py-2 text-lg font-medium text-gray-700 rounded-md hover:bg-gray-100 hover:text-primary">
                Login
              </Link>
              <Link href="/signup" className="block text-center bg-primary text-white px-5 py-3 rounded-lg font-medium hover:bg-primary-dark transition-colors">
                Sign Up
              </Link>
            </nav>
          </div>
        </div>
      )}
    </nav>
  )
}