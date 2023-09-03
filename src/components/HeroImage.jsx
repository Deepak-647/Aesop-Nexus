import React, { useState } from "react";
import cover from "../assets/cover.avif";
import mobileCover from "../assets/mobilecover.avif";
import logo from "../assets/logo.png";
import logoBlack from "../assets/logo_black.png";

import { AiOutlineArrowRight, AiOutlineHeart } from "react-icons/ai";
import { useMediaQuery } from "react-responsive";
import { BiSearch } from "react-icons/bi";
import { HiMenuAlt4 } from "react-icons/hi";
import { RxCross2 } from "react-icons/rx";
import { IoIosArrowForward } from "react-icons/io";


const HeroImage = () => {
  const [showToggle,setShowToggle] = useState(false);
  const isSmallerThanMd = useMediaQuery({ maxWidth: 645 }); 

  const handleToggle = ()=>{
    if(showToggle === false){
      setShowToggle(true)
    }else{
      setShowToggle(false)
    }
    

  }
  const mobNavbar = [
    <BiSearch size={20} />,
    <AiOutlineHeart size={20} />,
    "Cart",
    <HiMenuAlt4 size={20} onClick={handleToggle}  />,
  ];
  const toggleNavBar = [
    <BiSearch size={20} />,
    <AiOutlineHeart size={20} />,
    "Cart",
    <RxCross2 size={20} className="text-black" onClick={handleToggle}/>,
  ];
  const toggleMenu = [
    "Skin Care",
    "Body & Hand",
    "Hair",
    "Fragrance",
    "Home",
    "Kits & Travel",
    "Gifts",
  ];
  const toggleMenu2 = [
    "Read",
    "Stores",
    "Facial Appointment",
    "Log in",
    "Live assistance",
  ];
   
  return (
    <>
      {/* For medium and large screens */}
      <div className={`relative h-screen ${isSmallerThanMd ? "hidden" : ""}`}>
        <img
          src={cover}
          alt="Cover"
          className="w-full object-cover lg:h-[90vh] md:h-[70vh]"
        />

        <div className="absolute top-0 left-0 lg:w-[50%]  md:w-[75%] h-full flex">
          <div className="md:flex  m-2">
            <img src={logo} alt="logo" className="h-10 ml-6 mt-28" />
            <div className="mt-28 ml-20 w-[60%]">
              <div className="text-white">
                <p className="p-2 font-medium md:font-small ">Bar Soaps</p>
                <p className="p-2  md:font-small text-4xl">
                  A body care classic, reimagined
                </p>
                <p className="p-2 font-medium md:font-small text-lg">
                  Breathing new life into the humble bar soap are Nurture,
                  Polish and Refresh—three additions to the range, each
                  imparting a unique constellation of benefits.
                </p>
              </div>
              <div className=" flex items-center justify-between border border-white text-white w-[60%] p-4 mx-2 my-6 hover:bg-white hover:text-black hover:cursor-pointer">
                <p className="pr-4">Discover Bar Soaps</p>
                <AiOutlineArrowRight />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* For smaller screens */}
      <div className="lg:hidden md:hidden relative">
        <img src={mobileCover} alt="Cover" className="w-full object-cover" />
        <div className="absolute top-0 left-0 w-full flex">
          <div className="flex justify-between my-4 mx-2 w-[100%]">
            <img src={logo} alt="logo" className="h-7 m-2" />
            <ul className="flex justify-center items-center">
              {mobNavbar.map((item) => (
                <li className="text-white mx-4 text-base font-semibold hover:cursor-pointer">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      {/* Toggle Menu */}
      
      {showToggle ? 
      <div className="absolute top-0 left-0 bg-white h-[70%] w-full lg:hidden md:hidden ">
        <div className="flex m-4 justify-between">
          <img src={logoBlack} alt="logo" className="h-6" />
          <ul className="flex items-center">
            {toggleNavBar.map((item) => (
              <li className="text-base mx-4 hover:cursor-pointer font-medium text-gray-600">
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-8">
          <div>
            <ul className="flex flex-col   justify-between">
              {toggleMenu.map((item) => (
                <div className="flex justify-between items-center p-2  hover:cursor-pointer border-y border-gray-300">
                  <li className="text-lg mx-4">{item}</li>
                  <IoIosArrowForward className="text-gray-600 mx-4 hover:text-black hover:text-lg" />
                </div>
              ))}
            </ul>
          </div>
          <div className="m-8 ">
            <ul className="flex   flex-wrap hover:cursor-pointer ">
              {toggleMenu2.map((item) => (
                <li className=" m-2  hover:border-b-2 border-black">{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div> : ""}

      <div className="flex flex-col bg-zinc-800 text-white lg:hidden md:hidden">
        <div>
        <p className="p-2 font-medium md:font-small ">Bar Soaps</p>
                <p className="p-2 font-medium md:font-small text-3xl">
                  A body care classic, reimagined
                </p>
                <p className="p-2 font-medium md:font-small text-base">
                  Breathing new life into the humble bar soap are Nurture,
                  Polish and Refresh—three additions to the range, each
                  imparting a unique constellation of benefits. 
                </p>
        </div>
        <div className="flex items-center justify-between border border-white text-white w-[60%] p-4 mx-2 my-6 hover:bg-white hover:text-black hover:cursor-pointer">
                <p className="pr-4">Discover Bar Soaps</p>
                <AiOutlineArrowRight />
              </div>
      </div>
    </>
  );
};

export default HeroImage;
