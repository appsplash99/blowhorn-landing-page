import React from "react";
import { COMPANIES_INFO } from "../utils/companiesInfo";

export const CompanyLogos = () => {
  return (
    <section className="bg-white pt-7 pb-14">
      <div className="container px-8 mx-auto sm:px-12 lg:px-20">
        <h1 className="text-sm font-bold tracking-wide text-center text-gray-800 uppercase mb-7">
          Trusted by top-leading companies.
        </h1>
        <div className="flex items-center justify-center flex-wrap gap-10">
          {COMPANIES_INFO.map((company, index) => (
            <img
              key={index}
              alt={company.name}
              src={company.imageSrc}
              className="block object-contain w-24 md:w-32"
            />
          ))}
        </div>
      </div>
    </section>
  );
};
