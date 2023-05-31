import { ReactNode } from "react";

export interface INavItems {
  id: number;
  itemName: string;
  itemPath: string | any;
}

export interface ICareerAccordions {
  id: number;
  careerTitle: string;
  careerDesc: string;
}

export interface ITourBenefits {
  id: number;
  cardIcon: ReactNode;
  cardTitle: string;
  cardDesc: string
}

export interface IAdventureFacilities {
  id: number;
  facilityIcon: ReactNode;
  facilityTitle: string;
  facilityDesc: string;
}

export interface IShopCards {
  id : number;
  cardImage: string;
  cardTitle: string;
  cardPrice: string;
  cardPriceDiscount?: string;
}
