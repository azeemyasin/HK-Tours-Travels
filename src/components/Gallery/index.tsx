import React from "react";
import AboutGallery from "@/components/Gallery/AboutGallery";
import AboutSlider from "@/components/About/AboutSlider";
import ColumnGrid from "@/components/Gallery/ColumnGrid";

const Gallery: React.FC = () => {
  return (
    <>
      <div className="w-full sm:h-[500px] h-[400px] bg-[url(/images/gallery/banner.jpg)] bg-center bg-cover bg-no-repeat flex justify-center items-center">
        <div className="top-0 w-full h-full bg-black opacity-60 relative"></div>
        <div className="text-white absolute flex flex-col items-center sm:px-0 px-5">
          <h1 className="text-white uppercase lg:text-6xl sm:text-5xl text-4xl font-medium font-yatra-one text-center sm:mt-0 mt-20">
            Gallery
          </h1>
          <p className="text-white sm:text-[18px] text-sm font-work-sans font-normal text-center sm:w-[30rem] leading-8 mx-auto mt-2">
            Come and join the thrill and excitement of NYC with the best guides in the city!
          </p>
        </div>
      </div>
      <div>
        <AboutGallery/>
      </div>
      <div>
        <AboutSlider/>
      </div>
      <div>
        <ColumnGrid/>
      </div>
    </>
  );
};

export default Gallery;
