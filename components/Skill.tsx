import React from 'react';
import { motion } from "framer-motion";

type Props = {
  directionLeft?: boolean;
}

function Skill({ directionLeft }: Props) {
  return (
    <div className='group relative flex cursor-pointer'>
      <motion.img
        initial={{
          x: directionLeft ? -200 : 200,
          opacity: 0,
        }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        src='port.jpg'
        className='w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px]'
        alt='Skill Image'
      />
      <div className='flex-item center justify-center h-screen'>
        <p className='text-2xl font-bold text-black opacity-100'>20%</p>
      </div>
    </div>
  );
}

export default Skill;
