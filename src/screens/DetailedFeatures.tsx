import React from "react";
import { DetailedFeatureRow } from "../components/DetailedFeatureRow";
import { Section } from "../components/Section";
import multiTaskImage from "../assets/multitask.png";
import automationImage from "../assets/industry.png";

export const DetailedFeatures = () => {
  return (
    <Section
      title="Your title here"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus malesuada nisi tellus, non imperdiet nisi tempor at."
    >
      <DetailedFeatureRow
        reverse
        title="Boost Productivity"
        description="Build an Atmosphere that creates productivity in your organization and your company culture."
        imageAlt="productivity-image"
        image={multiTaskImage}
        subBullets={[
          "Maximize Productivity and Growth",
          "Speed past your competition",
          "Learn the Top Techniques",
        ]}
      />
      <DetailedFeatureRow
        title="Automated Tasks"
        description="Save time and money with our revolutionary services. We are the leaders in the industry."
        imageAlt="automation-image"
        image={automationImage}
        subBullets={[
          "Automated Task Management workflows",
          "Detailed Analytics of your Data",
          "Some awesome Integrations",
        ]}
      />
    </Section>
  );
};
