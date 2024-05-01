import React from 'react';
import Image from 'next/image';
import AboutImage from '../Media/Media/aboutimage.png';
import {Meteors} from '../components/ui/meteors';

function HeroSection() {
  

  return (
    <>
    
    <div className='hero-section w-full h-auto  flex items-center justify-evenly p-6 bg-black' >
    <Meteors></Meteors>
      <div className='hero-section-1 max-w-lg flex flex-col gap-2 text-white'>
        <p className='font-bold text-4xl mb-4 text-red-600'>Hello,</p>
        <p className='text-6xl font-semibold mb-2'>I'm Aditya Bhattacharjee</p>
        <p className='text-lg text-gray-600 leading-tight mb-4'>
          Software Developer | Freelancer
        </p>
        <div className="text-lg text-gray-600  leading-relaxed mb-7">
          <p>
            I am a Software Developer based in India, with a passion for building intuitive and dynamic user interfaces.
            Additionally, I am proficient in backend development.
          </p>
          {/* Wrap the existing button with the Button component */}
          <button
            borderRadius="1.75rem"
            className="contact-button mt-12 border border-solid border-white p-3 text-sm font-bold rounded-full text-white bg-slate-950 hover:bg-white hover:text-black"
          >
            Contact Me
          </button>
        </div>
        
      </div>
      
      <div className='hero-section-2 w-96 h-auto rounded-full overflow-hidden shadow-lg shadow-white '>
        <Image src={AboutImage} alt='About Image' width={800} height={800} className='object-cover ' />
      </div>
    </div>
    
    </>
  );
}

export default HeroSection;