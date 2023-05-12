import React from "react";
import * as Icons from "@/components/global/Icons";

const AdventureTeam: React.FC = () => {

  return (
    <>
      <div className="xl:container mx-auto 2xl:px-0 xl:px-20 px-5 py-20 flex flex-wrap gap-y-10 justify-between w-full">
        <div className="flex gap-3 md:w-[31%] sm:w-[48%] w-full">
          <div className="mt-1">
            <Icons.TeamAdventureIcon />
          </div>
          <div>
            <h1 className="text-black font-work-sans xl:text-[30px] xl:leading-9 lg:text-2xl text-xl font-semibold">
              Adventure Team
            </h1>
            <p className="text-[#333333] font-work-sans text-base font-light mt-4">
              For over 55 years, New York Tours has been the leader in guided
              sightseeing and exploration tours of NYC and surrounding areas.
            </p>
          </div>
        </div>
        <div className="md:w-[31%] sm:w-[48%] w-full">
            <img src="/images/about/team-1.jpg" alt="" className="w-full" />
            <div className="w-full bg-[#F7F5F5] lg:py-8 py-5 lg:px-5 px-3">
                <h1 className="text-black font-work-sans lg:text-[22px] lg:leading-7 text-lg font-semibold">Wendy Applegate</h1>
                <p className="text-[#515151] font-work-sans text-base font-normal mt-1">Tour Guide</p>
                <p className="mt-4 text-[#333333] font-work-sans text-base font-normal">Nulla vitae elit libero, a pharetra augue. Sed posuere consectetur est at lobortis.</p>
                <div className="mt-4 flex gap-2">
                    <div className="text-[#B3B2B2] fill-current">
                        <Icons.FacebookIcon/>
                    </div>
                    <div className="text-[#B3B2B2] fill-current">
                        <Icons.TwitterIcon/>
                    </div>
                </div>
            </div>
        </div>
        <div className="md:w-[31%] sm:w-[48%] w-full">
            <img src="/images/about/team-2.jpg" alt="" className="w-full" />
            <div className="w-full bg-[#F7F5F5] lg:py-8 py-5 lg:px-5 px-3">
                <h1 className="text-black font-work-sans lg:text-[22px] lg:leading-7 text-lg font-semibold">Travis Cook</h1>
                <p className="text-[#515151] font-work-sans text-base font-normal mt-1">Culinary Expert</p>
                <p className="mt-4 text-[#333333] font-work-sans text-base font-normal">Nulla vitae elit libero, a pharetra augue. Sed posuere consectetur est at lobortis.</p>
                <div className="mt-4 flex gap-2">
                    <div className="text-[#B3B2B2] fill-current">
                        <Icons.FacebookIcon/>
                    </div>
                    <div className="text-[#B3B2B2] fill-current">
                        <Icons.TwitterIcon/>
                    </div>
                </div>
            </div>
        </div>
        <div className="md:w-[31%] sm:w-[48%] w-full">
            <img src="/images/about/team-3.jpg" alt="" className="w-full" />
            <div className="w-full bg-[#F7F5F5] lg:py-8 py-5 xl:px-5 px-3">
                <h1 className="text-black font-work-sans lg:text-[22px] lg:leading-7 text-lg font-semibold">Justin Case</h1>
                <p className="text-[#515151] font-work-sans text-base font-normal mt-1">Tour Guide</p>
                <p className="mt-4 text-[#333333] font-work-sans text-base font-normal">Nulla vitae elit libero, a pharetra augue. Sed posuere consectetur est at lobortis.</p>
                <div className="mt-4 flex gap-2">
                    <div className="text-[#B3B2B2] fill-current">
                        <Icons.FacebookIcon/>
                    </div>
                    <div className="text-[#B3B2B2] fill-current">
                        <Icons.TwitterIcon/>
                    </div>
                </div>
            </div>
        </div>
        <div className="md:w-[31%] sm:w-[48%] w-full">
            <img src="/images/about/team-4.jpg" alt="" className="w-full" />
            <div className="w-full bg-[#F7F5F5] lg:py-8 py-5 xl:px-5 px-3">
                <h1 className="text-black font-work-sans lg:text-[22px] lg:leading-7 text-lg font-semibold">Wendy Applegate</h1>
                <p className="text-[#515151] font-work-sans text-base font-normal mt-1">Tour Guide</p>
                <p className="mt-4 text-[#333333] font-work-sans text-base font-normal">Nulla vitae elit libero, a pharetra augue. Sed posuere consectetur est at lobortis.</p>
                <div className="mt-4 flex gap-2">
                    <div className="text-[#B3B2B2] fill-current">
                        <Icons.FacebookIcon/>
                    </div>
                    <div className="text-[#B3B2B2] fill-current">
                        <Icons.TwitterIcon/>
                    </div>
                </div>
            </div>
        </div>
        <div className="md:w-[31%] sm:w-[48%] w-full">
            <img src="/images/about/team-5.jpg" alt="" className="w-full" />
            <div className="w-full bg-[#F7F5F5] lg:py-8 py-5 xl:px-5 px-3">
                <h1 className="text-black font-work-sans lg:text-[22px] lg:leading-7 text-lg font-semibold">Wendy Applegate</h1>
                <p className="text-[#515151] font-work-sans text-base font-normal mt-1">Tour Guide</p>
                <p className="mt-4 text-[#333333] font-work-sans text-base font-normal">Nulla vitae elit libero, a pharetra augue. Sed posuere consectetur est at lobortis.</p>
                <div className="mt-4 flex gap-2">
                    <div className="text-[#B3B2B2] fill-current">
                        <Icons.FacebookIcon/>
                    </div>
                    <div className="text-[#B3B2B2] fill-current">
                        <Icons.TwitterIcon/>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </>
  );
};

export default AdventureTeam;
