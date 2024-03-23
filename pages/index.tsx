import type { NextPage } from 'next';
import Head from 'next/head';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import WorkExperience from '../components/WorkExperience';
import TechnicalSkills from '../components/TechnicalSkills';
import Projects from '../components/Projects';



import ExperienceCard from '../components/ExperienceCard';






const Home: NextPage = () => {
  return (
   
      <div className='
      bg-[black] text-white h-screen snap-y sanp-mandatory  overflow-scroll z-0'>

        <Head>
<title>donatusportfolio</title>
 </Head>
<Header />

<section id='hero' className='snap-start'>
 
  <Hero />


</section>


<section id='About' className='snap-center'>
          <About />
</section>


            
<section id='WorkExperience' className='snap-center'>
<WorkExperience />
</section>

              {/* TechnicalSkills*/}
              <section id='TechnicalSkills' className='snap-start'>

                <TechnicalSkills />
              </section>

             
                {/* Project*/}

                <section id='Projects' className='snap-start'>

                <Projects />
              </section>
                  {/* Contact Me*/}
      </div>
  
  );
};

export default Home;
