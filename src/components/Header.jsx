import React from 'react' 
import {BiSearch} from 'react-icons/bi';


const Header = () => {
    const navElements = ["Skin Care","Body & Hand","Hair","Fragrance","Home","Kits & Travel","Gifts","Read","Stores","Facial Appointments",<BiSearch className='text-gray-600' size={25}/>]
    const mdNavElements =["Shop","Read","Stores",<BiSearch className='text-gray-600' size={20}/>]
    const navElements2 = ["Log in","Cabinet","Cart"]
  return (
    <div className='w-[100%]'>
        <div className='w-[100%] bg-gray-300 flex items-center justify-center p-2'>
            <p>Trained Aesop consultations are available to provide bespoke skin care advise.</p>
            <p className='mx-2 font-semibold hover:border-b hover:cursor-pointer border-black '><a href='/' >Book a video consultation</a></p>
        </div>
        <div className='w-[100%] bg-black flex items-center justify-center p-2'>
             <p className='text-white hover:border-b hover:cursor-pointer border-white'>Click and Collect is now available at Hong Kong stores. Enjoy complimentary shipping on orders over HK$400</p>
        </div>
         
         
                <div className='p-2 border border-b-black  justify-between hidden lg:flex'>
                    <ul className='flex items-center'>
                        {
                            navElements.map((element)=>(
                                <li className='p-2 m-2 font-semibold hover:border-b border-black hover:cursor-pointer '>{element}</li>
                            ))
                        }
                    </ul>
                    <ul className='flex'>
                        {
                            navElements2.map((element)=>(
                                <li className='p-2 m-2 font-semibold hover:border-b border-black hover:cursor-pointer'>{element}</li>
                            ))
                        }
                    </ul>
                </div>

            {/* For medium Screen */}
                <div className=' border border-b-black  justify-between hidden lg:hidden  md:flex'>
                    <ul className='flex items-center'>
                        {
                            mdNavElements.map((element)=>(
                                <li className='p-2 m-2 font-medium hover:border-b border-black hover:cursor-pointer text-gray-600'>{element}</li>
                            ))
                        }
                    </ul>
                    <ul className='flex'>
                        {
                            navElements2.map((element)=>(
                                <li className='p-2 m-2 font-medium hover:border-b border-black hover:cursor-pointer text-gray-600'>{element}</li>
                            ))
                        }
                    </ul>
                </div>
       
    </div>
  )
}

export default Header