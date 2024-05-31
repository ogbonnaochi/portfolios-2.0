import React from 'react';
import { motion } from "framer-motion";

type Props = {}

const projects = [
  {
    id: 1,
    title: 'LinkedIn Clone',
    description: 'The LinkedIn Clone platform uses algorithms to personalize recommendations, making it easier for users to discover shows they will love. This shift from traditional cable has led to a surge in binge-watching, where viewers devour entire seasons in a short amount of time. LinkedIn Clone success has also spurred competition from other streaming services, all vying for viewers attention.',
    image: 'net.jpg',
    github: 'https://github.com/yourusername/linkedin-clone'
  },
  {
    id: 2,
    title: 'Hospital Management Software',
    description: 'The system personalizes user experiences for both patients and staff, ensuring quick access to relevant information and services. By centralizing patient records, appointment scheduling, billing, and inventory management, the platform enhances communication and coordination across departments. This innovative approach reduces waiting times, minimizes errors, and optimizes resource allocation, ultimately leading to better healthcare outcomes.', 
    image: 'hosp.man.jpg',
    github: 'https://github.com/yourusername/hospital-management'
  },
  {
    id: 3,
    title: 'Asset Management system',
    description: 'This system provides a comprehensive solution for monitoring the lifecycle of assets, from acquisition to disposal, ensuring optimal utilization and maintenance. Through real-time tracking, automated alerts, and detailed reporting, the success of this system has driven the adoption of similar technologies across various industries, aiming to enhance asset performance and maximize return on investment.',
    image: 'asset.jpg',
    github: 'https://github.com/yourusername/asset-management'
  }
];

function Projects({}: Props) {
  return (
    <div className='h-screen overflow-hidden max-w-full justify-evenly mx-auto items-center'>
      <h3 className='top-24 uppercase tracking-[20px] text-gray-500 text-2xl justify-center text-center overflow-hidden'>Projects</h3>
      
      <div className='scroll-container'>
        {projects.map((project) => (
          <React.Fragment key={project.id}>
            <div className='item'>
              <div className='item-content'>
                <div className='img-container'>
                  <motion.img 
                    initial={{ y: -100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5, duration: 1.2 }}
                    viewport={{ once: true }}
                    src={project.image}
                    alt={project.title} 
                    className='soft-edges'
                  />
                </div>
                <div className='text-container'>
                  <h4 className='text-4xl font-semibold text-center'>{project.title}</h4>
                  <p className='text-lg text-center md:text-left'>{project.description}</p>
                  <a href={project.github} target='_blank' rel='noopener noreferrer' className='github-link'>View on GitHub</a>
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
