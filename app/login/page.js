// app/login/page.js
'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { Lock, Mail } from 'lucide-react'

// Validation Schema
const LoginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
})

export default function LoginPage() {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: LoginSchema,
    onSubmit: (values) => {
      console.log('Login:', values)
      alert('Login successful! (Check console for values)')
    },
  })

  return (
    <div className="min-h-screen flex bg-background text-foreground">
      {/* Left Side - Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          <div className="mb-8">
            <Link href="/" className="text-4xl font-bold text-wine-DEFAULT mb-2">Eventra</Link>
            <p className="text-foreground/70">Welcome back! Please enter your details.</p>
          </div>

          <form onSubmit={formik.handleSubmit} className="space-y-4">
            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-foreground/70 sr-only">Email</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Email Address"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                  className={`w-full pl-10 pr-4 py-3 bg-background-soft border rounded-lg text-foreground placeholder-gray-400 focus:outline-none focus:ring-2 ${formik.touched.email && formik.errors.email ? 'border-red-500 ring-red-500' : 'border-border focus:ring-wine'}`}
                />
              </div>
              {formik.touched.email && formik.errors.email ? (
                <p className="mt-1 text-sm text-red-600">{formik.errors.email}</p>
              ) : null}
            </div>

            {/* Password Field */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-foreground/70 sr-only">Password</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Password"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.password}
                  className={`w-full pl-10 pr-4 py-3 bg-background-soft border rounded-lg text-foreground placeholder-gray-400 focus:outline-none focus:ring-2 ${formik.touched.password && formik.errors.password ? 'border-red-500 ring-red-500' : 'border-border focus:ring-wine'}`}
                />
              </div>
              {formik.touched.password && formik.errors.password ? (
                <p className="mt-1 text-sm text-red-600">{formik.errors.password}</p>
              ) : null}
            </div>

            <div className="text-right">
              <Link href="/forgot-password" className="text-sm text-wine-DEFAULT hover:underline">
                Forgot Password?
              </Link>
            </div>

            <button
              type="submit"
              className="w-full bg-wine-DEFAULT text-white py-3 rounded-lg hover:bg-wine-dark font-semibold transition-colors"
            >
              Login
            </button>

            <div className="relative my-4">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-border"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-background text-foreground/50">OR</span>
              </div>
            </div>

            {/* Social Logins */}
            <button
              type="button"
              className="w-full border border-border py-3 rounded-lg hover:bg-background-soft flex items-center justify-center space-x-2 transition-colors text-foreground/90"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              <span>Continue with Google</span>
            </button>
          </form>

          <p className="mt-8 text-center text-foreground/70">
            Don't have an account?{' '}
            <Link href="/signup" className="text-wine-DEFAULT font-semibold hover:underline">
              Signup
            </Link>
          </p>
        </div>
      </div>

      {/* Right Side - Image */}
      <div className="hidden lg:block lg:w-1/2 relative">
        <Image
          src="https://images.unsplash.com/photo-1519741497674-611481863552"
          alt="Wedding decoration"
          fill
          className="object-cover"
        />
      </div>
    </div>
  )
}