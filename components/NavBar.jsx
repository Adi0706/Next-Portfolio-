import React from 'react';
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiBuymeacoffee } from "react-icons/si";
import { Spotlight } from './ui/Spotlight';

function NavBar() {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <Spotlight />
      <nav className='bg-black w-full fixed top-0 z-50 bg-opacity-90'>
        <ul className='flex items-center justify-between p-2'>
          <li>
            <span
              className='text-3xl p-2 text-white cursor-pointer'
              onClick={() => scrollToSection('home')}
            >
              <span className='text-red-600'>Aditya</span> Bhattacharjee
              <span className='text-sm  font-bold'>Dev</span>
            </span>
          </li>
          <li>
            <div className='socials'>
              <ul className='flex items-center justify-start p-2 gap-5 font-bold text-white'>
                <li
                  className='cursor-pointer'
                  onClick={() => scrollToSection('home')}
                >
                  Home
                </li>
                <li
                  className='cursor-pointer'
                  onClick={() => scrollToSection('services')}
                >
                  Services
                </li>
                <li
                  className='cursor-pointer'
                  onClick={() => scrollToSection('projects')}
                >
                  Projects
                </li>
                <li
                  className='cursor-pointer'
                  onClick={() => scrollToSection('contact')}
                >
                  Contact
                </li>
                <li>
                  <div className=''>|</div>
                </li>
                <li>
                  <div className=' social-icons flex gap-5 '>
                  <a href='https://github.com/Adi0706' target='_blank'><FaGithub className='w-5 h-5' /></a>  
                   <a href='https://www.linkedin.com/in/aditya-bhattacharjee-288462215/' target='_blank'><FaLinkedin className='w-5 h-5' /></a> 
                    <a href='https://twitter.com/Acejumanji' target='_blank'><FaXTwitter className='w-5 h-5' /></a>
                    <a href='https://buymeacoffee.com/adityabhatk' target='_blank'><SiBuymeacoffee className='w-5 h-5' /></a>
                  </div>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default NavBar;
