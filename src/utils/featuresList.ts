export type IFeatureIcons =
  | "HiOutlineSpeakerphone"
  | "IoDocumentText"
  | "AiOutlineCode"
  | "HiOutlineTicket"
  | "GiStoneBlock"
  | "FaBox";

type IFeatureObject = {
  title: string;
  description: string;
  icon: IFeatureIcons;
};

type IFeaturesList = IFeatureObject[];

export const FEATURES_LIST: IFeaturesList = [
  {
    icon: "IoDocumentText",
    title: "Certifications",
    description:
      "Each of our plan will provide you and your team with certifications.",
  },
  {
    icon: "HiOutlineSpeakerphone",
    title: "Notifications",
    description:
      "Send out notifications to all your customers to keep them engaged.",
  },
  {
    icon: "FaBox",
    title: "Bundles",
    description: "High-quality bundles of awesome tools to help you out.",
  },
  {
    icon: "AiOutlineCode",
    title: "Developer Tools",
    description:
      "Developer tools to help grow your application and keep it up-to-date.",
  },
  {
    icon: "GiStoneBlock",
    title: "Building Blocks",
    description:
      "The right kind of building blocks to take your company to the next level.",
  },
  {
    icon: "HiOutlineTicket",
    title: "Coupons",
    description:
      "Coupons system to provide special offers and discounts for your app.",
  },
];
