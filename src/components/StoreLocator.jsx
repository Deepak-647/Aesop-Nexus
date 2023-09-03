import React, { useState } from "react";
import { AiOutlineArrowRight } from 'react-icons/ai';
import {IoIosArrowBack , IoIosArrowForward} from 'react-icons/io'
import store1 from '../assets/stores/store1.avif';
import store2 from '../assets/stores/store2.avif';
import store3 from '../assets/stores/store3.jpg';

const StoreLocator = () => {
  const stores = [
    {
      img: store1,
      name: "Aesop Fashion Walk"
    },
    {
      img: store2,
      name: "Aesop Aesop MOKO"
    },
    {
      img: store3,
      name: "Aesop ifc mall"
    },
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNextClick = () => {
    const nextIndex = (currentImageIndex + 1) % stores.length;
    setCurrentImageIndex(nextIndex);
  };

  const handlePrevClick = () => {
    const prevIndex = (currentImageIndex - 1 + stores.length) % stores.length;
    setCurrentImageIndex(prevIndex);
  };

  return (
    <div className="flex md:flex-row lg:flex-row flex-col w-full h-screen items-center mt-20 md:mt-0 lg:mt-0">
      <div className="flex flex-col md:w-[40%] lg:w-[40%] mr-40 ml-20 ">
      <p className="font-semibold text-3xl my-2">Store Locator</p>
      
        <p className="font-medium text-lg my-4">Our consultants are available to host you in-store and provide tailored guidance on gift purchases. </p>
        <div className="flex items-center justify-between border border-gray-300 p-4 w-[70%] my-4 hover:bg-black hover:text-white hover:cursor-pointer">
            <p className="text-lg">Find a near by store</p>
            <AiOutlineArrowRight />
        </div>
      </div>
      <div className="md:w-[60%] lg:w-[60%] flex items-center">
        <div className="flex items-center">
          <div className="carousel-slide">
          <button onClick={handlePrevClick}>
          <div className="carousel-button carousel-button-left p-4"><IoIosArrowBack size={30}/></div>
          </button>
          <div className="flex flex-col items-center">
          <img
            src={stores[currentImageIndex].img}
            alt="athenaeum"
            className="w-[100%] carousel-image"
          />
          <p className="my-4 text-lg font-bold text-gray-600 border-t-2 border-black">{stores[currentImageIndex].name}</p>
          </div>
          
          <button onClick={handleNextClick}>
          <div className="carousel-button carousel-button-right p-4"><IoIosArrowForward size={30}/></div>
          </button>
          </div>
          
        </div>
        
      </div>
    </div>
  );
};

export default StoreLocator;
