// components/PropertyList.js
import { buildings } from '@/constants/buildings';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const properties = [
  {
    id: 1,
    title: 'Modern Family Home',
    description: 'A beautiful family home with 4 bedrooms and a large backyard.',
    price: '$450,000',
    image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTc3M3wwfDF8c2VhcmNofDJ8fHJlYWwlMjBlc3RhdGV8ZW58MHx8fHwxNjM3NDI1NzA1&ixlib=rb-1.2.1&q=80&w=1080',  
  },
  {
    id: 2,
    title: 'Luxury Villa',
    description: 'An elegant villa with stunning views and premium amenities.',
    price: '$1,200,000',
    image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTc3M3wwfDF8c2VhcmNofDJ8fHJlYWwlMjBlc3RhdGV8ZW58MHx8fHwxNjM3NDI1NzA1&ixlib=rb-1.2.1&q=80&w=1080',  
  },
  {
    id: 3,
    title: 'Urban Apartment',
    description: 'A stylish apartment located in the heart of the city.',
    price: '$300,000',
    image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTc3M3wwfDF8c2VhcmNofDJ8fHJlYWwlMjBlc3RhdGV8ZW58MHx8fHwxNjM3NDI1NzA1&ixlib=rb-1.2.1&q=80&w=1080',  
  }
];

const PropertyList = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-5xl font-bold text-center mb-8 border-b pb-4">Type Property</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {buildings.map((property, index) => (
            <Link href={`/properties/detail/${property.index}`}  key={property.index}>
              <div className="flex flex-col bg-white rounded-lg shadow-lg h-[500px] relative">
                <div className='w-full h-[100%] relative'>
                  <Image 
                    src={property.thumbnail}
                    alt={property.label} 
                    layout='fill'
                    objectFit='cover'
                    />
                </div>
                <div className="absolute bottom-0 w-full">
                  <div className="bg-black opacity-50 w-full h-full absolute"></div>
                  <h3 className="relative text-white p-4 text-4xl text-center font-semibold mb-2">
                    {property.label}
                  </h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PropertyList;
