// app/checkout/page.js
'use client'
import { useState } from 'react'
import Link from 'next/link'
import { Lock } from 'lucide-react'

export default function CheckoutPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Booking:', formData)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Simple Header */}
      <header className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-6 h-6 bg-primary rotate-45"></div>
            <span className="text-xl font-semibold">Eventra</span>
          </Link>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-center mb-2">Checkout</h1>
        <p className="text-center text-gray-600 mb-12">
          Complete your booking by filling in your details below.
        </p>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left - Form */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Your Details</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Full Name</label>
                <input
                  type="text"
                  placeholder="e.g. Ramesh Kumar"
                  value={formData.fullName}
                  onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                  className="w-full px-4 py-3 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Phone Number</label>
                <input
                  type="tel"
                  placeholder="e.g. 9876543210"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="w-full px-4 py-3 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Email Address</label>
                <input
                  type="email"
                  placeholder="e.g. ramesh@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-4 py-3 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>
            </form>
          </div>

          {/* Right - Order Summary */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Order Summary</h2>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-1">Radiant Moments - Photography</h3>
                <p className="text-gray-600">Full Day Booking</p>
              </div>

              <div className="space-y-3 pb-6 border-b">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-semibold">₹50,000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Taxes & Fees</span>
                  <span className="font-semibold">₹2,500</span>
                </div>
              </div>

              <div className="flex justify-between text-xl font-bold mt-6 mb-6">
                <span>Total Amount</span>
                <span>₹52,500</span>
              </div>

              <button
                onClick={(e) => {
                  e.preventDefault()
                  alert('Payment integration pending')
                }}
                className="w-full bg-primary text-white py-4 rounded-lg hover:bg-primary/90 font-semibold flex items-center justify-center space-x-2"
              >
                <Lock className="w-5 h-5" />
                <span>Proceed to Payment</span>
              </button>

              <p className="text-center text-sm text-gray-500 mt-4">
                By proceeding, you agree to our{' '}
                <Link href="/terms" className="text-primary underline">
                  Terms of Service
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}