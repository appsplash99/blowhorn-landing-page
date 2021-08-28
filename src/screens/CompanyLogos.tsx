import React from "react";
import { COMPANIES_INFO } from "../utils/companiesInfo";

export const CompanyLogos = () => {
  return (
    <section className="bg-white pt-7 pb-14">
      <div className="container px-8 mx-auto sm:px-12 lg:px-20">
        <h1 className="text-sm font-bold tracking-wide text-center text-gray-800 uppercase mb-7">
          Trusted by top-leading companies.
        </h1>
        <div className="grid items-center justify-center grid-cols-12 gap-y-8">
          {COMPANIES_INFO.map((company, index) => (
            <div
              key={index}
              className="flex items-center justify-center col-span-6 sm:col-span-4 md:col-span-3 xl:col-span-2"
            >
              <img
                alt={company.name}
                src={company.imageSrc}
                className="block object-contain h-12"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
