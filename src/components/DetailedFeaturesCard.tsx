import React, { ReactNode } from "react";

interface IDetailedFeaturesCard {
  description: string;
  icon: ReactNode;
  title: string;
}

export const DetailedFeaturesCard: React.FC<IDetailedFeaturesCard> = ({
  description,
  title,
  icon,
  ...props
}) => {
  return (
    <div
      {...props}
      className="flex flex-col items-center justify-between col-span-4 px-8 py-12 space-y-4 bg-gray-100 sm:rounded-xl"
    >
      <div className="p-3 text-white bg-blue-500 rounded-full">{icon}</div>
      <h4 className="text-xl font-medium text-gray-700">{title}</h4>
      <p className="text-base text-center text-gray-500">{description}</p>
    </div>
  );
};
