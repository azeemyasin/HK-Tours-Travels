import React from "react";
import * as Icons from "@/components/global/Icons";
import { ITourBenefits } from "@/Interface";
import { tourBenefitsData } from "@/mock/AdventuresMockData";

const TourExperience: React.FC = () => {
  const tourBenefitsCards: ITourBenefits[] = tourBenefitsData;

  const renderTourBenefitsCards = tourBenefitsCards.map(
    (card: ITourBenefits, index: number) => {
      return (
        <React.Fragment key={`${card.id}${index}`}>
          <div className="flex flex-col items-center">
            {card.cardIcon}
            <h1 className="mt-4 font-work-sans xl:text-[25px] xl:leading-8 text-xl font-semibold text-center">
              {card.cardTitle}
            </h1>
            <p className="font-work-sans text-base font-light text-[#333333] mt-2 text-center">
              {card.cardDesc}
            </p>
          </div>
        </React.Fragment>
      );
    }
  );
  return (
    <>
      <div className="py-20 w-11/12 mx-auto flex flex-col items-center">
        <h1 className="font-work-sans sm:text-[35px] sm:leading-10 text-2xl font-semibold">
          Why Tour With Us?
        </h1>
        <p className="font-work-sans text-base font-light text-[#333333] mt-4 sm:w-3/4 text-center">
          Choose from our comprehensive list of guided, sightseeing, and family
          tours. We also offer group and corporate rates!
        </p>
        <div className="mt-20 grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5">
            {renderTourBenefitsCards}
        </div>
      </div>
    </>
  );
};

export default TourExperience;
