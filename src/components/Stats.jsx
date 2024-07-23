import { GoPeople } from "react-icons/go";
import { SiMinutemailer } from "react-icons/si";
import { MdOutlineRecommend } from "react-icons/md";
import { GiSouthAfricaFlag } from "react-icons/gi";
import CountUp from "react-countup";
import { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";

const Stats = () => {
  const size = 70;
  const fill = "#22223b";
  const stats = [
    {
      value: 102,
      description: "Services across the Country",
      icon: <GiSouthAfricaFlag fill={fill} size={size} />,
    },
    {
      value: 181,
      description: "Clients which were satisfied",
      icon: <GoPeople fill={fill} size={size} />,
    },
    {
      value: 20,
      description: "Bookings every month",
      icon: <SiMinutemailer fill={fill} size={size} />,
    },
    {
      value: 50,
      description: "Recommendations everyday",
      icon: <MdOutlineRecommend fill={fill} size={size} />,
    },
  ];

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div ref={ref} className="bg-white py-10">
      <h2 className="text-m uppercase font-bold text-center text-[#22223b] mb-8">
        Stats
        <span className="block mt-2 h-1 w-10 bg-[#ffafcc] mx-auto"></span>
      </h2>
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
        {stats.map((stat, index) => (
          <div key={index}>
            <h2 className="text-4xl font-bold text-[#c9ada7]">
              {inView && <CountUp start={0} end={stat.value} duration={5} />}
            </h2>
            <p className="mt-2 font-extrabold text-lg text-[#22223b]">
              {stat.description}
            </p>
            <div className="pl-[35%] mt-2">{stat.icon}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stats;
