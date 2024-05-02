// Import the images correctly with the correct path
import NutriHive from '../public/Media/nutrihive.png';
import RepsNSets from '../public/Media/RepsNSets.png';
import MindMender from '../public/Media/MindMender.png';
import PhotoPort from '../public/Media/photoport.png';
import Pixate from '../public/Media/pixate.png';

// Define the ProjectSectionData array with the imported images
const ProjectSectionData = [
    {
        id: 1,
        title: "Nutrihive",
        description: "Health Supplement E-Commerce Website using ReactJs, NodeJs, ExpressJs, MongoDB, and TailwindCss.",
        image: NutriHive,
        href: "https://example.com/nutrihive" // Add dynamic link here
    },
    {
        id: 2,
        title: "Reps N Sets",
        description: "Personal Fitness Website using ReactJs, NodeJs, ExpressJs, MongoDB, and FramerMotion",
        image: RepsNSets,
        href: "https://example.com/repsnsets" // Add dynamic link here
    },
    {
        id: 3,
        title: "MindMender",
        description: "Mental Healthcare Services Web application using ReactJs",
        image: MindMender,
        href: "https://example.com/mindmender" // Add dynamic link here
    },
    {
        id: 4,
        title: "Photography Portfolio",
        description: "Photography Portfolio using ReactJs",
        image: PhotoPort,
        href: "https://example.com/photoportfolio" // Add dynamic link here
    },
    {
        id: 5,
        title: "Pixate",
        description: "Image Generator using ReactJs, NodeJs, ExpressJs, OpenAI API, React-Three-Fibre",
        image: Pixate,
        href: "https://example.com/pixate" // Add dynamic link here
    },
    {
        id: 6,
        title: "Streameon",
        description: "Peer to Peer Video Calling Platform using ReactJs, NodeJs, ExpressJs, MongoDB, SocketIO, and WebRTC",
        image: Pixate, // If the image path is empty, make sure you're using a placeholder or default image
        href: "https://example.com/streameon" // Add dynamic link here
    }
];

export default ProjectSectionData;
