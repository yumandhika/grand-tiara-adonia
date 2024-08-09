'use client'

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Contact } from '@/constants/contact';
import { FaFacebookF, FaInstagram, FaPhone, FaTiktok, FaWhatsapp } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const sendMessageToWhatsApp = () => {
    const phoneNumber = Contact.phone; // Ganti dengan nomor WhatsApp Anda
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent()}`;
    window.open(whatsappUrl, '_blank');
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navbarItems = [
    {
      path: '/properties',
      label: 'Properties',
    },
    {
      path: '/about',
      label: 'About',
    },
  ]

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav  className={`duration-700 shadow-md space-y-5 border-b fixed w-full z-50 ${
      isScrolled ? 'bg-darkGreen' : 'bg-transparent'
    }`}>
      <div className='flex justify-between border-b'>
        <div className='flex md:ml-10 lg:ml-10'>
          <div className='border-x p-2 text-white'><FaFacebookF /></div>
          <div className='border-r p-2 text-white'><FaTiktok /></div>
          <div className='border-r p-2 text-white'><FaInstagram /></div>
        </div>
        <div className='flex md:mr-10 lg:mr-10'>
          <div className='flex text-xs space-x-2 items-center border-l p-2 text-white'>
            <IoIosMail />
            <span>{Contact.email}</span>
          </div>
          <div className='flex text-xs space-x-2 items-center border-x p-2 text-white'>
            <FaPhone />
            <span>{Contact.phone}</span>
          </div>
        </div>
      </div>
      <div className="max-w-7xl px-2 pt-1 pb-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/">
              <Image src={Contact.logo} alt="Gambar dari Google Drive" width={145} height={120} />
            </Link>
          </div>
          <div className="hidden md:flex space-x-8 items-center">
            {
              navbarItems.map((data, index) => (
                <Link href={data.path} key={index}>
                  <span className="text-white hover:text-gray-600 font-semibold">{data.label}</span>
                </Link>
              ))
            }
            <button
              onClick={sendMessageToWhatsApp}
              className="flex items-center space-x-2 px-2 py-1 bg-green-500 hover:bg-green-600 rounded text-white"
            >
              <span className='font'>Whatsapp</span>
              <FaWhatsapp/>
            </button>
          </div>
          <div className="flex md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none"
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
            {
              navbarItems.map((data, index) => (
                <Link href={data.path} key={index}>
                  <span className="text-white hover:text-gray-600">{data.label}</span>
                </Link>
              ))
            }
        </div>
      </div>
    </nav>
  );
}
