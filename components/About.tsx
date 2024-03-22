import React from 'react'
import { motion } from "framer-motion";

type Props = {}

export default function About({}: Props) {
  return (
    <motion.div 

  initial= {{opacity:0}}
    whileInView={{ opacity: 1, x: 0}}
    transition={{duration:1.5 }}

        
    
    className='flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10  justify-evenly mx-auto items-center'>
        
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>ABOUT</h3>  
        
        
        <motion.img
        initial={{

            x: -200,
            opacity:0,
         }}

         transition={{
            duration:1.5,
         }}


         whileInView={{ opacity: 1, x: 0}}
         viewport={{once: true}}

    
         className='w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center' src='./hope.jpg'/>

     
        

        <div className='space-y-10 px-0 md:px-10'>
          <h4 className='text-4xl font-semibold'> Here is a {''}
          <span className='underline decoration-[#F7AB0A]/50'> little</span> Background{''}
          </h4>

          <p className='pt-8 text-base'>

            Hello, I'm Ochinanwata Donatus Ogbonna, a seasoned software front-end developer specializing
             in crafting intuitive and dynamic user experiences. With expertise in React, Vue, Next.js, 
             and Node.js, I've spearheaded a few projects, blending cutting-edge technologies to deliver seamless web solutions. 
             My passion lies in transforming ideas into captivating digital experiences, 
             employing clean code and innovative design principles. 
             From conceptualization to implementation, I thrive on pushing boundaries and exceeding expectations
              in the ever-evolving landscape of web development. Whether it's building responsive interfaces or optimizing performance, 
              I bring a meticulous eye for detail and a dedication to delivering exceptional results. 
              With a proven track record of delivering high-quality, scalable applications, I'm committed to staying at the forefront of technology, 
              continually honing my skills to drive innovation and create impactful solutions.
               Welcome to my digital realm, where creativity meets functionality, 
               and every line of code tells a story of innovation and excellence.!

          </p>
        </div>



        
        </motion.div>
  );
}

