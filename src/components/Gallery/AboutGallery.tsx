import React from "react";
import * as Icons from "@/components/global/Icons"

const AboutGallery: React.FC = () => {
    return (
        <>
        <div className="py-14 lg:px-10 md:px-5 xl:container mx-auto grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-y-10">
            <div className="flex flex-col items-center">
                <Icons.GalleryCameraIcon/>
                <h1 className="mt-4 text-black font-work-sans text-2xl font-semibold text-center">Photos</h1>
                <p className="mt-2 text-[#333333] font-work-sans text-base font-normal text-center">Great shots of NYC</p>
            </div>
            <div className="flex flex-col items-center">
                <Icons.VideoIcon/>
                <h1 className="mt-4 text-black font-work-sans text-2xl font-semibold text-center">Video</h1>
                <p className="mt-2 text-[#333333] font-work-sans text-base font-normal text-center">A collection of our favorite spots</p>
            </div>
            <div className="flex flex-col items-center">
                <Icons.HeartIcon/>
                <h1 className="mt-4 text-black font-work-sans text-2xl font-semibold text-center">Share</h1>
                <p className="mt-2 text-[#333333] font-work-sans text-base font-normal text-center">Share your own adventure</p>
            </div>
        </div>
        </>
    )
}

export default AboutGallery