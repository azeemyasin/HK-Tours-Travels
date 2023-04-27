import React from "react";

const TourDetails: React.FC = () => {
  return (
    <>
      <div className="flex sm:flex-row flex-col-reverse w-full lg:h-[30rem] sm:h-[25rem]">
        <div className="sm:w-1/2 w-full bg-primary lg:px-10 sm:px-5 px-3 sm:py-0 py-7 flex flex-col justify-center">
          <h1 className="text-white font-work-sans xl:text-[30px] xl:leading-9 sm:text-2xl text-xl font-medium uppercase">
            see nature in another manner
          </h1>
          <p className="text-white lg:text-base sm:text-sm text-xs font-work-sans font-light mt-4">
            The Hunza valley is popular for its{" "}
            <span className="font-bold">snow-capped and rough mountains.</span>{" "}
            Many people came to Hunza just to get a few glimpses of the shining
            ice wall of the Rakaposhi Mountain. Other popular mountains in Hunza
            include Passu Peak, Ultra Peak, and Kulksel Sar.
          </p>
          <div>
            <button className="px-8 py-3 bg-secondary text-white text-[15px] font-work-sans font-semibold uppercase border border-secondary hover:border-white hover:bg-transparent mt-5 rounded-lg transition-all ease-in-out duration-300">
              go explore
            </button>
          </div>
        </div>
        <div className="sm:w-1/2 w-full h-full">
          <img src="/images/tour-img-1.jpg" alt="" className="w-full h-full object-cover" />
        </div>
      </div>
      <div className="flex sm:flex-row flex-col w-full sm:h-[30rem]">
        <div className="sm:w-1/2 w-full h-full">
          <img src="/images/tour-img-2.jpg" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="sm:w-1/2 w-full bg-white lg:px-10 px-5 sm:py-0 py-7 flex flex-col justify-center">
          <h1 className="text-[#28372F] font-work-sans xl:text-[30px] xl:leading-9 sm:text-2xl text-xl font-medium uppercase">
            make your own adventure
          </h1>
          <p className="text-[#54595F] lg:text-base sm:text-sm text-xs font-work-sans lg:font-light mt-4">
            “The movement of people starting with one spot then onto the next
            external their usual range of familiarity for investigation or
            travel to remote, extraordinary, and perhaps vicious regions is
            characterized as experience the travel industry”. Experience the
            travel industry alludes to travel that incorporates exercises like
            climbing, climbing, boating, scuba plunging, and other comparable
            exercises.
          </p>
          <div>
            <button className="px-8 py-3 bg-secondary text-white text-[15px] font-work-sans font-semibold uppercase border border-secondary hover:bg-transparent hover:text-secondary mt-5 rounded-lg transition-all ease-in-out duration-300">
              go explore
            </button>
          </div>
        </div>
      </div>
      <div className="flex sm:flex-row flex-col-reverse w-full sm:h-[35rem]">
        <div className="sm:w-1/2 w-full bg-primary lg:px-10 px-5 flex flex-col justify-center sm:py-0 py-7">
          <h1 className="text-white font-work-sans xl:text-[30px] xl:leading-9 sm:text-2xl text-xl font-medium uppercase">
            family friendly tours
          </h1>
          <p className="text-white lg:text-base sm:text-sm text-xs font-work-sans font-light mt-4">
            Vacation is a long break from the routine activities. It makes our
            mind and body relax after a long hectic schedule of work or
            academics. Children wait for the summer vacation to relax and
            prepare themselves for the next class. People generally prefer to
            visit new places during their vacation and meet new people. Children
            like to spend their summer vacation with their grandparents. Many
            people like to spend their vacation at their home, taking up their
            hobbies. We also take vacations for attending ceremonies like
            marriages, childbirth etc. Vacations are the best way to fight
            personal or professional stress and help in rebooting ourselves for
            new challenges.
          </p>
          <div>
            <button className="px-8 py-3 bg-secondary text-white text-[15px] font-work-sans font-semibold uppercase border border-secondary hover:border-white hover:bg-transparent mt-5 rounded-lg transition-all ease-in-out duration-300">
              go explore
            </button>
          </div>
        </div>
        <div className="sm:w-1/2 w-full h-full">
          <img src="/images/tour-img-3.jpg" alt="" className="w-full h-full object-cover" />
        </div>
      </div>
    </>
  );
};

export default TourDetails;
