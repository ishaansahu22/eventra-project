// app/profile/page.js
'use client'
import Image from 'next/image'
import { Calendar, Settings, HelpCircle, LogOut } from 'lucide-react'
import NavbarWithSearch from '@/components/NavbarWithSearch'

export default function ProfilePage() {
  const bookings = [
    {
      id: 1,
      type: 'Wedding',
      vendor: 'Royal Palace Banquet Hall',
      date: 'December 25, 2024',
      status: 'Confirmed',
      image: 'https://images.unsplash.com/photo-1519167758481-83f29da8c2f0',
    },
    {
      id: 2,
      type: 'Mehendi Ceremony',
      vendor: 'Priya Mehendi Artist',
      date: 'December 22, 2024',
      status: 'Confirmed',
      image: 'https://images.unsplash.com/photo-1610088441520-4352457e7095',
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <NavbarWithSearch />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-orange-200 rounded-full flex items-center justify-center">
                  <span className="text-2xl">👤</span>
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Anjali Sharma</h3>
                  <p className="text-gray-600 text-sm">Patna, Bihar</p>
                </div>
              </div>

              <nav className="space-y-2">
                <button className="w-full flex items-center space-x-3 px-4 py-3 bg-primary/10 text-primary rounded-lg font-medium">
                  <Calendar className="w-5 h-5" />
                  <span>My Bookings</span>
                </button>
                <button className="w-full flex items-center space-x-3 px-4 py-3 hover:bg-gray-50 rounded-lg">
                  <Settings className="w-5 h-5" />
                  <span>Account Settings</span>
                </button>
                <button className="w-full flex items-center space-x-3 px-4 py-3 hover:bg-gray-50 rounded-lg">
                  <HelpCircle className="w-5 h-5" />
                  <span>Help & Support</span>
                </button>
              </nav>

              <button className="w-full flex items-center space-x-3 px-4 py-3 text-red-600 hover:bg-red-50 rounded-lg mt-6">
                <LogOut className="w-5 h-5" />
                <span>Logout</span>
              </button>
            </div>
          </aside>

          {/* Main Content */}
          <main className="lg:col-span-3">
            <h1 className="text-4xl font-bold mb-8">My Bookings</h1>

            <div className="flex space-x-4 mb-8 border-b">
              <button className="px-4 py-2 border-b-2 border-primary text-primary font-semibold">
                Upcoming Bookings
              </button>
              <button className="px-4 py-2 text-gray-600 hover:text-primary">
                Past Bookings
              </button>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {bookings.map((booking) => (
                <div key={booking.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
                  <div className="relative h-48">
                    <Image
                      src={booking.image}
                      alt={booking.vendor}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <p className="text-sm text-gray-600">{booking.type}</p>
                        <h3 className="text-xl font-semibold">{booking.vendor}</h3>
                      </div>
                      <span className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full">
                        {booking.status}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-4">{booking.date}</p>
                    <button className="w-full bg-primary text-white py-3 rounded-lg hover:bg-primary/90 font-semibold">
                      {booking.type === 'Wedding' ? 'View Details' : 'Contact Vendor'}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}
