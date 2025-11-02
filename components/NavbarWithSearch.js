// components/NavbarWithSearch.js
'use client'
import Link from 'next/link'
import { Menu, X, User, LogIn, Search, MapPin } from 'lucide-react'
import { useState } from 'react'

export default function NavbarWithSearch() {
  const [isOpen, setIsOpen] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false) // Mock auth state

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-24 md:h-20 flex-col md:flex-row">
          
          {/* Top Row: Logo & Auth */}
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="text-3xl font-bold text-primary">
                Eventra
              </Link>
            </div>

            {/* Desktop Auth */}
            <div className="hidden sm:ml-6 sm:flex sm:items-center">
              {isLoggedIn ? (
                <Link href="/profile" className="flex items-center text-gray-500 hover:text-gray-900 p-2 rounded-md">
                  <User className="h-5 w-5 mr-1" />
                  Profile
                </Link>
              ) : (
                <Link href="/login" className="flex items-center bg-primary text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-primary-dark">
                  <LogIn className="h-5 w-5 mr-1" />
                  Login
                </Link>
              )}
            </div>
            
            {/* Mobile Menu Button */}
            <div className="-mr-2 flex items-center sm:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
              </button>
            </div>
          </div>

          {/* Bottom Row: Search Bar */}
          <div className="flex items-center pb-3 md:pb-0 md:pt-2">
            <div className="w-full">
              <label htmlFor="search" className="sr-only">Search</label>
              <div className="relative rounded-full shadow-md">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  name="search"
                  id="search"
                  className="block w-full pl-10 pr-20 py-3 border border-gray-300 rounded-full leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                  placeholder="Search for vendors (e.g. 'catering')"
                />
                <div className="absolute inset-y-0 right-0 flex py-1.5 pr-1.5">
                  <span className="inline-flex items-center px-4 rounded-full text-sm bg-gray-100 text-gray-600">
                    <MapPin className="h-4 w-4 mr-1" /> Metro City
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`${isOpen ? 'block' : 'hidden'} sm:hidden`} id="mobile-menu">
        <div className="pt-2 pb-3 space-y-1">
          <Link href="/" className="block pl-3 pr-4 py-2 border-l-4 border-primary bg-primary-lightest text-primary font-medium">Home</Link>
          <Link href="/#categories" className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:bg-gray-50 hover:border-gray-300">Categories</Link>
          <Link href="/#vendors" className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:bg-gray-50 hover:border-gray-300">Vendors</Link>
          {isLoggedIn ? (
            <Link href="/profile" className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:bg-gray-50 hover:border-gray-300">Profile</Link>
          ) : (
            <Link href="/login" className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:bg-gray-50 hover:border-gray-300">Login</Link>
          )}
        </div>
      </div>
    </nav>
  )
}