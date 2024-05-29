import React from 'react';
import { motion } from "framer-motion";

type Props = {}

function Projects({}: Props) {
  const projects = [1, 2, 3, 4, 5];

return (
  <div className='h-screen overflow-hidden  max-w-full justify-evenly mx-auto items-center'>

    <h3 className='top-24 uppercase tracking-[20px] text-grey-500 text-2xl'>Projects</h3>
  
    <div className='scroll-container'>
      {projects.map((project, index) => (
        <React.Fragment key={index}>

          <div className='item'>

            <div className='item-content'>
            <div className='img-container'>
            <motion.img 
              initial={{ y: -300 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2 }}
              viewport={{ once: true }}
              src='how.jpg' 
              alt='' 
            /> 
          </div>

          <div className='text-container'>
            <h4 className='text-4xl font-semibold text-center'>Case Study 1 OF LinkedIn Clone</h4>
            <p className='text-lg text-center md:text-left'>The Netflix platform uses algorithms to personalize recommendations,
               making it easier for users to discover shows they'll love.  
               This shift from traditional cable has led to a surge in "binge-watching,"
                where viewers devour entire seasons in a short amount of time. 
                Netflix's success has also spurred competition from other streaming services, 
                all vying for viewers' attention.</p>
          </div>

            </div>

      

    

          </div>

         
        </React.Fragment>
      ))}
    </div>
  </div>
);
      }
export default Projects;