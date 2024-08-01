'use client'

import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-[#ffba5d] shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/">
              <span className="text-2xl font-bold text-gray-800">Grand Tiara Adonia.</span>
            </Link>
          </div>
          <div className="hidden md:flex space-x-8 items-center">
            <Link href="/about">
              <span className="text-gray-800 hover:text-gray-600">About Us</span>
            </Link>
            <Link href="/services">
              <span className="text-gray-800 hover:text-gray-600">Services</span>
            </Link>
            <Link href="/properties">
              <span className="text-gray-800 hover:text-gray-600">Properties</span>
            </Link>
            <Link href="/contact">
              <span className="text-gray-800 hover:text-gray-600">Contact</span>
            </Link>
          </div>
          <div className="flex md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-800 focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}></path>
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link href="/about">
            <span className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:bg-gray-200">About Us</span>
          </Link>
          <Link href="/services">
            <span className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:bg-gray-200">Services</span>
          </Link>
          <Link href="/properties">
            <span className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:bg-gray-200">Properties</span>
          </Link>
          <Link href="/contact">
            <span className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:bg-gray-200">Contact</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}
