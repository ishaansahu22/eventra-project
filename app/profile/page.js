// app/profile/page.js
'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { Calendar, Settings, HelpCircle, LogOut, Search, Bell } from 'lucide-react'
import { userProfile, bookings } from '@/data/mockData'

// --- Profile Navbar (matches ...070708.png) ---
function NavbarProfile() {
  return (
    <header className="sticky top-0 z-40 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container-xl flex items-center justify-between h-20">
        {/* Logo */}
        <Link href="/" className="text-3xl font-bold text-primary">
          Eventra
        </Link>
        
        {/* Search Bar */}
        <div className="hidden md:block w-full max-w-sm">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search events, vendors..."
              className="w-full pl-10 pr-4 py-2.5 bg-background-soft border border-border rounded-full text-foreground placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
        </div>
        
        {/* Icons & Profile */}
        <div className="flex items-center space-x-4">
          <button className="text-foreground/70 hover:text-primary transition-colors">
            <Bell size={24} />
          </button>
          <button className="h-10 w-10 rounded-full overflow-hidden border-2 border-primary">
            <Image
              src={userProfile.profilePicture}
              alt="Profile"
              width={40}
              height={40}
              className="object-cover"
            />
          </button>
        </div>
      </div>
    </header>
  )
}

// --- Profile Sidebar (matches ...070708.png) ---
function ProfileSidebar() {
  const [activeTab, setActiveTab] = useState('bookings')

  const navItems = [
    { id: 'bookings', name: 'My Bookings', icon: Calendar },
    { id: 'settings', name: 'Account Settings', icon: Settings },
    { id: 'help', name: 'Help & Support', icon: HelpCircle },
  ]

  return (
    <aside className="lg:col-span-1">
      <div className="bg-background rounded-lg p-6 shadow-sm border border-border">
        {/* Profile Info */}
        <div className="flex items-center space-x-4 mb-6">
          <div className="relative h-16 w-16 rounded-full overflow-hidden">
            <Image
              src={userProfile.profilePicture}
              alt={userProfile.name}
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h3 className="font-semibold text-lg text-foreground">{userProfile.name}</h3>
            <p className="text-foreground/70 text-sm">{userProfile.location}</p>
          </div>
        </div>

        {/* Navigation */}
        <nav className="space-y-2">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg font-medium transition-colors ${
                activeTab === item.id
                  ? 'bg-primary/10 text-primary'
                  : 'text-foreground/70 hover:bg-background-soft hover:text-foreground'
              }`}
            >
              <item.icon className="w-5 h-5" />
              <span>{item.name}</span>
            </button>
          ))}
        </nav>

        <hr className="my-6 border-border" />

        <button className="w-full flex items-center space-x-3 px-4 py-3 text-red-600 hover:bg-red-500/10 rounded-lg transition-colors">
          <LogOut className="w-5 h-5" />
          <span>Logout</span>
        </button>
      </div>
    </aside>
  )
}

// --- Booking Card (matches ...070708.png) ---
function BookingCard({ booking }) {
  return (
    <div className="bg-background rounded-lg shadow-sm border border-border overflow-hidden">
      <div className="relative h-48">
        <Image
          src={booking.image}
          alt={booking.vendor}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-5">
        <div className="flex justify-between items-start mb-2">
          <div>
            <p className="text-sm text-foreground/70">{booking.type}</p>
            <h3 className="text-xl font-semibold text-foreground">{booking.vendor}</h3>
          </div>
          <span className="px-3 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">
            {booking.status}
          </span>
        </div>
        <p className="text-foreground/70 mb-4">{booking.date}</p>
        <button className="w-full bg-primary text-white py-2.5 rounded-lg hover:bg-primary-dark font-semibold transition-colors">
          {booking.type === 'Wedding' ? 'View Details' : 'Contact Vendor'}
        </button>
      </div>
    </div>
  )
}

// --- Main Profile Page ---
export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-background-soft">
      <NavbarProfile />

      <div className="container-xl py-12">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <ProfileSidebar />

          {/* Main Content */}
          <main className="lg:col-span-3">
            <h1 className="text-4xl font-bold mb-8 text-foreground">My Bookings</h1>

            {/* Tabs */}
            <div className="flex space-x-6 mb-8 border-b border-border">
              <button className="pb-3 border-b-2 border-primary text-primary font-semibold">
                Upcoming Bookings
              </button>
              <button className="pb-3 border-b-2 border-transparent text-foreground/60 hover:text-primary">
                Past Bookings
              </button>
            </div>

            {/* Bookings Grid */}
            <div className="grid md:grid-cols-2 gap-6">
              {bookings.map((booking) => (
                <BookingCard key={booking.id} booking={booking} />
              ))}
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}