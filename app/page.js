// app/page.js
import Image from 'next/image'
import Link from 'next/link'
import NavbarWithSearch from '@/components/NavbarWithSearch' // <-- This is the corrected import
import Footer from '@/components/Footer' // <-- This is also corrected
import { vendors, categories } from '@/data/mockData'
import * as Icons from 'lucide-react'

// Helper function to get icon component by name
const Icon = ({ name, ...props }) => {
  const LucideIcon = Icons[name];
  if (!LucideIcon) {
    return <Icons.HelpCircle {...props} />; // Fallback icon
  }
  return <LucideIcon {...props} />;
};

// Vendor Card Component
function VendorCard({ vendor }) {
  return (
    <Link href={`/services/${vendor.id}`} className="block group">
      <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl">
        <div className="relative h-48 w-full">
          <Image
            src={vendor.imageUrl}
            alt={vendor.name}
            layout="fill"
            objectFit="cover"
            className="transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-900 mb-1 truncate">{vendor.name}</h3>
          <p className="text-sm text-gray-500 mb-2">{vendor.category}</p>
          <div className="flex items-center">
            <Icons.Star className="h-4 w-4 text-yellow-400 fill-current" />
            <span className="text-sm text-gray-700 ml-1">{vendor.rating}</span>
            <span className="text-sm text-gray-500 ml-1">({vendor.reviews} reviews)</span>
          </div>
        </div>
      </div>
    </Link>
  )
}

// Category Card Component
function CategoryCard({ category }) {
  return (
    <Link href={`/search?category=${category.name}`} className="block group">
      <div className="flex flex-col items-center justify-center bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
        <Icon name={category.icon} className="h-10 w-10 text-primary mb-3" />
        <span className="text-md font-semibold text-gray-800">{category.name}</span>
      </div>
    </Link>
  )
}

// Main Landing Page
export default function Home() {
  const featuredVendors = vendors.slice(0, 4); // Get first 4 vendors

  return (
    <div className="bg-gray-50">
      <NavbarWithSearch />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Hero Section */}
        <div
          className="relative w-full h-64 md:h-96 bg-cover bg-center rounded-2xl overflow-hidden mb-16"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1505238680356-667803448bb6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80')" }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white text-center px-4">
              Find Your Perfect Vendor
            </h1>
          </div>
        </div>

        {/* Categories Section */}
        <section id="categories" className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Browse by Category</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
            {categories.map((cat) => (
              <CategoryCard key={cat.name} category={cat} />
            ))}
          </div>
        </section>

        {/* Featured Vendors Section */}
        <section id="vendors">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Featured Vendors</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredVendors.map((vendor) => (
              <VendorCard key={vendor.id} vendor={vendor} />
            ))}
          </div>
        </section>

      </main>

      <Footer />
    </div>
  )
}