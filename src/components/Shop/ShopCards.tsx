import { IShopCards } from "@/Interface";
import { shopCardsData } from "@/mock/ShopMockData";
import React from "react";

const ShopCards: React.FC = () => {
  const shopCards: IShopCards[] = shopCardsData;

  const renderShopCards = shopCards.map((cards: IShopCards, index: number) => {
    return (
      <React.Fragment key={`${cards.id}${index}`}>
        <div className="flex flex-col items-center">
          <img src={cards.cardImage} alt="" />
          <p className="text-[#5C5C5C] font-work-sans text-lg font-normal mt-2 text-center">
            {cards.cardTitle}
          </p>
          <div className="flex justify-center gap-1 items-center mt-1">
            <p className="text-[#7F7F7F] font-work-sans text-base font-normal line-through text-center">
              {cards.cardPriceDiscount}
            </p>
            <p className="text-black font-work-sans text-base font-normal text-center">
              {cards.cardPrice}
            </p>
          </div>
          <button className="text-white hover:text-black font-work-sans text-sm font-normal bg-black hover:bg-white border border-black transition-all ease-in-out duration-500 px-7 py-3 mt-3 rounded-sm">
            {cards.id === 1 ? "Select options" : "Add to cart"}
          </button>
        </div>
      </React.Fragment>
    );
  });
  return (
    <>
    <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-y-16 xl:container mx-auto">{renderShopCards}</div>
    </>
  );
};

export default ShopCards;
