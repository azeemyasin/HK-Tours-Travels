import React from "react";
import * as Icons from "@/components/global/Icons";
import { IAdventureFacilities } from "@/Interface";
import { adventureFacilityData } from "@/mock/AdventuresMockData";

const TourFacilities: React.FC = () => {
  const adventuresFacilities: IAdventureFacilities[] = adventureFacilityData;

  const renderAdventuresFacilities = adventuresFacilities.map(
    (item: IAdventureFacilities, index: number) => {
      return (
        <React.Fragment key={`${item.id}${index}`}>
          <div className="flex gap-5">
            <div className="w-20">{item.facilityIcon}</div>
            <div>
              <h2 className="font-work-sans text-[22px] leading-7 font-semibold">
                {item.facilityTitle}
              </h2>
              <p className="font-work-sans text-base font-light text-[#333333] mt-2">
                {item.facilityDesc}
              </p>
            </div>
          </div>
        </React.Fragment>
      );
    }
  );
  return (
    <>
      <div className="py-14 w-11/12 mx-auto flex flex-col items-center">
        <h1 className="font-work-sans sm:text-[35px] sm:leading-10 text-2xl font-semibold">
          What&#39;s Included
        </h1>
        <p className="font-work-sans text-base sm:font-normal font-light text-[#333333] mt-4 text-center sm:w-4/5">
          Cras mattis consectetur purus sit amet fermentum. Vivamus sagittis
          lacus vel augue laoreet rutrum faucibus dolor auctor. Donec
          ullamcorper nulla non metus auctor fringilla. Sed posuere consectetur
          est at lobortis. Morbi leo risus, porta ac consectetur ac, vestibulum
          at eros
        </p>
        <div className="mt-14 grid sm:grid-cols-2 grid-cols-1 xl:gap-y-8 xl:gap-x-20 gap-10">
          {renderAdventuresFacilities}
        </div>
      </div>
      <div className="bg-[url(/images/adventures/img-1.jpg)] bg-cover bg-no-repeat bg-center py-20 flex sm:justify-end justify-center sm:px-0 px-3">
        <div className="w-96 bg-white rounded-xl p-7 xl:mr-32 sm:mr-20">
          <h1 className="font-work-sans text-3xl font-semibold">Save 25%</h1>
          <p className="font-work-sans text-base font-normal text-[#54595f] mt-5">
            We offer tours of new and old landmarks & attractions in Pakistan.
            Experience the best parts of this wonderful country &#34;that never
            sleep&#34; with fun for the whole family!
          </p>
          <button className="flex items-center gap-3 text-[#6772E5] fill-current mt-16">
            <p className="uppercase font-work-sans text-base font-semibold">view tours specials</p>
            <Icons.RightArrow/>
          </button>
        </div>
      </div>
      <div className="flex sm:flex-row flex-col gap-10 justify-center items-center py-12 sm:px-0 px-3 bg-black">
        <div className="text-white font-work-sans md:text-2xl text-xl font-normal sm:text-end text-center">
          Like what you see? Book your trip today!
        </div>
        <button className="uppercase bg-transparent text-white md:w-48 w-40 md:h-14 h-12 hover:bg-white border-2 border-white hover:text-black transition-all ease-in-out duration-500 rounded-lg font-work-sans text-[18px] font-semibold">
          book tour
        </button>
      </div>
    </>
  );
};

export default TourFacilities;
