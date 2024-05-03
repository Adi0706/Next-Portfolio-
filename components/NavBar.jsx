'use client';

import React from 'react';
import Image from 'next/image'; 
import Github from '../public/Media/github.png';
import Twitter from '../public/Media/x.png';
import Linkedin from '../public/Media/linkedin.png';
import Coffee from '../public/Media/coffee.png';



function NavBar() {
  
  return (
    <>
     
   
      <nav className='m-0 bg-black' >
        <ul className='flex items-center justify-between p-2'>
          <li>
            <span className='text-3xl p-2 text-white'>
              <span className='text-red-600'>Aditya</span> Bhattacharjee
              <span className='text-sm  font-bold'>Dev</span>
            </span>
          </li>
          <li>
          
            <div className='socials'>
              <ul className='flex items-center justify-start p-2 gap-5 font-bold text-white'>
                <li>Home</li>
                <li>Services</li>
                <li>Projects</li>
                <li>Testimonials</li>
                <li>Contact</li>
                <li>
                  <div className=''>|</div>
                </li>
                <li>
                  <div className=' social-icons flex gap-5 '>
                    
                    <Image src={Github} alt='Github' width={32} height={32} />
                    <Image src={Twitter} alt='Twitter' width={32} height={32} />
                    <Image src={Linkedin} alt='Linkedin' width={32} height={32} />
                    <Image src={Coffee} alt='Coffee' width={32} height={32} />
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
