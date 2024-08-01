'use client'
import React, { useState } from 'react';

const FooterContact = () => {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const sendMessageToWhatsApp = () => {
    const phoneNumber = '+6282317070635'; // Ganti dengan nomor WhatsApp Anda
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      `Name: ${name}\nMessage: ${message}`
    )}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
            <p className="text-gray-400 mb-4">
              Have any questions? We’d love to hear from you. Contact us using
              the form below or via WhatsApp.
            </p>
            <div>
              <div className="mb-4">
                <label className="block text-gray-400 mb-2" htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full p-2 border border-gray-600 rounded bg-gray-700 text-white"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-400 mb-2" htmlFor="message">Message</label>
                <textarea
                  id="message"
                  className="w-full p-2 border border-gray-600 rounded bg-gray-700 text-white h-32"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>
              <button
                onClick={sendMessageToWhatsApp}
                className="px-4 py-2 bg-green-500 hover:bg-green-600 rounded text-white"
              >
                Send Message via WhatsApp
              </button>
            </div>
          </div>
          <div className="md:w-1/2 md:pl-8">
            <h2 className="text-4xl font-bold mb-4">Grand Tiara Adonia.</h2>
            <div className="">
            <a
              href="https://maps.app.goo.gl/imsXwzjbJmBpo2N67?g_st=ic"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full h-auto"
            >
              <img
                src="/images/map.jpeg"
                alt="Our Office Location"
                className="w-full h-auto rounded-lg shadow-lg"
              />
              </a>
            </div>
            <p className="text-gray-400 mb-4 pt-4 ">
              Jalan Cibolerang Jalan Cinunuk No.35, Cinunuk, Kec. Cileunyi, Kabupaten Bandung, Jawa Barat 40624<br/>
              Phone: (123) 456-7890<br />
              Email: contact@realestate.com
            </p>
            <h3 className="text-2xl font-bold mb-2">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.46 6c-.77.35-1.6.58-2.46.69.89-.53 1.57-1.38 1.88-2.39-.84.5-1.76.86-2.75 1.06a4.16 4.16 0 0 0-7.1 3.78A11.8 11.8 0 0 1 1.64 4.15a4.15 4.15 0 0 0 1.29 5.55c-.7-.02-1.37-.21-1.95-.53v.05a4.15 4.15 0 0 0 3.32 4.06c-.68.19-1.39.22-2.08.08a4.16 4.16 0 0 0 3.88 2.89A8.32 8.32 0 0 1 0 19.54a11.76 11.76 0 0 0 6.29 1.84c7.55 0 11.68-6.26 11.68-11.68 0-.18-.01-.36-.02-.54A8.35 8.35 0 0 0 24 5.64a8.24 8.24 0 0 1-2.37.65 4.15 4.15 0 0 0 1.82-2.29z" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.75 2h-15.5C3.01 2 2 3.01 2 4.25v15.5C2 20.99 3.01 22 4.25 22h7.9v-7.29H9.5v-2.84h2.65V9.26c0-2.63 1.57-4.07 3.94-4.07 1.12 0 2.08.08 2.36.12v2.74h-1.62c-1.27 0-1.52.61-1.52 1.5v1.96h3.03l-.39 2.84h-2.64V22h5.18C20.99 22 22 20.99 22 19.75v-15.5C22 3.01 20.99 2 19.75 2z" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.04c-5.51 0-9.96 4.45-9.96 9.96 0 5.51 4.45 9.96 9.96 9.96s9.96-4.45 9.96-9.96c0-5.51-4.45-9.96-9.96-9.96zM12 19.55c-4.17 0-7.55-3.38-7.55-7.55s3.38-7.55 7.55-7.55 7.55 3.38 7.55 7.55-3.38 7.55-7.55 7.55zM15.05 8.54c-.27-.27-.67-.29-.98-.07-.49.33-1.08.56-1.75.56-.67 0-1.26-.23-1.75-.56-.3-.22-.71-.2-.98.07s-.2.71.07.98c.72.48 1.56.82 2.65.82 1.09 0 1.93-.34 2.65-.82.27-.27.29-.67.07-.98zM12 7.1c-.48 0-.87-.39-.87-.87s.39-.87.87-.87.87.39.87.87-.39.87-.87.87z" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16.5 2h-9C5.57 2 5 2.57 5 3.25v17.5C5 21.43 5.57 22 6.25 22h11.5c.68 0 1.25-.57 1.25-1.25V3.25C17.75 2.57 17.18 2 16.5 2zM12 20.49c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM16 16H8V4h8v12z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterContact;