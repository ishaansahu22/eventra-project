// app/search/page.js
import { Suspense } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import SearchContent from './SearchContent' // <-- Import the new component

// This is a simple loading UI to show while the client component loads
function Loading() {
  return (
    <main className="container-xl py-12 text-center">
      <h1 className="text-4xl font-bold text-foreground mb-4">Loading Vendors...</h1>
      <p className="text-lg text-foreground/70">Finding the best matches for you.</p>
    </main>
  )
}

// This is now a Server Component
export default function SearchPage() {
  return (
    <div className="min-h-screen bg-background-soft">
      <Navbar />
      <Suspense fallback={<Loading />}> {/* <-- This is the Suspense boundary */}
        <SearchContent /> {/* <-- This is your client component */}
      </Suspense>
      <Footer />
    </div>
  )
}