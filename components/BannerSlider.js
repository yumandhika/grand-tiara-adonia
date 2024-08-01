'use client'
import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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

  const banners = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1599423300746-b62533397364?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTc3M3wwfDF8c2VhcmNofDR8fHJlYWwlMjBlc3RhdGV8ZW58MHx8fHwxNjM3NDI1NzA1&ixlib=rb-1.2.1&q=80&w=1080',
      title: 'Welcome to Real Estate Co.',
      description: 'Find your dream property with us',
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTc3M3wwfDF8c2VhcmNofDJ8fHJlYWwlMjBlc3RhdGV8ZW58MHx8fHwxNjM3NDI1NzA1&ixlib=rb-1.2.1&q=80&w=1080',
      title: 'Luxury Properties',
      description: 'Discover our exclusive listings',
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTc3M3wwfDF8c2VhcmNofDN8fHJlYWwlMjBlc3RhdGV8ZW58MHx8fHwxNjM3NDI1NzA1&ixlib=rb-1.2.1&q=80&w=1080',
      title: 'Your Next Investment',
      description: 'Invest in prime locations',
    },
  ];

  return (
    <div className="banner-slider">
      <Slider {...settings}>
        {banners.map(banner => (
          <div key={banner.id} className="relative">
            <img src={banner.image} alt={`Banner ${banner.id}`} className="w-full h-[600px] object-cover" />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center text-white px-4">
              <h2 className="text-4xl font-bold mb-2">{banner.title}</h2>
              <p className="text-xl">{banner.description}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default BannerSlider;
