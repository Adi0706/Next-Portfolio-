'use client'
import React from 'react';
import ClientSectionData from '../data/ClientSection'
import Image from 'next/image';
function ClientSection() {
  return (
    <section id="client" className="Client-Section w-full h-auto mt-0 bg-black py-8">
      <div className="container mx-auto">
        <h1 className="text-white text-3xl md:text-4xl font-bold p-1 rounded-md text-center">Clients</h1> 

        <div className='Bentogrid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:mx-12'>
          {ClientSectionData.map((client, index) => (
            <div key={index} className="Client-Item">
              
                
                  <div className="Client-Content  flex flex-col items-center justify-start">
                    <Image src={client.image} className='w-96 h-96'></Image>
                    <h2 className="text-white text-xl md:text-2xl font-bold -mt-16">{client.client_name}</h2>
                    
                  </div>
              
           
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ClientSection;
