import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { FiArrowUpRight } from "react-icons/fi";

const Footer = () => {
  return (
    <div className="bg-gray-900 lg:h-screen text-white mt-10">
      <div className="w-[100%] flex   lg:flex-row flex-col">
        <div className="lg:w-[40%]">
          <div className="p-8">
            <p className="lg:my-4">Subscribe to Aesop communications</p>
            <div className="bg-white h-0.5 lg:w-[80%]"></div>
            <div className="flex items-center my-4 justify-between p-4 border border-white w-[80%] ">
              <p>Email address</p>
              <AiOutlineArrowRight />
            </div>
            <p>
              Subscribe to receive communications from Aesop. By subscribing,
              you confirm you have read and understood our
              <span className="border-b border-white"> privacy policy</span>.
            </p>
          </div>
          <div className="lg:flex flex-col p-8 my-28 hidden">
            <p className="my-4">Sustainability</p>
            <div className="bg-white h-0.5 w-[80%]"></div>
            <p className="my-4">
              All Aesop products are vegan, and we do not test our formulations
              or ingredients on animals. We are Leaping Bunny approved and a
              Certified B Corporation. Learn more
            </p>
          </div>
        </div>

        <div className="flex flex-wrap lg:w-[60%]">
          <div className="lg:w-[25%] w-[50%] m-8">
            <p className="my-4">Orders and support</p>
            <div className="bg-white h-0.5 w-[100%]"></div>
            <div className="flex items-center my-4">
              <p>Contact us</p>
              <FiArrowUpRight size={15} />
            </div>
            <div className="flex items-center my-4">
              <p>FAQs</p>
              <FiArrowUpRight size={15} />
            </div>
            <div className="flex items-center my-4">
              <p>Shipping</p>
              <FiArrowUpRight size={15} />
            </div>
            <div className="flex items-center my-4">
              <p>Returns</p>
              <FiArrowUpRight size={15} />
            </div>
            <div className="flex items-center my-4">
              <p>Order history</p>
            </div>
            <div className="flex items-center my-4">
              <p>Terms and conditions</p>
            </div>
          </div>
          <div className="w-[25%] m-8">
            <p className="my-4">Services</p>
            <div className="bg-white h-0.5 w-[100%]"></div>
            <div className="flex items-center my-4">
              <p>Live assistance</p>
            </div>
            <div className="flex items-center my-4">
              <p>Corporate gifts</p>
            </div>
            <div className="flex items-center my-4">
              <p>Facial Appointments</p>
            </div>
            <div className="flex items-center my-4">
              <p>Click and Collect</p>
            </div>
            <div className="flex items-center my-4">
              <p>Video consultation</p>
            </div>
          </div>
          <div className="w-[25%] m-8">
            <p className="my-4">Location preferences</p>
            <div className="bg-white h-0.5 w-[100%]"></div>
            <div className="flex items-center my-4">
              <p>Shipping:</p>
            </div>
            <div className="flex items-center my-4">
              <p className="border-b border-white mb-4">Hong Kong SAR, China</p>
            </div>
            <div className="flex items-center my-4">
              <p>Language:</p>
            </div>
            <div className="flex items-center my-4">
              <p>English</p>
            </div>
            <div className="flex items-center my-4">
              <p>繁體中文</p>
            </div>
          </div>
          <div className="w-[25%] m-8">
            <p className="my-4">About</p>
            <div className="bg-white h-0.5 w-[100%]"></div>
            <div className="flex items-center my-4">
              <p>Our Story</p>
            </div>
            <div className="flex items-center my-4">
              <p>Foundation</p>
            </div>
            <div className="flex items-center my-4">
              <p>Careers</p>
            </div>
            <div className="flex items-center my-4">
              <p>Privicy policy</p>
            </div>
            <div className="flex items-center my-4">
              <p>Accessibilty</p>
            </div>
            <div className="flex items-center my-4">
              <p>Cookie Policy</p>
            </div>
          </div>
          <div className="w-[25%] m-8">
            <p className="my-4">Social media</p>
            <div className="bg-white h-0.5 w-[100%]"></div>
            <div className="flex items-center my-4">
              <p>Instagram</p>
              <FiArrowUpRight size={15} />
            </div>
            <div className="flex items-center my-4">
              <p>Twitter</p>
              <FiArrowUpRight size={15} />
            </div>
            <div className="flex items-center my-4">
              <p>LinkedIn</p>
              <FiArrowUpRight size={15} />
            </div>
            <div className="flex items-center my-4">
              <p>Facebook</p>
              <FiArrowUpRight size={15} />
            </div>
            <div className="flex items-center my-4">
              <p>WeChat</p>
              <FiArrowUpRight size={15} />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white h-0.5 w-full"></div>
      <div className="m-6">
        <span className="text-xl">&copy; Aesop</span>
      </div>
    </div>
  );
};

export default Footer;
