import { IAdventureFacilities, ITourBenefits } from "@/Interface";
import * as Icons from "@/components/global/Icons";

export const tourBenefitsData: ITourBenefits[] = [
  {
    id: 1,
    cardIcon: <Icons.SafetyIcon />,
    cardTitle: "Safety First",
    cardDesc: "Committed to your safety in and around the city.",
  },
  {
    id: 2,
    cardIcon: <Icons.GuideIcon />,
    cardTitle: "World's Best Guides",
    cardDesc: "Our guides know everything there is know about Pakistan!",
  },
  {
    id: 1,
    cardIcon: <Icons.GoodExperienceIcon />,
    cardTitle: "Experience of a Lifetime",
    cardDesc: "An adventurer like nothing you've ever experienced before.",
  },
];

export const adventureFacilityData: IAdventureFacilities[] = [
  {
    id: 1,
    facilityIcon: <Icons.TrainIcon />,
    facilityTitle: "Close to Transit",
    facilityDesc:
      "For feugiat ought to be an armada, dignissim sem and, time wise. Mauritian Leo",
  },
  {
    id: 2,
    facilityIcon: <Icons.ExpertIcon />,
    facilityTitle: "Expert Guides",
    facilityDesc:
      "For feugiat ought to be an armada, dignissim sem and, time wise. Mauritian Leo",
  },
  {
    id: 3,
    facilityIcon: <Icons.LunchIcon />,
    facilityTitle: "Lunch",
    facilityDesc:
      "For feugiat ought to be an armada, dignissim sem and, time wise. Mauritian Leo",
  },
  {
    id: 4,
    facilityIcon: <Icons.CameraIcon />,
    facilityTitle: "GoPro Video",
    facilityDesc:
      "For feugiat ought to be an armada, dignissim sem and, time wise. Mauritian Leo",
  },
];
