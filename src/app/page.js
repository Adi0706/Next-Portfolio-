
import HeroSection from "../../components/HeroSection";
import ServiceSection from "../../components/ServiceSection";
import ProjectSection from "../../components/ProjectSection";
import ContactForm from '../../components/Contact' ; 
import Footer from '../../components/Footer' ; 

export default function Home() {
  return (
    <main className=" min-h-screen ">
      <HeroSection/>
      <ServiceSection/>
      <ProjectSection/>
      <ContactForm/>
      <Footer/>
    </main>
  );
}
