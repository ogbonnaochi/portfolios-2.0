import React from 'react';
import { motion } from "framer-motion";
import TechnicalSkills from './TechnicalSkills';

type Props = {
  directionLeft?: boolean;
};

function Skill({ directionLeft }: Props) {
  return (
    <div className='group relative  cursor-pointer items-center justify-center'>
      {/* Image container to control the size and position */}
      {/* <div className='relative w-24 h-24 xl:w-32 xl:h-32'> */}
        {/* Motion image with constrained size */}
        {/* <motion.img
          initial={{
            x: directionLeft ? -200 : 200,
            opacity: 0,
          }}
          transition={{ duration: 1 }}
          whileInView={{ opacity: 1, x: 0 }}
          src='port.jpg'
          className='rounded-full border border-gray-500 object-cover w-full h-full filter group-hover:grayscale transition duration-300 ease-in-out'
          alt='Skill Image'
        /> */}
      {/* </div> */}
  
      {/* Text container positioned below the image */}
      <div className='top-[calc(100%+1rem)] flex flex-col items-center'>
        <h3 className='text-2xl uppercase tracking-[20px] text-gray-500'>Skill</h3>
        <h3 className='text-sm uppercase tracking-[20px] text-gray-500'>Hover over to see my Skills</h3>
       
      </div>
      <TechnicalSkills>
  

      </TechnicalSkills>
    </div>
  );
}

export default Skill;
