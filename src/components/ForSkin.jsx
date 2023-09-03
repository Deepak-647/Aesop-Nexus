import React, { useState, useRef } from 'react';
import skincare1 from '../assets/skincare/skincare1.png';
import skincare2 from '../assets/skincare/skincare2.webp';
import skincare3 from '../assets/skincare/skincare3.webp';
import skincare4 from '../assets/skincare/skincare4.webp';
import skincare5 from '../assets/skincare/skincare5.webp';
import skincare6 from '../assets/skincare/skincare6.webp';
import skincare7 from '../assets/skincare/skincare7.webp';
import skincare8 from '../assets/skincare/skincare8.webp';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { AiOutlineArrowRight } from 'react-icons/ai';

const ForSkin = () => {
  const skincare = [
    {
      img: skincare1,
      name: 'Lucent Facial Concentrate',
      desc: 'A Vitamin C-rich layering serum',
      height : "500px"
    },
    {
      img: skincare2,
      name: 'Purifying Facial Cream Cleanser',
      desc: 'A daily cream cleanser for dry skin',
      height : "500px"
    },
    {
      img: skincare3,
      name: 'Camellia Nut Facial Hydrating Cream',
      desc: 'For normal, dry or sensitive skin',
      height : "300px"
    },
    {
      img: skincare4,
      name: 'Parsley Seed Anti-Oxidant Eye Cream',
      desc: 'Nourishes delicate skin around eyes',
      height : "200px"
    },
    {
      img: skincare5,
      name: 'B Triple C Facial Balancing Gel',
      desc: 'Anti-oxidant gel infused with Vitamin B and C',
      height : "300px"
    },
    {
      img: skincare6,
      name: 'Mandarin Facial Hydrating Cream',
      desc: 'Rapidly absorbed, lightly hydrating',
      height : "300px"
    },
    {
      img: skincare7,
      name: 'Parsley Seed Anti-Oxidant Intense Serum',
      desc: 'A hydrating serum to bolster skin',
      height : "400px"
    },
    {
      img: skincare8,
      name: 'Parsley Seed Facial Cleanser',
      desc: 'For those in polluted urban environments',
      height : "400px"
    },
  ];

  const [scrollPosition, setScrollPosition] = useState(0);
  const scrollContainerRef = useRef(null);

  const handleScroll = (scrollOffset) => {
    if (scrollContainerRef.current) {
      const newScrollPosition = scrollPosition + scrollOffset;
      setScrollPosition(newScrollPosition);
      scrollContainerRef.current.scrollTo({ left: newScrollPosition });
    }
  };

  return (
    <div className="flex items-center">
      <div>
        {scrollPosition > 0 ? <div className="bg-black p-6 text-white hover:cursor-pointer"  onClick={() => handleScroll(-600)}>
          <IoIosArrowBack
            size={30}
           
          />
        </div> :""}
        
      </div>
      <div className="flex"
      ref={scrollContainerRef}
      style={{
        overflowX: 'hidden', // Hide the scrollbar
       
        position: 'relative', // Needed for absolute positioning of arrows
        scrollBehavior: 'smooth', // Add smooth scrolling
      }}>
        <div className="mt-24 ml-20 w-[35%] flex-shrink-0">
          <p className="font-semibold my-4">For the skin</p>
          <p className="text-2xl my-2">Attention for all types</p>
          <p className="my-6 break-normal text-lg">
          The well-being of your skin is the product of hydration, nourishment, and protection through discerning rituals. Explore requisite skin care for all skin types.
          </p>
          <div className="flex items-center justify-between w-[30%]">
            <p>See all Skin Care</p>
            <AiOutlineArrowRight />
          </div>
        </div>

        <div className="flex mt-48 items-baseline">
          {skincare.map((skincareItem, index) => (
            <div className="flex flex-col items-center flex-shrink-0" key={index}>
              <img src={skincareItem.img} alt="soap"   style={{ height: skincareItem.height }}/>
              <p className="text-lg font-semibold">{skincareItem.name}</p>
              <p className='text-base'>{skincareItem.desc}</p>
            </div>
          ))}
        </div>
      </div>
      <div>
        {scrollPosition > 2400 ? "" :<div className="bg-black p-6 text-white hover:cursor-pointer" onClick={() => handleScroll(600)}>
          <IoIosArrowForward
            size={30}
              
          />
        </div>}
        
      </div>
    </div>
  );
};

export default ForSkin;

