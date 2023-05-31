import React from "react";

const BlogGrid: React.FC = () => {
    return (
        <>
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10 xl:container mx-auto 2xl:px-0 sm:px-10 px-5">
            <div>
                <div>
                    <img src="/images/blogs/img-1.jpg" alt="" className="w-full" />
                    <div className="px-4 border-l border-r border-b border-gray-300 py-5">
                    <h1 className="font-work-sans text-xl font-semibold underline cursor-pointer">Our Fundamental Pakistan Tips</h1>
                    <p className="my-4 font-work-sans text-[13px] font-normal"><span className="text-[#8B8B8B]">Posted by </span>Themovation | No Comments</p>
                    <p className="font-work-sans text-[#333333] text-base font-normal">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                    </p>
                    </div>
                </div>
                <div className="mt-10">
                    <img src="/images/blogs/img-3.jpg" alt="" className="w-full" />
                    <div className="px-4 border-l border-r border-b border-gray-300 py-5">
                    <h1 className="font-work-sans text-xl font-semibold underline cursor-pointer">Our Aide Answer Your Top Inquiries</h1>
                    <p className="my-4 font-work-sans text-[13px] font-normal"><span className="text-[#8B8B8B]">Posted by </span>Themovation | No Comments</p>
                    <p className="font-work-sans text-[#333333] text-base font-normal">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                    </p>
                    </div>
                </div>
            </div>
            <div>
            <div>
                    <img src="/images/blogs/img-2.jpg" alt="" className="w-full" />
                    <div className="px-4 border-l border-r border-b border-gray-300 py-5">
                    <h1 className="font-work-sans text-xl font-semibold underline cursor-pointer">Our Aide Answer Your Top Inquiries</h1>
                    <p className="my-4 font-work-sans text-[13px] font-normal"><span className="text-[#8B8B8B]">Posted by </span>Themovation | No Comments</p>
                    <p className="font-work-sans text-[#333333] text-base font-normal">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                    </p>
                    </div>
                </div>
                <div className="w-full border border-gray-300 py-12 sm:px-8 px-6 mt-10">
                    <h1 className="text-[#656565] font-work-sans sm:text-[26px] sm:leading-8 text-2xl">Traveling - it leaves you stunned, then transforms you into a narrator</h1>
                    <p className="mt-3 text-[#999999] font-work-sans text-base">- ibn Battuta</p>
                </div>
                <div className="mt-10">
                    <img src="/images/blogs/img-4.jpg" alt="" className="w-full" />
                    <div className="px-4 border-l border-r border-b border-gray-300 py-5">
                    <h1 className="font-work-sans text-xl font-semibold underline cursor-pointer">Our Aide Answer Your Top Inquiries</h1>
                    <p className="my-4 font-work-sans text-[13px] font-normal"><span className="text-[#8B8B8B]">Posted by </span>Themovation | No Comments</p>
                    <p className="font-work-sans text-[#333333] text-base font-normal">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                    </p>
                    </div>
                </div>
            </div>
            <div>
            <div className="lg:mt-0 md:-mt-56 sm:-mt-72">
                    <img src="/images/blogs/img-1.jpg" alt="" className="w-full" />
                    <div className="px-4 border-l border-r border-b border-gray-300 py-5">
                    <h1 className="font-work-sans text-xl font-semibold underline cursor-pointer">Our Aide Answer Your Top Inquiries</h1>
                    <p className="my-4 font-work-sans text-[13px] font-normal"><span className="text-[#8B8B8B]">Posted by </span>Themovation | No Comments</p>
                    <p className="font-work-sans text-[#333333] text-base font-normal">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                    </p>
                    </div>
                </div>
                <div className="mt-10">
                    <img src="/images/blogs/img-5.jpg" alt="" className="w-full" />
                    <div className="px-4 border-l border-r border-b border-gray-300 py-5">
                    <h1 className="font-work-sans text-xl font-semibold underline cursor-pointer">Our Aide Answer Your Top Inquiries</h1>
                    <p className="my-4 font-work-sans text-[13px] font-normal"><span className="text-[#8B8B8B]">Posted by </span>Themovation | No Comments</p>
                    <p className="font-work-sans text-[#333333] text-base font-normal">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                    </p>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default BlogGrid;