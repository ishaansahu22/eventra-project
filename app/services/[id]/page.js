// app/services/[id]/page.js
'use client'
import { useParams } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { Star, MapPin, Users, Languages, ShieldCheck, Image as ImageIcon, Calendar } from 'lucide-react'
import Navbar from '@/components/Navbar' // Using the main navbar
import Footer from '@/components/Footer' // Using the main footer
import { vendors } from '@/data/mockData'

export default function VendorDetailPage() {
  const params = useParams()
  const { id } = params
  
  // Find the vendor from mock data
  const vendor = vendors.find((v) => v.id === id)

  // Handle vendor not found
  if (!vendor) {
    return (
      <>
        <Navbar />
        <div className="flex items-center justify-center min-h-screen bg-background">
          <h1 className="text-2xl font-semibold text-foreground">Vendor not found.</h1>
        </div>
        <Footer />
      </>
    )
  }

  return (
    <div className="min-h-screen bg-background-soft">
      {/* This Navbar is the one from the homepage, but it will be solid here */}
      <Navbar />

      {/* Breadcrumb */}
      <div className="bg-background border-b border-border">
        <div className="container-xl py-4">
          <div className="flex items-center space-x-2 text-sm text-foreground/70">
            <Link href="/" className="hover:text-primary">Home</Link>
            <span>/</span>
            <Link href={`/search?category=${vendor.category}`} className="hover:text-primary">{vendor.category}s</Link>
            <span>/</span>
            <span className="text-foreground">{vendor.name}</span>
          </div>
        </div>
      </div>

      <div className="container-xl py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Image Gallery Placeholder */}
            <div className="relative h-96 rounded-lg overflow-hidden mb-6 bg-background-soft border border-border">
              <Image
                src={vendor.imageUrl}
                alt={vendor.name}
                fill
                className="object-cover"
              />
              <button className="absolute bottom-4 right-4 px-4 py-2 bg-background/90 backdrop-blur-sm rounded-lg flex items-center space-x-2 text-foreground font-medium shadow-md border border-border">
                <ImageIcon className="w-4 h-4" />
                <span>Show all photos</span>
              </button>
            </div>

            {/* Vendor Info */}
            <div className="bg-background p-8 rounded-lg shadow-sm border border-border">
              <h1 className="text-4xl font-bold mb-2 text-foreground">{vendor.name}</h1>
              <p className="text-foreground/70 mb-4">{vendor.category} in {vendor.location}</p>
              
              <div className="flex items-center space-x-6 mb-6">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`w-5 h-5 ${i < Math.round(vendor.rating) ? 'fill-primary text-primary' : 'text-gray-300'}`} 
                    />
                  ))}
                  <span className="font-semibold ml-2 text-foreground">{vendor.rating}</span>
                  <span className="text-foreground/70">({vendor.reviews} reviews)</span>
                </div>
              </div>

              {/* Tabs */}
              <div className="border-b border-border mb-6">
                <div className="flex space-x-8">
                  <button className="pb-3 border-b-2 border-primary text-primary font-semibold">
                    About
                  </button>
                  <button className="pb-3 text-foreground/60 hover:text-primary border-b-2 border-transparent">
                    Services & Pricing
                  </button>
                  <button className="pb-3 text-foreground/60 hover:text-primary border-b-2 border-transparent">
                    Portfolio
                  </button>
                  <button className="pb-3 text-foreground/60 hover:text-primary border-b-2 border-transparent">
                    Reviews
                  </button>
                </div>
              </div>

              {/* About Section */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4 text-foreground/90">About {vendor.name}</h2>
                <p className="text-foreground/70 leading-relaxed mb-6">
                  {vendor.description}
                </p>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="flex items-center space-x-2 text-foreground/70">
                    <Calendar className="w-5 h-5" />
                    <span>10+ Years in Business</span>
                  </div>
                  <div className="flex items-center space-x-2 text-foreground/70">
                    <Users className="w-5 h-5" />
                    <span>Team of 5</span>
                  </div>
                  <div className="flex items-center space-x-2 text-foreground/70">
                    <Languages className="w-5 h-5" />
                    <span>Speaks Hindi, English</span>
                  </div>
                  <div className="flex items-center space-x-2 text-green-600">
                    <ShieldCheck className="w-5 h-5" />
                    <span>Eventra Verified</span>
                  </div>
                </div>
              </div>

              {/* Reviews Section (Mock) */}
              <div>
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-foreground/90">Reviews ({vendor.reviews})</h2>
                  <select className="px-4 py-2 border border-border rounded-lg bg-background-soft text-foreground focus:outline-none focus:ring-2 focus:ring-primary">
                    <option>Sort By: Newest</option>
                    <option>Sort By: Highest Rating</option>
                  </select>
                </div>

                <div className="space-y-6">
                  {/* Mock Review 1 */}
                  <div className="border-b border-border pb-6">
                    <div className="flex items-start space-x-4">
                      <Image src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&q=80" alt="Priya S." width={48} height={48} className="rounded-full" />
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <h4 className="font-semibold text-foreground">Priya S.</h4>
                          <span className="text-sm text-foreground/60">October 2023</span>
                        </div>
                        <div className="flex space-x-0.5 mb-2">
                          {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-primary text-primary" />)}
                        </div>
                        <p className="text-foreground/70">
                          Absolutely stunning work! The team was so professional and made us feel comfortable throughout our special day. The photos are more beautiful than we could have ever imagined.
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* Mock Review 2 */}
                  <div className="border-b border-border pb-6">
                    <div className="flex items-start space-x-4">
                      <Image src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop&q=80" alt="Rohan K." width={48} height={48} className="rounded-full" />
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <h4 className="font-semibold text-foreground">Rohan K.</h4>
                          <span className="text-sm text-foreground/60">September 2023</span>
                        </div>
                        <div className="flex space-x-0.5 mb-2">
                          {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-primary text-primary" />)}
                        </div>
                        <p className="text-foreground/70">
                          Great photographers and a very friendly team. The final album was delivered on time and the quality was top-notch. Highly recommended for anyone in Patna.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <button className="w-full mt-6 py-3 border border-border rounded-lg hover:bg-background-soft font-medium text-foreground/80 transition-colors">
                  Show all {vendor.reviews} reviews
                </button>
              </div>
            </div>
          </div>

          {/* Sidebar - Booking Card */}
          <div className="lg:col-span-1">
            <div className="bg-background rounded-lg shadow-lg p-6 sticky top-24 border border-border">
              <div className="mb-6">
                <p className="text-foreground/70 mb-1">Starting from</p>
                <p className="text-3xl font-bold text-foreground">{vendor.priceRange}</p>
                <p className="text-foreground/70">for one day of traditional photography.</p>
              </div>

              <Link 
                href="/checkout"
                className="w-full block text-center bg-primary text-white py-3 rounded-lg hover:bg-primary-dark font-semibold mb-3 transition-colors"
              >
                Request Pricing
              </Link>

              <button className="w-full border border-border py-3 rounded-lg hover:bg-background-soft font-semibold text-foreground/90 transition-colors">
                Check Availability
              </button>

              <p className="text-center text-sm text-foreground/50 mt-4">
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