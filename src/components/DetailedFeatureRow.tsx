import React from "react";
import { RiStopCircleFill } from "react-icons/ri";

interface IDetailedFeatureRowProps {
  description: string;
  imageAlt: string;
  reverse?: boolean;
  title: string;
  image: string;
  subBullets?: string[];
}

export const DetailedFeatureRow: React.FC<IDetailedFeatureRowProps> = ({
  description,
  subBullets,
  imageAlt,
  reverse,
  title,
  image,
}) => {
  return (
    <div
      className={`flex flex-wrap items-center ${reverse && "flex-row-reverse"}`}
    >
      <div className="w-full sm:w-1/2 text-left sm:px-6">
        <h3 className="text-3xl text-gray-900 font-semibold">{title}</h3>
        <div className="mt-4 text-xl leading-7 text-gray-500">
          {description}
        </div>
        {subBullets && (
          <ul className="mt-7">
            {subBullets.map((bullet, idx) => (
              <li key={idx}>
                <div className="flex items-center justify-start gap-3">
                  <RiStopCircleFill className="text-xl text-yellow-400" />
                  <p className="text-lg text-gray-400">{bullet}</p>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="w-full sm:w-1/2 p-6">
        <img src={image} alt={imageAlt} />
      </div>
    </div>
  );
};
