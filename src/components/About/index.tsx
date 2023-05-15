import React from "react";
import * as Icons from "@/components/global/Icons";
import AboutSlider from "@/components/About/AboutSlider";
import AdventureTeam from "@/components/About/AdventureTeam";
import CareerAccordions from "@/components/About/CareerAccordions";

const About: React.FC = () => {
  return (
    <>
      <div className="w-full sm:h-[500px] h-[400px] bg-[url(/images/about/about-banner.jpg)] bg-center bg-cover bg-no-repeat flex justify-center items-center">
        <div className="top-0 w-full h-full bg-black opacity-60 relative"></div>
        <div className="text-white absolute flex flex-col items-center sm:px-0 px-5">
          <h1 className="text-white uppercase lg:text-6xl sm:text-5xl text-4xl font-medium font-yatra-one text-center">
            about us
          </h1>
        </div>
      </div>
      <div className="flex items-center gap-10 lg:w-3/5 w-11/12 mx-auto sm:py-20 pt-20">
        <div className="sm:pt-3">
          <Icons.CameraIcon />
        </div>
        <div>
          <h1 className="text-black font-work-sans sm:text-[35px] sm:leading-10 text-3xl font-semibold">
            Our Story
          </h1>
          <div className="sm:block hidden">
          <p className="text-[#333333] font-work-sans text-base font-normal mt-4">
            We got our first break in New York City – and NYC is still the bread
            and butter of our group. Nearly 50 million people will visit the Big
            Apple in 2017 – the lucky ones will experience outr tour for
            themselves.
          </p>
          <p className="text-[#333333] font-work-sans text-base font-normal mt-4">
            For the best 10 years, we’ve continually ranked #1 for service,
            excellence and outstanding value. This year is no different – and
            we’d like to take an opportunity to thank you for making our last 10
            years so amazing.
          </p>
          </div>
        </div>
      </div>
      <div className="sm:hidden block w-11/12 mx-auto pb-20">
          <p className="text-[#333333] font-work-sans text-base font-normal mt-4">
            We got our first break in New York City – and NYC is still the bread
            and butter of our group. Nearly 50 million people will visit the Big
            Apple in 2017 – the lucky ones will experience outr tour for
            themselves.
          </p>
          <p className="text-[#333333] font-work-sans text-base font-normal mt-4">
            For the best 10 years, we’ve continually ranked #1 for service,
            excellence and outstanding value. This year is no different – and
            we’d like to take an opportunity to thank you for making our last 10
            years so amazing.
          </p>
          </div>
      <div>
        <AboutSlider />
      </div>
      <div className="bg-[#F7F5F5] py-20">
        <div className="flex sm:gap-10 gap-5 lg:w-3/5 w-11/12 mx-auto">
          <div className="pt-3">
            <Icons.MissionIcon />
          </div>
          <div>
            <h1 className="text-black font-work-sans sm:text-[35px] sm:leading-10 text-2xl font-semibold">
              Our Mission
            </h1>
            <p className="text-black font-work-sans sm:text-base text-sm font-semibold">
              We strive to be the highest rated tour company in New York
            </p>
            <p className="text-[#333333] font-work-sans text-base font-normal mt-4 sm:block hidden">
              Imagine seeing all the greatest icons of New York City in just
              under 6 hours. Think it can’t be done? Think again. Year after
              year we win awards for the best bus tour in New York City! Here’s
              why: The NY SEE IT ALL is NYC’s Most Popular Comprehensive Guided
              Tour. It combines a bus tour with short walks and a ride on the
              world famous Staten Island Ferry. The #3 most popular attraction
              in New York City. You will experience breathtaking views of the
              Statue, Lower Manhattan, the Brooklyn Bridge, the Verrazano
              Narrows Bridge, and the boat traffic in one of the busiest harbors
              in the world. This tour will show you everything Manhattan has to
              offer without leaving you on your own to get lost or miss
              attractions.
            </p>
          </div>
        </div>
        <div className="w-11/12 mx-auto">
          <p className="text-[#333333] font-work-sans text-base mt-4 font-normal sm:hidden block">
            Imagine seeing all the greatest icons of New York City in just under
            6 hours. Think it can’t be done? Think again. Year after year we win
            awards for the best bus tour in New York City! Here’s why: The NY
            SEE IT ALL is NYC’s Most Popular Comprehensive Guided Tour. It
            combines a bus tour with short walks and a ride on the world famous
            Staten Island Ferry. The #3 most popular attraction in New York
            City. You will experience breathtaking views of the Statue, Lower
            Manhattan, the Brooklyn Bridge, the Verrazano Narrows Bridge, and
            the boat traffic in one of the busiest harbors in the world. This
            tour will show you everything Manhattan has to offer without leaving
            you on your own to get lost or miss attractions.
          </p>
        </div>
      </div>
      <div>
        <AdventureTeam />
      </div>
      <div>
        <CareerAccordions/>
      </div>
      <div className="py-10 bg-white xl:w-3/4 w-11/12 mx-auto flex flex-col items-center">
      <h1 className="text-black font-work-sans sm:text-[35px] sm:leading-10 text-2xl font-semibold">
              Get in Touch
            </h1>
        <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-5 w-full mt-5">
        <input type="text" placeholder="Name" className="w-full border border-[#D2B6A1] rounded-md px-2 h-12" />
        <input type="email" placeholder="Email" className="w-full border border-[#D2B6A1] rounded-md px-2 h-12" />
        <input type="text" placeholder="Question / Comment" className="w-full border border-[#D2B6A1] rounded-md px-2 h-12" />
        <button className="w-full bg-black text-white text-base font-work-sans font-medium rounded-md h-12 hover:bg-transparent border border-black hover:text-black transition-all ease-in-out duration-300">Send</button>
        </div>
      </div>
    </>
  );
};

export default About;
