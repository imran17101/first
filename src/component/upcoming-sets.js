import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';               // Import thNe core Swiper styles
import 'swiper/css/navigation';    // Import navigation styles
import productImage from '../images/product-image.png';

export default function UpcomingSets () {
  const cardData = [
    {
      title: 'Bloomburrow',
      description: 'Magic: The Gathering',
      image: (productImage), // Replace with actual image path
    },
    {
      title: '25th Anniversary Tin: Dueling Mirrors',
      description: 'Magic: The Gathering',
      image: (productImage), // Replace with actual image path
    },
    {
      title: 'SV07: Stellar Crown',
      description: 'Magic: The Gathering',
      image: (productImage), // Replace with actual image path
    },
    {
      title: 'Dimensional Transcendence',
      description: 'Cardfight Vanguard',
      image: (productImage), // Replace with actual image path
    },
    {
      title: 'SV07: Stellar Crown',
      description: 'Magic: The Gathering',
      image: (productImage), // Replace with actual image path
    },
    {
      title: 'Dimensional Transcendence',
      description: 'Cardfight Vanguard',
      image: (productImage), // Replace with actual image path
    },
  ];

  return (
    <div className="slider-container">
      <h2 className="slider-title"><span>Upcoming</span> Sets</h2>
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        navigation={true} // Enable prev/next arrows
        modules={[Navigation]} // Pass Navigation module here
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          450: {
            slidesPerView: 2,
          },
          991: {
            slidesPerView: 3,
          },
          1100: {
            slidesPerView: 4,
          },
        }}
      >
        {cardData.map((card, index) => (
          <SwiperSlide key={index}>
            <div className="slider-item">
              <img src={card.image} alt={card.title} className="slider-image" />
              <div className="slider-content">
                <h3>{card.title}</h3>
                <p>{card.description}</p>
                <button className="shop-now upcoming-btn">Upcoming</button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

