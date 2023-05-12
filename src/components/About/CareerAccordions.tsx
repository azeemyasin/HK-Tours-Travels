import React, { useState } from "react";
import * as Icons from "@/components/global/Icons";
import cn from "classnames"
import { ICareerAccordions } from "@/Interface";
import { careerMockData } from "@/mock/AboutMockData";

const CareerAccordions = () => {
  const accordionsData: ICareerAccordions[] = careerMockData; 
  const [activeIndex, setActiveIndex] = useState(null);

  const handleAccordionClick = (index: any) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const renderAccordionsData = accordionsData.map(
    (items: ICareerAccordions, index: number) => {
      return (
        <React.Fragment key={`${items.id}${index}`}>
          <div key={index}>
            <div
              onClick={() => handleAccordionClick(index)}
              className="cursor-pointer"
            >
              <div className="flex items-center gap-5">
                <div className={cn("transition-all ease-in-out duration-500", {
                    'rotate-0': activeIndex !== index,
                    'rotate-90': activeIndex === index
                })}>
                <Icons.RightArrowIcon/>
                </div>
              <h3 className="font-work-sans text-lg font-medium">{items.careerTitle}</h3>
              </div>
            </div>
            <div className={cn("transition-all ease-in-out duration-500 overflow-hidden flex items-center", {
                'sm:h-28 h-40 border-b border-gray-400': activeIndex === index,
                'h-0': activeIndex !== index
            })}>{items.careerDesc}</div>
          </div>
        </React.Fragment>
      );
    }
  );
  return (
    <div className="bg-[#F7F5F5] py-20">
      <div className="flex flex-col items-center">
        <div>
          <Icons.BicycleIcon />
        </div>
        <h1 className="sm:text-4xl text-3xl font-work-sans text-black font-semibold mt-5">
          Careers With Us
        </h1>
        <p className="sm:text-base text-sm font-work-sans text-[#333333] font-normal md:w-1/2 sm:w-3/4 w-11/12 text-center mt-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis,
          nobis dolor sit amet consectetur adipisicing elit. Blanditiis, nobis.
        </p>
      </div>
      <div className="md:w-3/5 sm:w-4/5 w-11/12 mx-auto mt-10 space-y-8">{renderAccordionsData}</div>
    </div>
  );
};

export default CareerAccordions;
