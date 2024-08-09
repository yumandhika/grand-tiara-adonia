'use client'
import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { banners } from '@/constants/banners';

const BannerSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <div className="banner-slider">
      <Slider {...settings}>
        {banners.map(banner => (
          <div key={banner.id} className="relative">
            <img src={banner.image} alt={`Banner ${banner.id}`} className="w-full h-[100vh] object-cover" />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end pb-12 items-start text-center text-white px-4">
              <h2 className="text-4xl lg:text-8xl md:text-8xl font-bold mb-2">{banner.title}</h2>
              <p className="text-xl lg:text-2xl md:text-2xl">{banner.description}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default BannerSlider;
