import React from "react";
import { IFeatureIcons } from "../utils/featuresList";
import { HiOutlineSpeakerphone, HiOutlineTicket } from "react-icons/hi";
import { IoMdDocument } from "react-icons/io";
import { FaBox } from "react-icons/fa";
import { AiOutlineCode } from "react-icons/ai";
import { GiStoneBlock } from "react-icons/gi";

interface ICustomFeatureIconProp {
  iconName: IFeatureIcons;
}

export const CustomFeatureIcon: React.FC<ICustomFeatureIconProp> = ({
  iconName,
}) => {
  switch (iconName) {
    case "IoDocumentText":
      return <IoMdDocument className="text-2xl" />;

    case "HiOutlineSpeakerphone":
      return <HiOutlineSpeakerphone className="text-2xl" />;

    case "FaBox":
      return <FaBox className="text-2xl" />;

    case "AiOutlineCode":
      return <AiOutlineCode className="text-2xl" />;

    case "GiStoneBlock":
      return <GiStoneBlock className="text-2xl" />;

    case "HiOutlineTicket":
      return <HiOutlineTicket className="text-2xl" />;

    default:
      return <></>;
  }
};
