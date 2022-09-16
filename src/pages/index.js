import * as React from "react";
import "../styles/index.css";
import AboutUs from "../components/AboutUs";
import Header from "../components/Header";
import WeOffer from "../components/WeOffer";
import WeOfferYou from "../components/WeOfferYou";
import Pricing from "../components/Pricing";

const IndexPage = () => {
  return (
    <div className="App">
      <Header />
      <AboutUs />
      <WeOffer />
      <WeOfferYou />
      <Pricing />
    </div>
  );
};

export default IndexPage;

export const Head = () => <title>Working space NIT</title>;
