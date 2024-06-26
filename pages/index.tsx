
import type { NextPage } from 'next';
import Head from 'next/head';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import WorkExperience from '../components/WorkExperience';
import Skill from '../components/Skill';
import Projects from '../components/Projects';
import ContactMe from '../components/ContactMe';
<link rel="shortcut icon" href="#"></link>
import Link from 'next/link';




const Home: NextPage = () => {
  return (

    <div className='bg-[rgb(36,36,36)]  text-black h-screen'  >

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
      {/* <section id='TechnicalSkills' className='snap-start'>

        <Skill />
      </section> */}


      {/* Project*/}

      <section id='Projects' className='snap-start'>

        <Projects />
      </section>

      {/* Contact Me*/}
      <section id='contact' className='snap-start'>
        <ContactMe />
      </section>

      <Link href='#hero'>

        <footer className=' bottom-5 w-full cursor-pointer'>
          <div className='flex items-items justify-center'>

            <img className='h-10 w-10 rounded-full filter grayscale hover:grayscale-0' src='hope.jpg' alt='' /></div>
        </footer>

      </Link>
    </div>

  );
};

export default Home;
