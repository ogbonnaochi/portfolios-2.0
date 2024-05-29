import React from 'react';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import BackgroundCircle from './BackgroundCircle';


type Props = {};

export default function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: [
      "Hi, I'm DONATUS OCHINANWATA",
      "A Developer', 'Design', 'Creator",
      "<AND LOVES TO CODE />" 
    ],
    loop:true,
    delaySpeed:2000,
  });

  return (
    <div className='bg-[black] text-white h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
     <BackgroundCircle />
      {/* <img className='w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center' src=" ./hope.jpg" 
     
     />  */}

     <div className='z-20'>
      
      <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[15px]'>Software Developer</h2>
      <h1 className='text-5xl lg:text-6xl font-semibold scroll-px-10'>
        <span className='mr-3'>{text}</span>
        <Cursor cursorColor=" #F7AB0A " />
      </h1>
      <div className='pt-5 space-x-4'>
  <a href='#About'> 
    <button className='heroButton'>About</button>
  </a> 

  <a href='#Experience'> 
    <button className='heroButton'>Experience</button>
  </a> 

  <a href='#Skills'> 
    <button className='heroButton'>Skills</button>
  </a> 

  <a href='#Projects'> 
    <button className='heroButton'>Projects</button>
  </a> 
</div>

      
      </div>


    </div>
  );
} 