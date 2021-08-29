import React from "react";
import { FaCheckCircle } from "react-icons/fa";

interface IDetailedFeatureRowProps {
  description: string;
  imageAlt: string;
  reverse?: boolean;
  title: string;
  imageSrc?: string;
  subBullets?: string[];
}

export const DetailedFeatureRow: React.FC<IDetailedFeatureRowProps> = ({
  description,
  subBullets,
  imageAlt,
  imageSrc,
  reverse,
  title,
}) => {
  return (
    <div
      className={`flex flex-wrap items-center justify-center ${
        reverse && "flex-row-reverse"
      }`}
    >
      <div className="w-full sm:w-1/2 text-left sm:px-6">
        <h3 className="text-3xl text-gray-900 font-semibold">{title}</h3>
        <div className="mt-4 text-xl leading-7 text-gray-500">
          {description}
        </div>
        {subBullets && (
          <ul className="mt-7">
            {subBullets.map((bullet, idx) => (
              <li key={idx} className="mt-1">
                <div className="flex items-center justify-start gap-3">
                  <FaCheckCircle className="text-2xl text-yellow-400" />
                  <p className="text-lg text-gray-400">{bullet}</p>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="w-full sm:w-1/2 p-6">
        <img
          src={imageSrc}
          alt={imageAlt}
          className="p-2 pl-6 pr-5 xl:pl-16 xl:pr-20"
        />
      </div>
    </div>
  );
};
