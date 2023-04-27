import React from "react";
import * as Icons from "@/components/global/Icons";

const Treetops: React.FC = () => {
  return (
    <>
      <div className="bg-[url(/images/treetops-img.jpg)] bg-cover bg-center bg-no-repeat py-32 w-full flex justify-end lg:pr-32 sm:pr-20 sm:px-0 px-3">
        <div className="py-10 sm:pl-10 pl-5 sm:pr-16 pr-5 bg-white rounded-xl sm:w-[30rem]">
          <h1 className="text-[#1E293B] font-work-sans sm:text-3xl text-2xl font-semibold">
            Explore the Treetops
          </h1>
          <p className="text-[#54595F] font-work-sans text-base font-normal mt-6">
            The gathering, containing four youthful people, has started a drive,
            Saaya, to plan biodiversity patterns in metropolitan places. The
            venture started in July, 2017 and, starting today, the group has
            planned north of 700 trees in 14 parks in Region South, remembering
            some for parks of the old city region, Slope Park in Locale East and
            trees established along different avenues remembering Sharae Iran
            for Old Clifton region.
          </p>
          <button className="mt-8 text-[#28372F] font-work-sans text-base font-semibold uppercase flex items-center gap-3">
            explore more
            <Icons.RightArrow />
          </button>
        </div>
      </div>
      <div className="bg-[#F7F5F5] py-12 flex flex-col items-center lg:px-0 sm:px-10 px-5">
        <p className="text-[#28372F] font-work-sans sm:text-2xl text-xl font-normal lg:w-[49rem] mx-auto text-center">&#34;Very lovely, great job! In the event that you are searching for an otherworldly and heartfelt spot, this is an extraordinary spot to go! I&apos;d prescribe this to any individual who cherishes a decent experience!&#34; </p>
        <div className="flex items-center gap-5 mt-8">
            <div className="w-28 h-28">
                <img src="/images/profile-img.jpeg" alt="" className="w-full h-full rounded-full object-cover" />
            </div>
            <div>
                <h4 className="text-[#34363D] font-work-sans text-[18px] font-normal">Amy Johnson</h4>
                <h4 className="text-[#34363D] font-work-sans text-sm font-normal">Adventure</h4>
            </div>
        </div>
      </div>
    </>
  );
};

export default Treetops;
