import React from "react"

const ColumnGrid: React.FC = () => {
    return (
        <>
        <div className="md:py-16 py-10 flex flex-col items-center">
            <h1 className="text-black font-work-sans text-3xl font-semibold uppercase">2 column grid</h1>
            <p className="text-[#333333] font-work-sans text-base font-normal mt-2">Great for larger featured images!</p>
            <div className="grid md:grid-cols-2 grid-cols-1 gap-5 xl:container mx-auto 2xl:px-0 px-6 md:mt-16 mt-10">
                <img src="/images/gallery/img-1.jpg" alt="" />
                <img src="/images/gallery/img-2.jpg" alt="" />
            </div>
        </div>
        </>
    )
}

export default ColumnGrid;