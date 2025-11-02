// app/search/SearchContent.js
'use client' // <-- This is very important

import { useSearchParams } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { Star, MapPin } from 'lucide-react'
import { vendors } from '@/data/mockData'

// Vendor Card Component
function VendorCard({ vendor }) {
  return (
    <Link href={`/services/${vendor.id}`} className="block group bg-background rounded-lg shadow-sm border border-border overflow-hidden transition-all duration-300 hover:shadow-lg">
      <div className="relative h-52 w-full">
        <Image
          src={vendor.imageUrl}
          alt={vendor.name}
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-foreground mb-1 truncate">{vendor.name}</h3>
        <p className="text-sm text-foreground/70 mb-3 flex items-center">
          <MapPin className="h-4 w-4 mr-1.5" />
          {vendor.location}
        </p>
        <div className="flex items-center mb-3">
          <Star className="h-4 w-4 text-primary fill-primary" />
          <span className="text-sm text-foreground/90 ml-1 font-medium">{vendor.rating}</span>
          <span className="text-sm text-foreground/60 ml-1">({vendor.reviews} reviews)</span>
        </div>
        <div className="border-t border-border pt-3">
          <p className="text-sm text-foreground/70">Starting from</p>
          <p className="text-lg font-semibold text-primary">{vendor.priceRange}</p>
        </div>
      </div>
    </Link>
  )
}

// This is the main component that uses the hook
export default function SearchContent() {
  const searchParams = useSearchParams()
  const category = searchParams.get('category')

  // Filter vendors based on the category from the URL
  const filteredVendors = category 
    ? vendors.filter(v => v.category === category)
    : vendors

  return (
    <main className="container-xl py-12">
      <h1 className="text-4xl font-bold text-foreground mb-4">
        {category ? `${category}s` : 'All Vendors'}
      </h1>
      <p className="text-lg text-foreground/70 mb-8">
        Showing {filteredVendors.length} results
      </p>
      
      {/* Filters (Basic) */}
      <div className="flex space-x-2 mb-8">
        <button className="px-4 py-2 bg-primary/10 text-primary border border-primary rounded-full font-medium">
          All
        </button>
        <button className="px-4 py-2 bg-background border border-border text-foreground/70 rounded-full font-medium hover:border-gray-400">
          Price (Low to High)
        </button>
        <button className="px-4 py-2 bg-background border border-border text-foreground/70 rounded-full font-medium hover:border-gray-400">
          Top Rated
        </button>
      </div>

      {/* Vendor Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredVendors.length > 0 ? (
          filteredVendors.map((vendor) => (
            <VendorCard key={vendor.id} vendor={vendor} />
          ))
        ) : (
          <p className="text-foreground/70 lg:col-span-3">No vendors found for this category.</p>
        )}
      </div>
    </main>
  )
}