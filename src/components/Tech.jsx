import React from "react";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { useMediaQuery } from "react-responsive";

const ServiceCard = ({ index, name, icon, isMobile }) => (
  <Tilt className="xs:w-[220px] w-full">
    {isMobile ? (
      <div className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card">
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary rounded-[20px] py-5 px-6 flex justify-evenly items-center flex-col "
        >
          <img
            src={icon}
            alt="web-development"
            className="w-18 h-16 object-contain"
          />

          <h3 className="text-white text-[20px] font-bold text-center">
            {name.length < 12 ? name + " ".repeat(12 - name.length) : name}
          </h3>
        </div>
      </div>
    ) : (
      <motion.div
        variants={fadeIn("right", "spring", index * 0.5, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary rounded-[20px] py-5 px-6 flex justify-evenly items-center flex-col "
        >
          <img
            src={icon}
            alt="web-development"
            className="w-18 h-16 object-contain"
          />

          <h3 className="text-white text-[20px] font-bold text-center">
            {name.length < 12 ? name + " ".repeat(12 - name.length) : name}
          </h3>
        </div>
      </motion.div>
    )}
  </Tilt>
);

const Tech = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 }); // Adjust breakpoint as needed

  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((technology, index) => (
        <div className="w-44 h-44" key={technology.name}>
          <ServiceCard
            key={technology.name}
            index={index}
            icon={technology.icon}
            isMobile={isMobile}
            {...technology}
          />
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
