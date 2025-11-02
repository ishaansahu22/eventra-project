// components/Footer.js
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 mt-24">
      <div className="container-xl py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {/* Company */}
          <div className="col-span-2 lg:col-span-1">
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">Company</h3>
            <ul className="mt-4 space-y-3">
              <li><Link href="/about" className="text-base text-gray-500 hover:text-gray-900">About</Link></li>
              <li><Link href="/careers" className="text-base text-gray-500 hover:text-gray-900">Careers</Link></li>
              <li><Link href="/press" className="text-base text-gray-500 hover:text-gray-900">Press</Link></li>
            </ul>
          </div>

          {/* For Vendors */}
          <div className="col-span-1">
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">For Vendors</h3>
            <ul className="mt-4 space-y-3">
              <li><Link href="/vendor/register" className="text-base text-gray-500 hover:text-gray-900">Get on Board</Link></li>
              <li><Link href="/vendor/login" className="text-base text-gray-500 hover:text-gray-900">Vendor Login</Link></li>
              <li><Link href="/partners" className="text-base text-gray-500 hover:text-gray-900">Partnerships</Link></li>
            </ul>
          </div>
          
          {/* Support */}
          <div className="col-span-1">
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">Support</h3>
            <ul className="mt-4 space-y-3">
              <li><Link href="/contact" className="text-base text-gray-500 hover:text-gray-900">Contact Us</Link></li>
              <li><Link href="/faq" className="text-base text-gray-500 hover:text-gray-900">FAQ</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div className="col-span-2 lg:col-span-1">
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">Legal</h3>
            <ul className="mt-4 space-y-3">
              <li><Link href="/privacy" className="text-base text-gray-500 hover:text-gray-900">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-base text-gray-500 hover:text-gray-900">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-gray-50 border-t border-gray-200">
        <div className="container-xl py-6 text-center md:text-left">
          <p className="text-sm text-gray-500">&copy; {new Date().getFullYear()} Eventra. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}