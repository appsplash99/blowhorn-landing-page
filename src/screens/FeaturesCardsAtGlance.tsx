import React from "react";
import { DetailedFeaturesCard } from "../components/DetailedFeaturesCard";
import { FEATURES_LIST } from "../utils/featuresList";
import { CustomFeatureIcon } from "../components/CustomFeatureIcon";

export const FeaturesCardsAtGlance = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold tracking-tight text-center">
          Our Features
        </h2>
        <p className="mt-2 text-lg text-center text-gray-600">
          Check out our list of awesome features below.
        </p>
        <div className="grid grid-cols-4 gap-8 mt-10 sm:grid-cols-8 lg:grid-cols-12 sm:px-8 xl:px-0">
          {FEATURES_LIST.map((item, idx) => {
            return (
              <DetailedFeaturesCard
                icon={<CustomFeatureIcon iconName={item.icon} />}
                title={item.title}
                description={item.description}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};
