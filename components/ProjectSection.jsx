'use client';

import React from 'react';
import NutriHiveImage from '../public/Media/nutrihive.png';
import RepsNSetsImage from '../public/Media/RepsNSets.png';
import MindMenderImage from '../public/Media/MindMender.png';
import PhotoPortImage from '../public/Media/photoport.png';
import PixateImage from '../public/Media/pixate.png';
import ProjectSectionData from '../data/ProjectSection';
import { CardContainer, CardBody, CardItem } from '../components/ui/3d-card';

function ProjectSection() {
  return (
    <div className='Project-Section w-full h-auto m-0 bg-black'>
      <h1 className="text-white text-3xl font-bold p-2 rounded-md text-center">Projects</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 justify-center p-8">
        {ProjectSectionData.map((project, index) => (
          <CardContainer key={index} containerClassName="w-96 h-96">
            <CardBody>
              <CardItem as="img" src={getImageSource(project.title)} alt={project.title} className="w-full h-full object-cover rounded-lg" />
            </CardBody>
            <CardBody>
              <h2 className="text-white text-xl font-bold">{project.title}</h2>
              <p className="text-white">{project.description}</p>
            </CardBody>
          </CardContainer>
        ))}
      </div>
    </div>
  );
}

// Helper function to get image source based on project title
function getImageSource(title) {
  switch (title) {
    case "Nutrihive":
      return NutriHiveImage;
    case "Reps N Sets":
      return RepsNSetsImage;
    case "MindMender":
      return MindMenderImage;
    case "Photography Portfolio":
      return PhotoPortImage;
    case "Pixate":
      return PixateImage;
    default:
      return ''; // Return empty string for default case or handle as needed
  }
}

export default ProjectSection;
