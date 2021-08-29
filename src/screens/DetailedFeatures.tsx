import React from "react";
import { DetailedFeatureRow, Section } from "../components";
import multiTaskImage from "../assets/multitask.png";
import automationImage from "../assets/industry.png";

export const DetailedFeatures = () => {
  return (
    <Section>
      <DetailedFeatureRow
        reverse
        title="Boost Productivity"
        description="Build an Atmosphere that creates productivity in your organization and your company culture."
        imageAlt="productivity-image"
        imageSrc={multiTaskImage}
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
        imageSrc={automationImage}
        subBullets={[
          "Automated Task Management workflows",
          "Detailed Analytics of your Data",
          "Some awesome Integrations",
        ]}
      />
    </Section>
  );
};
