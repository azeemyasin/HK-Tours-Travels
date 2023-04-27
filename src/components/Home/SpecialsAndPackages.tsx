import React from "react";

const SpecialsAndPackages: React.FC = () => {
  return (
    <>
      <div className="py-12 sm:px-0 px-2">
        <h1 className="text-[#28372F] font-yatra-one sm:text-[42px] text-3xl font-medium text-center">
          Specials & Packages
        </h1>
        <p className="text-[#54595F] font-work-sans text-base font-normal sm:w-[34rem] text-center mx-auto mt-4">
          For the present the throats of individuals ought to be significantly
          more watchman than the aggravation of the sickness, not the bow of
          chuckling
        </p>
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 xl:w-[74rem] gap-5 mt-10 mx-auto xl:px-0 lg:px-10 px-5">
          <div className="xl:w-96 flex flex-col items-center">
            <img
              src="/images/specials-1.jpg"
              alt=""
              className="rounded-tr-3xl rounded-tl-3xl"
            />
            <div className="lg:py-10 py-5 px-5 bg-[#F7F5F5] rounded-br-3xl rounded-bl-3xl">
              <p className="text-[#5C5C5C] font-work-sans lg:text-base text-sm font-normal">
                25% OFF
              </p>
              <h1 className="mt-5 text-[#28372F] font-work-sans lg:text-2xl text-xl font-semibold">
                Suspension Bridge
              </h1>
              <p className="mt-3 text-[#28372F] font-work-sans text-base font-normal">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          </div>
          <div className="xl:w-96 flex flex-col items-center">
            <img
              src="/images/specials-2.jpg"
              alt=""
              className="rounded-tr-3xl rounded-tl-3xl"
            />
            <div className="lg:py-10 py-5 px-5 bg-[#F7F5F5] rounded-br-3xl rounded-bl-3xl">
              <p className="text-[#5C5C5C] font-work-sans lg:text-base text-sm font-normal">
                $10 DISCOUNT
              </p>
              <h1 className="mt-5 text-[#28372F] font-work-sans lg:text-2xl text-xl font-semibold">
                Cliffwalk Thrill
              </h1>
              <p className="mt-3 text-[#28372F] font-work-sans text-base font-normal">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          </div>
          <div className="xl:w-96 flex flex-col items-center">
            <img
              src="/images/specials-3.jpg"
              alt=""
              className="rounded-tr-3xl rounded-tl-3xl"
            />
            <div className="lg:py-10 py-5 px-5 bg-[#F7F5F5] rounded-br-3xl rounded-bl-3xl">
              <p className="text-[#5C5C5C] font-work-sans lg:text-base text-sm font-normal">
                BUY 1 GET 1 FREE
              </p>
              <h1 className="mt-5 text-[#28372F] font-work-sans lg:text-2xl text-xl font-semibold">
                Treetop
              </h1>
              <p className="mt-3 text-[#28372F] font-work-sans text-base font-normal">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex sm:flex-row flex-col gap-10 justify-center items-center py-12 bg-primary md:px-0 px-5">
        <div className="text-white font-work-sans md:text-2xl text-xl font-normal md:text-end text-center">
          Like what you see? Check out more attractions.
        </div>
        <button className="uppercase bg-transparent text-white sm:w-48 w-40 sm:h-14 h-12 hover:bg-white border border-white hover:text-primary transition-all ease-in-out duration-500 rounded-lg font-work-sans sm:text-[18px] text-base font-semibold">
          buy tickets
        </button>
      </div>
    </>
  );
};

export default SpecialsAndPackages;
