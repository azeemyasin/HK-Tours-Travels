import React from "react";

const Gallery: React.FC = () => {
  return (
    <>
      <div className="w-full h-[500px] bg-[url(/images/shop/banner.jpg)] bg-center bg-cover bg-no-repeat flex justify-center items-center">
        <div className="top-0 w-full h-full bg-black opacity-60 relative"></div>
        <div className="text-white absolute flex flex-col items-center sm:px-0 px-5">
          <h1 className="text-white uppercase lg:text-6xl sm:text-5xl text-3xl font-medium font-yatra-one text-center">
            Gallery
          </h1>
          <p className="text-white sm:text-[18px] text-sm font-work-sans font-normal text-center sm:w-[30rem] leading-8 mx-auto mt-2">
            Come and join the thrill and excitement of NYC with the best guides in the city!
          </p>
        </div>
      </div>
    </>
  );
};

export default Gallery;
