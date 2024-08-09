import { Contact } from '@/constants/contact';
import Image from 'next/image';
import React from 'react';

const AboutSection = () => {
  return (
    <section className=''>
      <div className='flex flex-col md:flex-row lg:flex-row h-[100vh]'>
        <div className='w-full content-center'>
          <div className='bg-darkGreen w-[50%] h-[50%] mx-auto relative'>
            <Image 
              src={Contact.logo} 
              alt=''
              layout='fill'
              objectFit='cover'
            />
          </div>
        </div>
        <div className='w-full content-center'>
          <div className='flex flex-col space-y-2 px-8'>
            <span className='text-xl'>Welcome To</span>
            <span className='text-4xl font-semibold'>{Contact.name}</span>
            <span className=''>{Contact.description}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;