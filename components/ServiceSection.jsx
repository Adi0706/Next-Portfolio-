import { HoverEffect } from '../components/ui/card-hover-effect';
import ServiceData from '../data/ServiceSection';


export default function ServiceSection() {
  return (
    <>
    
    <div className='service-section w-full h-auto bg-black flex flex-col items-center justify-center p-12'>
        <h1 className="text-white text-3xl   font-bold m-2 p-2 rounded-md text-center">Services</h1>
      <div className='service-grid flex gap-7'>
        {ServiceData.map((item) => (
          <div key={item.id} className="mb-8">
            <HoverEffect items={[item]} />
          </div>
        ))}
      </div>
    </div>
    </>
  );
}
