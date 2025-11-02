// app/signup/page.js
'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { Lock, Mail, User } from 'lucide-react'

// Validation Schema for Signup
const SignupSchema = Yup.object().shape({
  fullName: Yup.string().required('Full name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Please confirm your password'),
})

export default function SignupPage() {
  const formik = useFormik({
    initialValues: {
      fullName: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: SignupSchema,
    onSubmit: (values) => {
      // This is where you would call Firebase Auth to create a new user
      console.log('New User:', values)
      alert('Signup successful! (Check console for values)')
    },
  })

  // Helper component for Formik inputs
  const FormInput = ({ formik, name, type, placeholder, icon }) => (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-foreground/70 sr-only">{placeholder}</label>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          {icon}
        </div>
        <input
          id={name}
          name={name}
          type={type}
          placeholder={placeholder}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values[name]}
          className={`w-full pl-10 pr-4 py-3 bg-background-soft border rounded-lg text-foreground placeholder-gray-400 focus:outline-none focus:ring-2 ${formik.touched[name] && formik.errors[name] ? 'border-red-500 ring-red-500' : 'border-border focus:ring-wine'}`}
        />
      </div>
      {formik.touched[name] && formik.errors[name] ? (
        <p className="mt-1 text-sm text-red-600">{formik.errors[name]}</p>
      ) : null}
    </div>
  )

  return (
    <div className="min-h-screen flex bg-background text-foreground">
      {/* Left Side - Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          <div className="mb-8">
            <Link href="/" className="text-4xl font-bold text-wine-DEFAULT mb-2">Eventra</Link>
            <p className="text-foreground/70">Create your account to get started.</p>
          </div>

          <form onSubmit={formik.handleSubmit} className="space-y-4">
            <FormInput
              formik={formik}
              name="fullName"
              type="text"
              placeholder="Full Name"
              icon={<User className="h-5 w-5 text-gray-400" />}
            />
            <FormInput
              formik={formik}
              name="email"
              type="email"
              placeholder="Email Address"
              icon={<Mail className="h-5 w-5 text-gray-400" />}
            />
            <FormInput
              formik={formik}
              name="password"
              type="password"
              placeholder="Password"
              icon={<Lock className="h-5 w-5 text-gray-400" />}
            />
            <FormInput
              formik={formik}
              name="confirmPassword"
              type="password"
              placeholder="Confirm Password"
              icon={<Lock className="h-5 w-5 text-gray-400" />}
            />

            <button
              type="submit"
              className="w-full bg-wine-DEFAULT text-white py-3 rounded-lg hover:bg-wine-dark font-semibold transition-colors mt-2"
            >
              Create Account
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
              <span>Sign up with Google</span>
            </button>
          </form>

          <p className="mt-8 text-center text-foreground/70">
            Already have an account?{' '}
            <Link href="/login" className="text-wine-DEFAULT font-semibold hover:underline">
              Log In
            </Link>
          </p>
        </div>
      </div>

      {/* Right Side - Image */}
      <div className="hidden lg:block lg:w-1/2 relative">
        <Image
          src="https://images.unsplash.com/photo-1595880343463-9a00b0d39c0f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
          alt="Wedding signup"
          fill
          className="object-cover"
        />
      </div>
    </div>
  )
}