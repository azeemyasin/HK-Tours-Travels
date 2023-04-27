import React, { useState } from "react";
import cn from "classnames";

type Props = {
  preTitle: string;
  cardTitle: string;
  cardDesc: string;
  cardImage: string;
};

const AdventureCards: React.FC<Props> = ({
  preTitle,
  cardTitle,
  cardDesc,
  cardImage,
}) => {
    const [showPopup, setShowPopup] = useState<boolean>(false)
  return (
    <>
      <div onMouseEnter={() => setShowPopup(true)} onMouseLeave={() => setShowPopup(false)}
        className={cn(`w-[300px] h-[350px] ${cardImage} bg-cover bg-center bg-no-repeat rounded-[40px] relative cursor-pointer transition-all ease-in-out duration-500`, {
            'scale-100': !showPopup,
            'scale-110': showPopup
        })}
      >
        <div className={cn("bg-black opacity-60 w-full rounded-[40px] overflow-y-hidden transition-all ease-in-out duration-500", {
            'h-full': showPopup,
            'h-0': !showPopup
        })}></div>
        <div className={cn("absolute top-0 w-full overflow-hidden flex flex-col items-center justify-center px-6 transition-all ease-in-out duration-500", {
            'h-full': showPopup,
            "h-0": !showPopup
        })}>
          <p className="font-yatra-on text-base font-normal text-white uppercase">
            {preTitle}
          </p>
          <h1 className="font-work-sans text-xl font-semibold mt-5 text-white uppercase">
            {cardTitle}
          </h1>
          <p className="text-white font-work-sans font-normal text-[12px] text-center">
            {cardDesc}
          </p>
          <button className="uppercase font-work-sans text-base text-white font-semibold px-5 py-3 border border-white rounded-lg mt-5 hover:bg-white hover:text-black transition-all ease-in-out duration-300 hover:scale-x-110">
            explore
          </button>
        </div>
      </div>
    </>
  );
};

export default AdventureCards;
