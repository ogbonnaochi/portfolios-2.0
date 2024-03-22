import React from 'react';
import { motion } from "framer-motion";

type Props = {
  directionLeft?:boolean;
}

 function Skill({directionLeft}: Props) {
  return (
    <div className='group relative flex cursor-pointer'>
<motion.img
initial={{
  x: directionLeft ? -200 :200,
  opacity:0,
}}
  transition={{duration:1}}
  whileInView={{ opacity: 1, x: 0}}

  src='port.jpg' className='rounded-full border border-gray-500 w-24 h-24 xl:w-32 xl:h-32 filter group-hover:grayscale transition-duration-300 ease-in-out' />
  <div>

<div className='flex-item center justify-center h-full'>
<p className='text-3xl font-bold text-black opacity-100'>20%</p>
</div>


  </div>
  
 


    </div>
  );
}
export default Skill;