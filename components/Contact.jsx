'use client'
import React from 'react';
import { FaLocationDot } from "react-icons/fa6";
import { CiMail } from "react-icons/ci";
import '../node_modules/@xterm/xterm/css/xterm.css';
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiBuymeacoffee } from "react-icons/si";


function Contact() {
 

  return (
    <div  id='contact' className='Contact-Section w-screen bg-black flex items-center justify-evenly h-screen'>
      <div className=' flex flex-col items-center text-white'>
     <span className='text-white flex text-2xl mr-56 my-5'><FaLocationDot  className='text-white w-7 h-7 mx-5'/>India</span> 
     <span className='text-white flex mx-5'><CiMail className='text-white w-7 h-7 mx-5'/>aditya.bhattacharjee706@gmail.com</span>
     
     <div className='flex items-center gap-2 my-5 mr-48'>
     <FaGithub className='w-5 h-5' />
                    <FaLinkedin className='w-5 h-5' />
                    <FaXTwitter className='w-5 h-5' />
                    <SiBuymeacoffee className='w-5 h-5' />
                    </div>
      </div>
      
      <div className='Contact-Form text-white w-3/4 md:w-1/2 lg:w-1/3 xl:w-1/4 flex flex-col items-center '>
        <p className='text-5xl font-bold mb-6 text-white'>Contact Us</p>
        <form className='form flex flex-col items-center w-full'>
          <div className='flex flex-col p-2 w-full'>
            <input type="text" id="name" className='input-field p-3 rounded-xl ' placeholder="Enter your name" />
          </div>
          <div className='flex flex-col p-2 w-full'>
            <input type="email" id="email" className='input-field p-3 rounded-xl' placeholder="Enter your email address" />
          </div>
          <div className='flex flex-col p-2 w-full'>
            <textarea id="message" rows="5" className='input-field p-3 rounded-xl' placeholder="Enter your message"></textarea>
          </div>
          <button type="submit" className='bg-white border border-solid border-white text-black font-bold py-2 px-4 rounded hover:bg-black hover:text-white mt-6 w-36'>Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
