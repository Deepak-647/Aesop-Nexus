import React, { useState } from "react";
import soap1 from "../assets/soap/soap_img1.avif";
import soap2 from "../assets/soap/soap_img2.webp";
import soap3 from "../assets/soap/soap_img3.avif";
import { AiOutlineArrowRight } from "react-icons/ai";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

const ForBody = () => {
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleScroll = (scrollAmount) => {
    const container = document.querySelector(".for-body-container");
    if (container) {
      const newScrollLeft = scrollLeft + scrollAmount;
      setScrollLeft(newScrollLeft);
      container.scrollLeft = newScrollLeft;
      console.log(scrollLeft)
    }
  };
  const soaps = [
    {
      img: soap1,
      name: "Nurture Bar Soap",
      desc: "Offers a mild yet effective cleanse",
    },
    {
      img: soap2,
      name: "Polish Bar Soap",
      desc: "Throughly cleanses and exfoliates skin",
    },
    {
      img: soap3,
      name: "Refresh Bar Soap",
      desc: "Offers a thorough and enlivening cleanse",
    },
  ];
  return (
    <>
      <div className="md:flex lg:flex justify-between items-center hidden">
        <div>
          {scrollLeft === 0 ? (
            ""
          ) : (
            <button
              className="absolute   left-0"
              onClick={() => handleScroll(-600)}
            >
              <div className="bg-black p-6 text-white">
                <IoIosArrowBack size={30} />
              </div>
            </button>
          )}
        </div>

        <div className="for-body-container">
          <div className="mt-24 ml-20 w-[35%] flex-shrink-0">
            <p className="font-semibold my-4">For the body</p>
            <p className="text-2xl my-2">An expression of care</p>
            <p className="my-6 break-normal text-lg">
              Aesop formulations offer the body deserving care, to cleanse,
              replenish, and nourish skin. Each product is a sensory pleasure to
              use with its own delightful aroma.
            </p>
            <div className="flex items-center justify-between w-[30%]">
              <p>See all Body Care</p>
              <AiOutlineArrowRight />
            </div>
          </div>

          <div className="flex mt-60">
            {soaps.map((soap) => (
              <div className="flex flex-col items-center flex-shrink-0">
                <img src={soap.img} alt="soap" className="h-80" />
                <p className="text-lg font-semibold">{soap.name}</p>
                <p className="text-base  ">{soap.desc}</p>
              </div>
            ))}
          </div>
        </div>
        <div>
          {scrollLeft > 0 ? (
            ""
          ) : (
            <button
              className="absolute right-0"
              onClick={() => handleScroll(600)}
            >
              <div className="bg-black p-6 text-white">
                <IoIosArrowForward size={30} />
              </div>
            </button>
          )}
        </div>
      </div>

      {/* Mobile Responsive */}

      <div className="flex flex-col md:hidden lg:hidden">
        <div className="mt-24 ml-20   flex-shrink-0">
          <p className="font-semibold my-4">For the body</p>
          <p className="text-2xl my-2">An expression of care</p>
          <p className="my-6 break-normal text-lg">
            Aesop formulations offer the body deserving care, to cleanse,
            replenish, and nourish skin. Each product is a sensory pleasure to
            use with its own delightful aroma.
          </p>
          <div className="flex items-center justify-between w-[30%]">
            <p>See all Body Care</p>
            <AiOutlineArrowRight />
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div>
            {scrollLeft === 0 ? (
              ""
            ) : (
              <button
                className="absolute left-0"
                onClick={() => handleScroll(-400)}
              >
                <div className="bg-black p-6 text-white">
                  <IoIosArrowBack size={30} />
                </div>
              </button>
            )}
          </div>
          <div className="flex mt-10 for-body-container">
            {soaps.map((soap) => (
              <div className="flex flex-col items-center flex-shrink-0">
                <img src={soap.img} alt="soap" className="h-80" />
                <p className="text-lg font-semibold">{soap.name}</p>
                <p className="text-base  ">{soap.desc}</p>
              </div>
            ))}
          </div>
          <div>
            {scrollLeft >= 600 ? (
              ""
            ) : (
              <button
                className="absolute right-0"
                onClick={() => handleScroll(400)}
              >
                <div className="bg-black p-6 text-white">
                  <IoIosArrowForward size={30} />
                </div>
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ForBody;
