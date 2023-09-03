import React from "react";
import {AiOutlineArrowRight} from 'react-icons/ai' 
import Athenaeum_img from '../assets/Athenaeum.jpg'

const ForAthenaeum = () => {
  return (
    <div className="flex md:flex-row lg:flex-row flex-col w-full h-screen items-center">
      <div className="flex flex-col md:w-[60%] lg:w-[40%] md:mr-40 lg:mr-40 md:ml-20 lg:ml-20 m-4">
        <p className="font-bold text-lg my-2">The Athenaeum</p>
        <p className="text-3xl  my-4"> The warm-up</p>
        <p className="font-medium text-lg my-4">In The Athenaeum, our digital reading room: a guide to ensuring a healthy complexion through the warmer months.</p>
        <div className="flex items-center justify-between border border-gray-300 p-4 w-[70%] my-4 hover:bg-black hover:text-white hover:cursor-pointer">
            <p className="text-lg">Read more</p>
            <AiOutlineArrowRight />
        </div>
      </div>
      <div className="md:w-[60%]">
        <img src={Athenaeum_img} alt="athenaeum" className="md:h-[60%]"/>
      </div>
    </div>
  );
};

export default ForAthenaeum;
