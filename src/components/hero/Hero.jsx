import React, { useState, useEffect } from "react";

import hero1 from "../../assets/img/hero.jpg";
import hero2 from "../../assets/img/hero.jpg";

const slides = [
  {
    image: hero1,
    heading: "Alex Steffen",
    text: "Recycling is a good thing to do. It makes us feel better, but it doesn't really address the core issue of our throwaway culture.",
  },
  {
    image: hero2,
    heading: "Anonymous",
    text: "Recycling turns things into other things, which is like magic.",
  },
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-screen flex items-center justify-center">
      <div className="absolute inset-0 bg-black opacity-70"></div>
      <div className="relative z-10 text-center p-4">
        <h1 className="mt-[5%] text-7xl font-extrabold text-white animate-slideTop">
          {slides[currentSlide].heading}
        </h1>
        <p className="mt-[3%] text-white text-2xl px-32 animate-slideBottom">
          {slides[currentSlide].text}
        </p>
        {/* <div className="mt-[3%] space-x-4">
          <button className="bg-[#84b3df] font-bold text-white py-3 px-6 rounded-xl hover:bg-blue-700 transition duration-300">
            Get Started
          </button>
          <button className="bg-green-500 font-bold text-white py-3 px-6 rounded-xl hover:bg-green-700 transition duration-300">
            Book Now
          </button>
        </div> */}
      </div>
      <div
        className="absolute inset-0 bg-cover bg-center animate-fadeLeft"
        style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
      ></div>
    </div>
  );
};

export default Hero;
