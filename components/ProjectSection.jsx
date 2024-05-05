'use client';

import React from 'react';
import ProjectSectionData from '../data/ProjectSection';
import Image from 'next/image';
import { DirectionAwareHover } from '../components/ui/direction-aware-hover';

function ProjectSection() {
  return (
    <>
      <div className='Project-Section w-screen h-screen bg-black'>
        <h1 className="text-white text-3xl font-bold p-1  rounded-md text-center">Projects</h1>
        <div className='Bentogrid grid grid-cols-4 m-7 gap-4'>
          {ProjectSectionData.map((project, index) => (
            <div key={index} className="Project-Item">
              <a href={project.href} target="_blank" rel="noopener noreferrer"> 
                <DirectionAwareHover imageUrl={project.image}>
                  <div className="Project-Content">
                    <h2 className="text-white text-xl font-bold">{project.title}</h2>
                    <p className="text-white">{project.description}</p>
                  </div>
                </DirectionAwareHover>
              </a>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default ProjectSection;
