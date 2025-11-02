// app/page.js
import Image from 'next/image'
import Link from 'next/link'
import { Search, MapPin, ShieldCheck, Star, Users } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { categories } from '@/data/mockData'

export default function Home() {
  return (
    <div className="bg-background">
      <Navbar />

      <main>
        {/* === Hero Section === */}
        <div className="relative h-[600px] min-h-screen-safe">
          {/* Background Image */}
          <Image
            src="https://images.unsplash.com/photo-1523438097201-512ae7d59c44?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt="Wedding background"
            layout="fill"
            objectFit="cover"
            className="brightness-[.40]"
          />
          
          {/* Content */}
          <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
            <h1 className="text-5xl md:text-7xl font-bold mb-4">
              Plan Your Perfect Wedding in Bihar
            </h1>
            <p className="text-lg md:text-xl max-w-2xl mb-8">
              Find and book trusted wedding vendors for your special day with complete peace of
              mind and cultural grace.
            </p>

            {/* Search Bar */}
            <form className="w-full max-w-3xl bg-background/90 backdrop-blur-sm p-4 rounded-lg shadow-lg grid grid-cols-1 md:grid-cols-3 gap-3">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="What service are you looking for?"
                  className="w-full pl-10 pr-4 py-3 bg-background-soft border border-border rounded-md text-foreground placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                <select className="w-full appearance-none pl-10 pr-4 py-3 bg-background-soft border border-border rounded-md text-foreground focus:outline-none focus:ring-2 focus:ring-primary">
                  <option>Patna</option>
                  <option>Gaya</option>
                  <option>Muzaffarpur</option>
                  <option>Bhagalpur</option>
                </select>
              </div>
              <button
                type="submit"
                className="w-full bg-wine-DEFAULT text-white font-semibold py-3 px-6 rounded-md hover:bg-wine-dark transition-colors"
              >
                Search
              </button>
            </form>
          </div>
        </div>

        {/* === Your Dream Wedding, Made Easy === */}
        <section className="py-24 bg-background-soft">
          <div className="container-xl text-center">
            <h2 className="text-4xl font-bold mb-4 text-foreground">Your Dream Wedding, Made Easy</h2>
            <p className="text-lg text-foreground/70 mb-12 max-w-2xl mx-auto">
              Explore our curated selection of top-rated wedding services.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {categories.map((category) => (
                <Link key={category.name} href={category.href} className="group">
                  <div className="aspect-square w-full rounded-lg overflow-hidden shadow-md transform transition-transform duration-300 group-hover:-translate-y-2">
                    <Image
                      src={category.imageUrl}
                      alt={category.name}
                      width={300}
                      height={300}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-foreground/90 group-hover:text-primary transition-colors">{category.name}</h3>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* === How It Works === */}
        <section className="py-24 bg-background">
          <div className="container-xl text-center">
            <h2 className="text-4xl font-bold mb-4 text-foreground">How It Works</h2>
            <p className="text-lg text-foreground/70 mb-16 max-w-xl mx-auto">
              Planning your event is an easy as 1-2-3.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="flex flex-col items-center">
                <div className="bg-primary/10 p-5 rounded-full mb-6">
                  <Search className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold mb-2 text-foreground/90">1. Search & Discover</h3>
                <p className="text-foreground/70">
                  Find top-rated vendors by service and location to match your unique style and budget.
                </p>
              </div>
              <div className="flex flex-col items-center">
                <div className="bg-primary/10 p-5 rounded-full mb-6">
                  <Star className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold mb-2 text-foreground/90">2. Compare & Connect</h3>
                <p className="text-foreground/70">
                  Easily compare portfolios, reviews, and pricing. Contact vendors directly to get quotes.
                </p>
              </div>
              <div className="flex flex-col items-center">
                <div className="bg-primary/10 p-5 rounded-full mb-6">
                  <Users className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold mb-2 text-foreground/90">3. Book & Celebrate</h3>
                <p className="text-foreground/70">
                  Book your chosen vendors securely through our platform and focus on enjoying your special day.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* === Why Choose Eventra? === */}
        <section className="py-24 bg-background-soft">
          <div className="container-xl text-center">
            <h2 className="text-4xl font-bold mb-4 text-foreground">Why Choose Eventra?</h2>
            <p className="text-lg text-foreground/70 mb-16 max-w-2xl mx-auto">
              We are committed to making your celebration unforgettable.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-background p-8 rounded-lg shadow-sm text-left">
                <ShieldCheck className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-2xl font-semibold mb-2 text-foreground/90">Verified Vendors</h3>
                <p className="text-foreground/70">
                  Every vendor on our platform is carefully vetted to ensure quality and reliability for your peace of mind.
                </p>
              </div>
              <div className="bg-background p-8 rounded-lg shadow-sm text-left">
                <ShieldCheck className="h-10 w-10 text-primary mb-4" /> {/* Re-using icon, update as needed */}
                <h3 className="text-2xl font-semibold mb-2 text-foreground/90">Transparent Pricing</h3>
                <p className="text-foreground/70">
                  No hidden fees. Get clear, upfront pricing from vendors to help you stay within your budget.
                </p>
              </div>
              <div className="bg-background p-8 rounded-lg shadow-sm text-left">
                <ShieldCheck className="h-10 w-10 text-primary mb-4" /> {/* Re-using icon, update as needed */}
                <h3 className="text-2xl font-semibold mb-2 text-foreground/90">Comprehensive Choices</h3>
                <p className="text-foreground/70">
                  From venues to makeup artists, find everything you need in one place, with a wide range of options.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}