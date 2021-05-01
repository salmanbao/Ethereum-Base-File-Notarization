import React from "react";
import TopBar from "../components/homepage/TopBar";
import NavBar from "../components/homepage/NavBar";
import Slider from "../components/homepage/Slider";
import FileContainer from "../components/homepage/FileContainer";

import MiddleContainer from "../components/homepage/MiddleContainer";
import CardContainer from "../components/homepage/CardsContainer";
import Gallery from "./Gallery";
import Faq from "./Faq";
import Pricing from "./Pricing";
import Demo from "./Demo";
import Footer from "../components/homepage/Footer";
import TopFooter from "../components/homepage/TopFooter";
import { Link, useLocation } from "react-router-dom";

const ClientView = () => {
  return (
    <div>
      <section className="fixed-top">
        <TopBar />
        <NavBar />
      </section>
      <Slider />
      <FileContainer />
      <Gallery />
      <MiddleContainer />
      <Faq />
      <Demo />
      <Pricing />

      <CardContainer />
      <TopFooter />
      <Footer />
    </div>
  );
};

export default ClientView;
