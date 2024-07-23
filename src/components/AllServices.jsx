import React from "react";
import hero from "../assets/img/about.jpg";

const services = [
  {
    title: "Natural Glam",
    description:
      "Achieve a flawless look that enhances your natural beauty with neutral tones and subtle highlights. This makeup style provides fuller foundation coverage and subtle sculpting, perfect for a polished everyday look​",
    price: "R600",
  },
  {
    title: "Soft Glam",
    description:
      "This look offers a soft, romantic feel with delicate shades and a light to medium coverage. Its perfect for events where you want to look effortlessly beautiful without heavy makeup​",
    price: "R600",
  },
  {
    title: "Full Glam",
    description:
      " Go bold with a dramatic look that includes intense colors, heavy contouring, and a strong emphasis on the eyes and lips. Ideal for special occasions or nights out​ ",
    price: "R700",
  },
  {
    title: "Bridal Full Day",
    description:
      "Comprehensive makeup service for your wedding day, ensuring you look stunning from morning to night. Includes touch-ups throughout the day to keep you picture-perfect",
    price: "R1800",
  },
  {
    title: "Bridal Makeup Only",
    description:
      "Look stunning on your special day with bridal makeup that includes long-lasting products to keep you looking fresh all day.",
    price: "R1200",
  },
  {
    title: "Bridesmaid",
    description:
      "Ensure your bridesmaids look their best with beautiful, cohesive makeup that complements the bridal theme..",
    price: "R550",
  },
  {
    title: "Flowegirl",
    description:
      "Delicate and age-appropriate makeup for the little ones, ensuring they look cute",
    price: "R300",
  },
  {
    title: "Groom",
    description:
      "Delicate and age-appropriate makeup for the Groooms, ensuring they look good and match with the braids maid ",
    price: "R550",
  },
];

const AllServices = () => {
  return (
    <div
      className="px-4 bg-[#4a4e69]  py-10 bg-cover bg-center"
      style={{ backgroundImage: `url(${hero})` }}
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-m uppercase font-bold text-center text-[#f2e9e4] mb-8">
          Our Services
          <span className="block mt-2 h-1 w-10 bg-[#ffafcc] mx-auto"></span>
        </h2>
        <div className="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex  flex-col bg-[#9a8c98] justify-between rounded-lg p-6  shadow-md h-full transform transition-transform duration-300 hover:scale-105"
            >
              <div>
                <h3 className="text-lg text-[#f2e9e4] font-semibold  mb-8">
                  {service.title}
                </h3>
                <p className=" text-m text-[#f2e9e4] mb-6">
                  {service.description}
                </p>
              </div>
              {/* <div className="mt-auto">
                <p className="text-lg font-bold text-gray-800">
                  {service.price}
                </p>
                <button className="mt-2 px-4 py-2 border border-[#6F4E37] text-sm text-gray-800 uppercase font-normal hover:bg-[#6F4E37] hover:text-white">
                  Book service
                </button>
              </div> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllServices;
