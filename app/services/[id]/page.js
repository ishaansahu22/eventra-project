// app/services/[id]/page.js
'use client'
import Image from 'next/image'
import Link from 'next/link'
import { Star, MapPin, Users, Languages, ShieldCheck, Image as ImageIcon } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function VendorDetailPage() {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-primary">Home</Link>
            <span>/</span>
            <Link href="/services" className="hover:text-primary">Photographers</Link>
            <span>/</span>
            <span className="text-gray-900">Royal Weddings</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Image Gallery */}
            <div className="relative h-96 rounded-lg overflow-hidden mb-6">
              <Image
                src="https://images.unsplash.com/photo-1606216794074-735e91aa2c92"
                alt="Vendor"
                fill
                className="object-cover"
              />
              <button className="absolute bottom-4 right-4 px-4 py-2 bg-white rounded-lg flex items-center space-x-2">
                <ImageIcon className="w-4 h-4" />
                <span>Show all photos</span>
              </button>
            </div>

            {/* Vendor Info */}
            <div className="mb-8">
              <h1 className="text-4xl font-bold mb-2">Royal Weddings Photography</h1>
              <p className="text-gray-600 mb-4">Photographer in Patna, Bihar</p>
              
              <div className="flex items-center space-x-6 mb-6">
                <div className="flex items-center space-x-1">
                  {[1,2,3,4,5].map((i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                  <span className="font-semibold ml-2">4.8</span>
                  <span className="text-gray-600">(125 reviews)</span>
                </div>
              </div>

              {/* Tabs */}
              <div className="border-b mb-6">
                <div className="flex space-x-8">
                  <button className="pb-3 border-b-2 border-primary text-primary font-semibold">
                    About
                  </button>
                  <button className="pb-3 text-gray-600 hover:text-primary">
                    Services & Pricing
                  </button>
                  <button className="pb-3 text-gray-600 hover:text-primary">
                    Portfolio
                  </button>
                  <button className="pb-3 text-gray-600 hover:text-primary">
                    Reviews
                  </button>
                </div>
              </div>

              {/* About Section */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4">About Royal Weddings</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  With over a decade of experience in capturing the magic of weddings, Royal Weddings is a team of 
                  passionate photographers and videographers based in the heart of Patna. We believe every wedding 
                  tells a unique story, and our mission is to narrate yours through timeless, beautiful imagery. Our style is a 
                  blend of traditional portraiture and candid photojournalism, ensuring we capture both the grand 
                  moments and the fleeting, heartfelt emotions. We are dedicated to providing a seamless and 
                  enjoyable experience from the first consultation to the final delivery of your cherished memories.
                </p>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="flex items-center space-x-2 text-gray-700">
                    <Calendar className="w-5 h-5" />
                    <span>10+ Years in Business</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-700">
                    <Users className="w-5 h-5" />
                    <span>Team of 5</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-700">
                    <Languages className="w-5 h-5" />
                    <span>Speaks Hindi, English</span>
                  </div>
                  <div className="flex items-center space-x-2 text-green-600">
                    <ShieldCheck className="w-5 h-5" />
                    <span>Eventra Verified</span>
                  </div>
                </div>
              </div>

              {/* Reviews */}
              <div>
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold">Reviews (125)</h2>
                  <select className="px-4 py-2 border rounded-lg">
                    <option>Sort By: Newest</option>
                    <option>Sort By: Highest Rating</option>
                    <option>Sort By: Lowest Rating</option>
                  </select>
                </div>

                <div className="space-y-6">
                  {[1, 2].map((i) => (
                    <div key={i} className="border-b pb-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-gray-200 rounded-full"></div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="font-semibold">
                              {i === 1 ? 'Priya S.' : 'Rohan K.'}
                            </h4>
                            <span className="text-sm text-gray-600">
                              {i === 1 ? 'October 2023' : 'September 2023'}
                            </span>
                          </div>
                          <div className="flex space-x-1 mb-2">
                            {[1,2,3,4,5].map((star) => (
                              <Star key={star} className="w-4 h-4 fill-primary text-primary" />
                            ))}
                          </div>
                          <p className="text-gray-700">
                            {i === 1 
                              ? 'Absolutely stunning work! The team was so professional and made us feel comfortable throughout our special day. The photos are more beautiful than we could have ever imagined.'
                              : 'Great photographers and a very friendly team. The final album was delivered on time and the quality was top-notch. Highly recommended for anyone in Patna.'}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <button className="w-full mt-6 py-3 border rounded-lg hover:bg-gray-50">
                  Show all 125 reviews
                </button>
              </div>
            </div>
          </div>

          {/* Sidebar - Booking Card */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-lg p-6 sticky top-24">
              <div className="mb-6">
                <p className="text-gray-600 mb-2">Starting from</p>
                <p className="text-3xl font-bold">₹50,000</p>
                <p className="text-gray-600">for one day of traditional photography.</p>
              </div>

              <Link 
                href="/checkout"
                className="w-full block text-center bg-primary text-white py-3 rounded-lg hover:bg-primary/90 font-semibold mb-3"
              >
                Request Pricing
              </Link>

              <button className="w-full border border-gray-300 py-3 rounded-lg hover:bg-gray-50 font-semibold">
                Check Availability
              </button>

              <p className="text-center text-sm text-gray-500 mt-4">
                You won't be charged yet
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}