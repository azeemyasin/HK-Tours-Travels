import React from "react";
import AboutSection from "@/components/Home/AboutSection";
import ChooseAdventure from "@/components/Home/ChooseAdventure";
import Treetops from "@/components/Home/Treetops";
import SpecialsAndPackages from "@/components/Home/SpecialsAndPackages";

const Home: React.FC = () => {
  return (
    <div>
      <div className="w-full h-[600px] bg-[url(/images/home-banner.jpg)] bg-center bg-cover bg-no-repeat flex justify-center items-center">
        <div className="top-0 w-full h-full bg-black opacity-60 relative"></div>
        <div className="text-white absolute flex flex-col items-center sm:px-0 px-5">
          <h1 className="text-white uppercase lg:text-6xl sm:text-5xl text-3xl font-medium font-yatra-one text-center">
            Experience adventure
          </h1>
          <p className="text-white sm:text-[18px] text-sm font-work-sans font-normal text-center sm:w-[34rem] mx-auto">
            Experience the thrill and excitement of suspension bridges. See
            nature from a whole new perspective!
          </p>
          <button className="text-white border-2 border-white rounded-lg bg-transparent uppercase hover:text-[#1B1B1B] hover:bg-white text-[17px] font-semibold font-work-sans px-7 py-3 mt-5 transition-all ease-in-out duration-500">go exploring</button>
        </div>
      </div>
      <div>
        <AboutSection/>
      </div>
      <div>
        <ChooseAdventure/>
      </div>
      <div>
        <Treetops/>
      </div>
      <div>
        <SpecialsAndPackages/>
      </div>
    </div>
  );
};

export default Home;
