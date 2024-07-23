// src/pages/Home.js
import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/hero/Hero";
import AllServices from "../components/AllServices";
import Footer from "../components/Footer";
import Stats from "../components/Stats";
import Gallery from "../components/Gallery";
import Testimonials from "../components/Testimonials";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Stats />
      <AllServices />
      <Gallery />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Home;
