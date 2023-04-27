import React from "react";
import * as Icons from "@/components/global/Icons";
import TourDetails from "@/components/Home/TourDetails";

const AboutSection: React.FC = () => {
  return (
    <>
      <div className="flex flex-col items-center sm:pt-10 pt-5 sm:pb-14 pb-8 lg:px-0 md:px-10 px-5">
        <div className="text-secondary fill-current">
          <Icons.AboutIcon />
        </div>
        <h1 className="font-yatra-one font-medium lg:text-[42px] text-4xl text-[#28372F] uppercase mt-4">
          about us
        </h1>
        <p className="font-work-sans font-normal lg:text-base text-sm text-[#54595F] lg:w-[50rem] text-center mt-4">
          HK Travel and Tours is one of the main Visit Administrators in
          Pakistan, offering complete types of assistance for gatherings and
          people from and to the country. HK Travel and Tours was first settled
          in the year 2020 by qualified experts with over ten years of
          involvement with the travel industry. Holding places, individuals and
          customs through proficient aides, current transportation, quality
          inns, fine cafés and other key merchants. Our particular divisions
          offer a variety of administrations. Each division works freely to
          offer the best support to our clients, focusing on their fellowship
          and a dependable relationship. All administrations and divisions are
          situated at our office in Lahore, beginning with the Administration
          and Managerial Division, Functional Division, Reservation Office, Item
          Improvement, Deals and Showcasing, Inbound, Outbound and Tagging
          Divisions, giving us an upper hand by being all under one rooftop.
        </p>
      </div>
      <TourDetails/>
    </>
  );
};

export default AboutSection;
