import React from 'react';
import { motion } from "framer-motion";
import Skill from './Skill';

type Props = {}

function TechnicalSkills({}: Props) {
  return (  
  <motion.div className='flex relative flex-col text-center md:text-left fl:-flex-row max-w-[200px] xl:px-10 min-h-screen justify-center xl:space-y-0 max-auto items-center'>
<h3 className='absolute top-36 uppercase tracking-[20px] text-gray-500 text-2xl'>Skill</h3>

<h3 className='absolute top-20 uppercase tracking-[20px] text-gray-500 text-sm'>Hover over to see my Skills</h3>



<div className='grid grid-cols-4 gap-5'>
<Skill /> 
  

</div>
    </motion.div>
  ); 
}

export default TechnicalSkills;
