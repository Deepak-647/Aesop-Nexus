import React, { useState, useRef } from 'react';
import home1 from '../assets/home/home1.avif'
import home2 from '../assets/home/home2.webp'
import home3 from '../assets/home/home3.webp'
import home4 from '../assets/home/home4.webp'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { AiOutlineArrowRight } from 'react-icons/ai';

const ForHome = () => {
    const skincare = [
        {
          img: home1,
          name: 'Post-Poo Drops',
          desc: 'A botanical bathroom deodoriser',
          height : "400px"
        },
        {
          img: home2,
          name: 'Aganice Aromatique Candle',
          desc: 'Cardamom, Mimosa, Tobacco',
          height : "400px"
        },
        {
          img: home3,
          name: 'Bronze Incense Holder',
          desc: 'Suited to any interior ',
          height : "300px"
        },
        {
          img: home4,
          name: 'Murasaki Aromatique Incense',
          desc: 'For those who favour aromas of warm spice ',
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
        <p className="font-semibold text-lg my-4">For the home</p>
        <p className="text-3xl my-2">Domestic pleasures</p>
        <p className="my-6 break-normal text-lg">
        Our range of aromatic formulations for the home are practical and pleasing in equal measure.
        </p>
        <div className="flex items-center justify-between w-[30%]">
          <p className='text-lg'>See all Home</p>
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
  )
}

export default ForHome