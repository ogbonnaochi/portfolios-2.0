import React, { useState, useEffect } from 'react';

type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  github: string;
};

const projects: Project[] = [
  {
    id: 1,
    title: 'LinkedIn clone',
    description: 'This project is a LinkedIn Clone, aiming to replicate the core features of the professional networking site, LinkedIn. The clone includes functionalities such as user authentication, profile creation and management, connections between users, job postings, and a feed for posts and updates.',
    image: 'link.jpg',
    github: 'https://github.com/ogbonnaochi/netflix-clone-nextjs-14-copilot-azure-cosmos-db-typescript-shadcn-main.git'
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
    github: 'https://github.com/ogbonnaochi/asset-management'
  },
  {
    id: 3,
    title: 'Google Translate Clone',
    description: 'A Google Translate clone is a web or mobile application designed to mimic the functionality of Google Translate, allowing users to translate text between multiple languages.',
    image: 'google.jpg',
    github: 'https://github.com/ogbonnaochi/asset-management'
  }
];

const Projects: React.FC = () => {
  const [currentProject, setCurrentProject] = useState(0);
  

 
  const handleNextProject = () => {
    setCurrentProject((prevIndex) => (prevIndex === projects.length - 1 ? 0 : prevIndex + 1));
  };

  
  const handlePrevProject = () => {
    setCurrentProject((prevIndex) => (prevIndex === 0 ? projects.length - 1 : prevIndex - 1));
  };

  
  const handleGoToProject = (index: number) => {
    setCurrentProject(index);
  };

  
  useEffect(() => {
    const timer = setInterval(() => {
      handleNextProject();
    }, 5000); 
    return () => clearInterval(timer);
  }, [currentProject]);

  return (
    <div className='h-screen overflow-hidden max-w-full justify-evenly mx-auto items-center'>
      <h3 className='top-24 uppercase tracking-[20px] text-gray-500 text-2xl justify-center text-center '>Projects</h3>
      
    
    
      
      <div className='scroll-container'>
        <div className='item'>
          <div className='item-content'>
            <div className='img-container'>
              <img 
                src={projects[currentProject].image}
                alt={projects[currentProject].title} 
                className='soft-edges'
              />
            </div>
            <div className='text-container'>
              <h4 className='text-4xl font-semibold text-center'>{projects[currentProject].title}</h4>
              <p className='text-lg text-center md:text-left'>{projects[currentProject].description}</p>
              <a href={projects[currentProject].github} target='_blank' rel='noopener noreferrer'>View on GitHub</a>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-8">
        {projects.map((project, index) => (
          <button
            key={project.id}
            className={`mr-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${currentProject === index ? 'bg-blue-700' : ''}`}
            onClick={() => handleGoToProject(index)}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Projects;
