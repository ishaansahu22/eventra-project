// app/checkout/page.js
'use client'
import Link from 'next/link'
import { Lock, User, Mail, Phone } from 'lucide-react'
import { useFormik } from 'formik'
import * as Yup from 'yup'

// Validation Schema
const CheckoutSchema = Yup.object().shape({
  fullName: Yup.string().required('Full name is required'),
  phone: Yup.string().matches(/^[0-9]{10}$/, 'Must be a valid 10-digit phone number').required('Phone number is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
})

// Minimal Header for Checkout
function CheckoutHeader() {
  return (
    <header className="bg-background border-b border-border">
      <div className="container-xl py-4">
        <Link href="/" className="text-3xl font-bold text-primary">
          Eventra
        </Link>
      </div>
    </header>
  )
}

// Helper component for Form Inputs
const FormInput = ({ formik, name, label, type, placeholder }) => (
  <div>
    <label htmlFor={name} className="block text-sm font-medium mb-2 text-foreground/90">
      {label}
    </label>
    <input
      id={name}
      name={name}
      type={type}
      placeholder={placeholder}
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      value={formik.values[name]}
      className={`w-full px-4 py-3 bg-background-soft border rounded-lg text-foreground placeholder-gray-400 focus:outline-none focus:ring-2 ${formik.touched[name] && formik.errors[name] ? 'border-red-500 ring-red-500' : 'border-border focus:ring-primary'}`}
    />
    {formik.touched[name] && formik.errors[name] ? (
      <p className="mt-1 text-sm text-red-600">{formik.errors[name]}</p>
    ) : null}
  </div>
)

export default function CheckoutPage() {
  const formik = useFormik({
    initialValues: {
      fullName: '',
      phone: '',
      email: '',
    },
    validationSchema: CheckoutSchema,
    onSubmit: (values) => {
      console.log('Booking Details:', values)
      alert('Booking submitted! (Check console for values)')
    },
  })

  // Dummy data for order summary
  const order = {
    name: "Radiant Moments - Photography",
    subtotal: 50000,
    fees: 2500,
    total: 52500,
  }

  return (
    <div className="min-h-screen bg-background-soft">
      <CheckoutHeader />

      <div className="container-xl py-12 md:py-16">
        <h1 className="text-4xl font-bold text-center mb-2 text-foreground">Checkout</h1>
        <p className="text-center text-foreground/70 mb-12">
          Complete your booking by filling in your details below.
        </p>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left - Form */}
          <div>
            <h2 className="text-2xl font-bold mb-6 text-foreground/90">Your Details</h2>
            <form onSubmit={formik.handleSubmit} className="space-y-6">
              <FormInput
                formik={formik}
                name="fullName"
                label="Full Name"
                type="text"
                placeholder="e.g. Ramesh Kumar"
              />
              <FormInput
                formik={formik}
                name="phone"
                label="Phone Number"
                type="tel"
                placeholder="e.g. 9876543210"
              />
              <FormInput
                formik={formik}
                name="email"
                label="Email Address"
                type="email"
                placeholder="e.g. ramesh@example.com"
              />
            </form>
          </div>

          {/* Right - Order Summary */}
          <div>
            <h2 className="text-2xl font-bold mb-6 text-foreground/90">Order Summary</h2>
            <div className="bg-background rounded-lg p-6 shadow-sm border border-border">
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-1 text-foreground">{order.name}</h3>
                <p className="text-foreground/70">Full Day Booking</p>
              </div>

              <div className="space-y-3 pb-6 border-b border-border">
                <div className="flex justify-between text-foreground/70">
                  <span>Subtotal</span>
                  <span className="font-medium text-foreground">₹{order.subtotal.toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between text-foreground/70">
                  <span>Taxes & Fees</span>
                  <span className="font-medium text-foreground">₹{order.fees.toLocaleString('en-IN')}</span>
                </div>
              </div>

              <div className="flex justify-between text-xl font-bold mt-6 mb-6 text-foreground">
                <span>Total Amount</span>
                <span>₹{order.total.toLocaleString('en-IN')}</span>
              </div>

              <button
                type="submit"
                onClick={formik.handleSubmit} // Trigger formik submit
                className="w-full bg-primary text-white py-3.5 rounded-lg hover:bg-primary-dark font-semibold flex items-center justify-center space-x-2 transition-colors"
              >
                <Lock className="w-5 h-5" />
                <span>Proceed to Payment</span>
              </button>

              <p className="text-center text-sm text-foreground/50 mt-4">
                By proceeding, you agree to our{' '}
                <Link href="/terms" className="text-primary/80 underline">
                  Terms of Service
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}