
'use client' ; 
import React, { useEffect } from 'react';
import { Terminal } from '@xterm/xterm';
import '../node_modules/@xterm/xterm/css/xterm.css';

function Contact() {
  useEffect(() => {
    const term = new Terminal();
    term.open(document.getElementById('terminal'));
    term.write('Hello from adityabhattacharjee.dev ');
    
    return () => {
      term.dispose();
    };
  }, []); 

  return (
    <div className='Contact-Section w-screen   bg-black flex items-center justify-around h-screen'>
      <div className='Terminal-Section  w-auto shadow-xl shadow-slate-100 flex items-center justify-center border border-solid border-white'>
        <div id="terminal"></div> {/* Terminal container */}
      </div>
      <div className='Contact-Form  text-white w-3/4 md:w-1/2 lg:w-1/3 xl:w-1/4 flex flex-col items-center '>
        <p className='text-3xl font-bold mb-6 text-white'>Contact Us</p>
        <form className='form flex flex-col items-center w-full'>
          <div className='flex flex-col p-2 w-full'>
            <label htmlFor="name" className='text-white'>Name*</label>
            <input type="text" id="name" className='input-field p-3 rounded-xl' placeholder="Enter your name" />
          </div>
          <div className='flex flex-col p-2 w-full'>
            <label htmlFor="email" className='text-white'>Email*</label>
            <input type="email" id="email" className='input-field p-3 rounded-xl' placeholder="Enter your email address" />
          </div>
          <div className='flex flex-col p-2 w-full'>
            <label htmlFor="message" className='text-white'>Message*</label>
            <textarea id="message" rows="5" className='input-field p-3 rounded-xl' placeholder="Enter your message"></textarea>
          </div>
          <button type="submit" className='bg-white border border-solid border-white text-black font-bold py-2 px-4 rounded hover:bg-black hover:text-white mt-6 w-36'>Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
