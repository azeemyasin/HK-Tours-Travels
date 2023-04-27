import React, { useState } from "react";
import AdventureCards from "@/components/global/AdventureCards";
import cn from 'classnames';

const ChooseAdventure: React.FC = () => {
  const [checkSteps, setCheckSteps] = useState<number>(1);

  const renderAdventuresTabs = () => {
    switch (checkSteps) {
      case 1:
        return (
          <>
            <div className="flex lg:flex-no-wrap flex-wrap items-center gap-6 justify-center">
              <AdventureCards
                cardImage="bg-[url(/images/adventure-1.jpg)]"
                preTitle="most popular"
                cardTitle="treetop adventure"
                cardDesc="Lorem ipsum dolor sit amet consectetur adipisicing elit."
              />
              <AdventureCards
                cardImage="bg-[url(/images/adventure-2.jpg)]"
                preTitle="most popular"
                cardTitle="treetop adventure"
                cardDesc="Lorem ipsum dolor sit amet consectetur adipisicing elit."
              />
              <AdventureCards
                cardImage="bg-[url(/images/adventure-3.jpg)]"
                preTitle="most popular"
                cardTitle="treetop adventure"
                cardDesc="Lorem ipsum dolor sit amet consectetur adipisicing elit."
              />
            </div>
          </>
        );
      case 2:
        return (
          <>
            <div className="flex lg:flex-no-wrap flex-wrap items-center gap-6">
              <AdventureCards
                cardImage="bg-[url(/images/adventure-2.jpg)]"
                preTitle="most popular"
                cardTitle="treetop adventure"
                cardDesc="Lorem ipsum dolor sit amet consectetur adipisicing elit."
              />
              <AdventureCards
                cardImage="bg-[url(/images/adventure-1.jpg)]"
                preTitle="most popular"
                cardTitle="treetop adventure"
                cardDesc="Lorem ipsum dolor sit amet consectetur adipisicing elit."
              />
            </div>
          </>
        );
      case 3:
        return (
          <>
            <div className="flex lg:flex-no-wrap flex-wrap items-center gap-6">
              <AdventureCards
                cardImage="bg-[url(/images/adventure-3.jpg)]"
                preTitle="most popular"
                cardTitle="treetop adventure"
                cardDesc="Lorem ipsum dolor sit amet consectetur adipisicing elit."
              />
            </div>
          </>
        );
      case 4:
        return (
          <>
            <div className="flex lg:flex-no-wrap flex-wrap items-center gap-6">
              <AdventureCards
                cardImage="bg-[url(/images/adventure-1.jpg)]"
                preTitle="most popular"
                cardTitle="treetop adventure"
                cardDesc="Lorem ipsum dolor sit amet consectetur adipisicing elit."
              />
              <AdventureCards
                cardImage="bg-[url(/images/adventure-2.jpg)]"
                preTitle="most popular"
                cardTitle="treetop adventure"
                cardDesc="Lorem ipsum dolor sit amet consectetur adipisicing elit."
              />
            </div>
          </>
        );
    }
  };
  return (
    <>
      <div className="flex flex-col items-center pt-14 pb-14 bg-[#F7F5F5] lg:px-0 md:px-10 px-5">
        <h1 className="text-[#28372F] font-yatra-one lg:text-[42px] sm:text-4xl text-3xl font-medium uppercase text-center">
          choose your adventure
        </h1>
        <p className="text-[#54595F] font-work-sans sm:text-base text-sm font-normal lg:w-[55rem] text-center mt-2">
          It&rsquo;s time for the ferry to move forward. The class is apt to be
          silent, and the companions turn to the shores by marriage.
        </p>
        <div className="flex justify-center items-center gap-5 mt-10">
          <p
            onClick={() => setCheckSteps(1)}
            className={cn("font-medium text-[15px] cursor-pointer", {
              'underline underline-offset-8 text-[#000000]': checkSteps === 1,
              'text-[#455D50]': checkSteps !== 1,
            })}
          >
            All
          </p>
          <p
            onClick={() => setCheckSteps(2)}
            className={cn("font-medium text-[15px] cursor-pointer", {
              'underline underline-offset-8 text-[#000000]': checkSteps === 2,
              'text-[#455D50]': checkSteps !== 2,
            })}
          >
            Bridges
          </p>
          <p
            onClick={() => setCheckSteps(3)}
            className={cn("font-medium text-[15px] cursor-pointer", {
              'underline underline-offset-8 text-[#000000]': checkSteps === 3,
              'text-[#455D50]': checkSteps !== 3,
            })}
          >
            Family Fun
          </p>
          <p
            onClick={() => setCheckSteps(4)}
            className={cn("font-medium text-[15px] cursor-pointer", {
              'underline underline-offset-8 text-[#000000]': checkSteps === 4,
              'text-[#455D50]': checkSteps !== 4,
            })}
          >
            Guided
          </p>
        </div>
        <div className="mt-10">{renderAdventuresTabs()}</div>
      </div>
      <div className="flex sm:flex-row flex-col gap-10 justify-center items-center py-12 sm:px-0 px-3">
        <div className="text-black font-work-sans md:text-2xl text-xl font-normal sm:text-end text-center">
          Purchase tickets online and save 25%
        </div>
        <button className="uppercase bg-secondary text-white md:w-48 w-40 md:h-14 h-12 hover:bg-transparent hover:border hover:border-secondary hover:text-secondary transition-all ease-in-out duration-500 rounded-lg font-work-sans text-[18px] font-semibold">
          buy tickets
        </button>
      </div>
    </>
  );
};

export default ChooseAdventure;
