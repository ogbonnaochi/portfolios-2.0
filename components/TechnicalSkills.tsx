import React from 'react';
import { motion } from "framer-motion";

type Props = {
  directionLeft?: boolean;
}

function TechnicalSkills({ directionLeft }: Props) {
  return (
    <div>
  <motion.img
    initial={{
      x: directionLeft ? -200 : 200,
      opacity: 0,
    }}
    transition={{ duration: 1 }}
    whileInView={{ opacity: 1, x: 0 }}
    src='port.jpg'
    className=' rounded-full border border-gray-500 object-cover w-24 h-24 xl:w-[100vh] xl:h-[100vh] filter group-hover:grayscale transition-duration-300 ease-in-out'
    alt='Skill Image'
  />
</div>

  );
}

export default TechnicalSkills;
