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
                    <FaGithub className='w-5 h-5' />
                    <FaLinkedin className='w-5 h-5' />
                    <FaXTwitter className='w-5 h-5' />
                    <SiBuymeacoffee className='w-5 h-5' />
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
