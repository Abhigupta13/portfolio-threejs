import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services2 } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className=' w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const Resume = () => {
    
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My</p>
        <h2 className={styles.sectionHeadText}>Resume.</h2>
      </motion.div>

      {/* <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        I'm a skilled developer with experience in Python and
        JavaScript, and expertise in frameworks like React, Node.js, and
        FastAPI. I'm a quick learner and collaborate closely with clients to
        create efficient, scalable, and user-friendly solutions that solve
        real-world problems. Let's work together to bring your ideas to life!
      </motion.p> */}
    
    <a href="https://drive.google.com/file/d/10Q3KrEGSj4eOk4GzxpGoWx6WbivjwJX_/view?usp=sharing">
      <div className='mt-10 flex flex-wrap gap-10'>
        {services2.map((service2, index) => (
          <ServiceCard key={service2.title} index={index} {...service2} />
        ))}
      </div>
    </a>
    </>
  );
};

export default SectionWrapper(Resume, "resume");