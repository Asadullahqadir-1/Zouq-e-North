import { useState } from 'react'
import Link from 'next/link'
import { ShoppingCartIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold text-primary">Zouq-e-North</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/products" className="text-gray-700 hover:text-accent">
              Products
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-accent">
              About
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-accent">
              Contact
            </Link>
            <Link href="/cart" className="text-gray-700 hover:text-accent">
              <ShoppingCartIcon className="h-6 w-6" />
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-accent"
            >
              {isMenuOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              href="/products"
              className="block px-3 py-2 text-gray-700 hover:text-accent"
            >
              Products
            </Link>
            <Link
              href="/about"
              className="block px-3 py-2 text-gray-700 hover:text-accent"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="block px-3 py-2 text-gray-700 hover:text-accent"
            >
              Contact
            </Link>
            <Link
              href="/cart"
              className="block px-3 py-2 text-gray-700 hover:text-accent"
            >
              Cart
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
} 