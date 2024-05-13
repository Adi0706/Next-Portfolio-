'use client'
import React from 'react';
import { FaLocationDot } from "react-icons/fa6";
import { CiMail } from "react-icons/ci";
import '../node_modules/@xterm/xterm/css/xterm.css';
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiBuymeacoffee } from "react-icons/si";
import { useForm, ValidationError } from '@formspree/react'


function Contact() {
  const [state, handleSubmit] = useForm("mjvnzrao");

  const handleFormSubmit = async (e) => {
    e.preventDefault();
  try{
    const result= await handleSubmit(e) ; 
    alert("Message sent") ; 
    console.log(result) ; 
  }catch(err){
    console.log(err) ;
    alert("Error !")
  }
  };
  


  return (
    <div  id='contact' className='Contact-Section w-screen bg-black flex items-center justify-evenly h-screen'>
      <div className=' flex flex-col items-center text-white'>
     <span className='text-white flex text-2xl mr-56 my-5'><FaLocationDot  className='text-white w-7 h-7 mx-5'/>India</span> 
     <span className='text-white flex mx-5'><CiMail className='text-white w-7 h-7 mx-5'/>aditya.bhattacharjee706@gmail.com</span>
     
     <div className='flex items-center gap-2 my-5 mr-48'>
     <a href='https://github.com/Adi0706' target='_blank'><FaGithub className='w-5 h-5' /></a>  
                   <a href='https://www.linkedin.com/in/aditya-bhattacharjee-288462215/' target='_blank'><FaLinkedin className='w-5 h-5' /></a> 
                    <a href='https://twitter.com/Acejumanji' target='_blank'><FaXTwitter className='w-5 h-5' /></a>
                    <a href='https://buymeacoffee.com/adityabhatk' target='_blank'><SiBuymeacoffee className='w-5 h-5' /></a>
                    </div>
      </div>
      
      <div className='Contact-Form text-white w-3/4 md:w-1/2 lg:w-1/3 xl:w-1/4 flex flex-col items-center '>
        <p className='text-5xl font-bold mb-6 text-white'>Contact Us</p>
        <form className='form flex flex-col items-center w-full' onSubmit={(e)=>handleFormSubmit(e)}>
          <div className='flex flex-col p-2 w-full'>
            <input type="text" id="name" className='input-field text-black p-3 rounded-xl ' name='name' placeholder="Enter your name" />
          </div>
          <div className='flex flex-col p-2 w-full'>
            <input type="email" id="email" className='input-field text-black p-3 rounded-xl' placeholder="Enter your email address" name="email"/>
          </div>
          <div className='flex flex-col p-2 w-full'>
            <textarea id="message" rows="5" className='input-field text-black p-3 rounded-xl' placeholder="Enter your message" name="message"></textarea>
          </div>
          <button type="submit" className='bg-white border border-solid border-white text-black font-bold py-2 px-4 rounded hover:bg-black hover:text-white mt-6 w-36'>Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
