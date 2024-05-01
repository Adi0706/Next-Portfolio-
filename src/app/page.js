import Image from "next/image";
import HeroSection from "../../components/HeroSection";
import ServiceSection from "../../components/ServiceSection";

export default function Home() {
  return (
    <main className=" min-h-screen ">
      <HeroSection/>
      <ServiceSection/>
     
    </main>
  );
}
