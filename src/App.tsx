import React from "react";
import {
  FeaturesCardsAtGlance,
  DetailedFeatures,
  CompanyLogos,
  Footer,
  Blogs,
  Team,
  Hero,
} from "./screens";

const App = () => {
  return (
    <>
      <Hero />
      <CompanyLogos />
      <DetailedFeatures />
      <FeaturesCardsAtGlance />
      <Team />
      <Blogs />
      <Footer />
    </>
  );
};

export default App;
