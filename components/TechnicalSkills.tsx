import React from 'react';
import { motion } from "framer-motion";
import Skill from './Skill';

type Props = {}

function TechnicalSkills({}: Props) {
  return (  
  <motion.div className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0'>
<h3 className='absolute top-24 uppercase tracking-[20px] text-grey-500 text-2xl'>Skill</h3>

<h3 className='absolute top-24 uppercase tracking-[20px] text-grey-500 text-sm'>Hover over to see my Skills</h3>



<div className='grid grid-cols-4 gap-5'>

  

</div>
    </motion.div>
  ); 
}

export default TechnicalSkills;
