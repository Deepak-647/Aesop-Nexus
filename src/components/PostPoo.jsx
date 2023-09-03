import React from 'react'
import {AiOutlineArrowRight} from 'react-icons/ai'
import Postpoo_img from '../assets/Postpoo_img.avif'
const PostPoo = () => {
  return (
    <div className="flex md:flex-row lg:flex-row flex-col w-full h-screen items-center mt-20 md:mt-0 lg:mt-0">
      <div>
        <img src={Postpoo_img} alt="postpoo" />
      </div>
      <div className="flex flex-col md:w-[40%] lg:w-[40%] mr-40 ml-10 md:ml-20 lg:ml-20">
         
        <p className="text-4xl  my-4"> Post-Poo Drops has returned</p>
        <p className="font-medium text-lg my-4">Here to make the malodorous melodious once again. Dispense this favoured formulation into the toilet bowl after flushing to effectively mask disagreeable odours.</p>
        <div className="flex items-center justify-between border border-gray-300 p-4 w-[70%] my-4 hover:bg-black hover:text-white hover:cursor-pointer">
            <p className='font-semibold'>Discover Post-Poo Drops</p>
            <AiOutlineArrowRight />
        </div>
      </div>
    </div>
  )
}

export default PostPoo