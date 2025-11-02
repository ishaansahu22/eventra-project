import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
})

export const metadata = {
  title: 'Eventra - Your Perfect Wedding in Bihar',
  description: 'Find and book trusted wedding vendors in Bihar.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full">
      <body className={`${inter.variable} h-full antialiased font-sans bg-background text-foreground`}>
        {children}
      </body>
    </html>
  )
}