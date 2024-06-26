import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import ExperienceCard from './ExperienceCard';
import splide from '@splidejs/splide'
import '@splidejs/splide/dist/css/splide.min.css';

const Slider = () => {
  useEffect(() => {
    new splide('.splide', {
      type   : 'loop',
      perPage: 3,
      gap    : '1rem',
    }).mount();
  }, []);

  

};


function WorkExperience() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const experiences = [<ExperienceCard key="1" />, <ExperienceCard key="2" />, <ExperienceCard key="3" />, <ExperienceCard key="4" />];

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? experiences.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === experiences.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">Experience</h3>

      <div className="relative w-full flex justify-center items-center">
        <button className="splide_arrow solid__arrow--next" type="button" aria-label="next-slide" aria-controls="splide01-track">
          {}
        </button>

        <div className="w-full flex space-x-5 overflow-hidden p-10 snap-x snap-mandatory">
          {experiences.map((experience, index) => (
            <div
              key={index}
              className={`transition-transform duration-500 ease-in-out transform ${
                index === currentIndex ? 'translate-x-0' : '-translate-x-full'
              }`}
            >
              {experience}
            </div>
          ))}
        </div>

        <button onClick={handleNext} className="absolute right-0 z-10 p-2 bg-gray-700 rounded-full text-white">
          
        </button>
      </div>
    </motion.div>
  );
}

export default WorkExperience;
