'use client';

import React from 'react';
import ProjectSectionData from '../data/ProjectSection';
import { DirectionAwareHover } from '../components/ui/direction-aware-hover';
import Proj from '../public/Media/proj.png';

function ProjectSection() {
  return (
    <>
      <div id='projects' className='Project-Section w-full h-auto bg-black'>
        <h1 className="text-white text-3xl md:text-4xl font-bold p-1  rounded-md text-center">Projects</h1>
        <div className='Bentogrid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:mx-12'>
          {ProjectSectionData.map((project, index) => (
            <div key={index} className="Project-Item">
              <a href={project.href} target="_blank" rel="noopener noreferrer">
                <DirectionAwareHover imageUrl={Proj}>
                  <div className="Project-Content p-4">
                    <h2 className="text-white text-xl md:text-2xl font-bold">{project.title}</h2>
                    <p className="text-white text-sm md:text-base">{project.description}</p>
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
