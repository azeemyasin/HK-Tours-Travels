import React from "react";
import * as Icons from "@/components/global/Icons";

const Footer: React.FC = () => {
  return (
    <>
      <div className="bg-footer-bg lg:px-10 px-5 py-14 grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10 w-full">
        <div className="w-full">
          <h1 className="text-white font-work-sans text-[18px] font-normal">
            About Us
          </h1>
          <div className="w-full h-[1px] bg-gray-400 mt-3"></div>
          <div className="text-[#D2D2D2] font-work-sans text-base font-normal mt-5 sm:h-40 sm:mb-0 mb-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </div>
          <h1 className="text-white font-work-sans text-[18px] font-normal">
            Payments Accepted
          </h1>
          <div className="w-full h-[1px] bg-gray-400 mt-3"></div>
          <div className="flex items-center gap-5 mt-6">
            <button className="py-3 px-7 text-white font-work-sans text-base font-medium bg-transparent border border-white rounded-lg hover:bg-white hover:text-footer-bg transition-all ease-in-out duration-500">
              Visa
            </button>
            <button className="py-3 px-7 text-white font-work-sans text-base font-medium bg-transparent border border-white rounded-lg hover:bg-white hover:text-footer-bg transition-all ease-in-out duration-500">
              Paypal
            </button>
          </div>
        </div>
        <div className="w-full">
          <h1 className="text-white font-work-sans text-[18px] font-normal">
            Contact Us
          </h1>
          <div className="w-full h-[1px] bg-gray-400 mt-3"></div>
          <div className="mt-5 h-40 space-y-5">
            <div className="flex items-center gap-3 text-white">
              <div>
              <Icons.EmailIcon />
              </div>
              <p className="text-white font-work-sans text-[18px] font-normal">contact@hktech.com</p>
            </div>
            <div className="flex items-center gap-3 text-white">
              <div>
              <Icons.PhoneIcon />
              </div>
              <p className="text-white font-work-sans text-[18px] font-normal">+92 300 000 0000</p>
            </div>
            <div className="flex items-center gap-3 text-white">
              <div>
              <Icons.LocationIcon />
              </div>
              <p className="text-white font-work-sans text-[18px] font-normal">Location</p>
            </div>
          </div>
          <h1 className="text-white font-work-sans text-[18px] font-normal">
            Be Social
          </h1>
          <div className="w-full h-[1px] bg-gray-400 mt-3"></div>
          <div className="flex items-center gap-5 mt-6 fill-current text-[#69727D]">
            <Icons.FacebookIcon/>
            <Icons.TwitterIcon/>
            <Icons.InstagramIcon/>
          </div>
        </div>
        <div className="w-full">
          <h1 className="text-white font-work-sans text-[18px] font-normal">
            Recent Posts
          </h1>
          <div className="w-full h-[1px] bg-gray-400 mt-3"></div>
          <div className="mt-5">
            <h5 className="text-white font-work-sans text-base font-normal">Join us this weekend</h5>
            <p className="text-[#848484] font-work-sans text-[12px] font-normal">April 20,2017</p>
            <div className="w-full h-[1px] bg-gray-500 mt-2 mb-3"></div>
            <h5 className="text-white font-work-sans text-base font-normal">Do you love wildlife?</h5>
            <p className="text-[#848484] font-work-sans text-[12px] font-normal">April 15,2017</p>
            <div className="w-full h-[1px] bg-gray-500 mt-2 mb-3"></div>
            <h5 className="text-white font-work-sans text-base font-normal">We made the list!</h5>
            <p className="text-[#848484] font-work-sans text-[12px] font-normal">April 10,2017</p>
            <div className="w-full h-[1px] bg-gray-500 mt-2 mb-3"></div>
            <h5 className="text-white font-work-sans text-base font-normal">Amazing new video</h5>
            <p className="text-[#848484] font-work-sans text-[12px] font-normal">April 20,2017</p>
            <div className="w-full h-[1px] bg-gray-500 mt-2 mb-3"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
