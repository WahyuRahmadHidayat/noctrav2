import whyRideBg from '@/assets/images/hero/why-ride-bg.avif';
import { Play } from 'lucide-react';
import whyWeRideData from '@/views/home/variables/whyWeRideData';

export default function WhyWeRide() {
  return (
    <section className="pt-12 pb-16 md:pb-24 container mx-auto px-4 md:px-8">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
        <div className="md:col-span-3 text-center md:text-left">
          <h2 className="font-bebas text-5xl md:text-7xl leading-none mb-4 md:mb-6">WHY<br className="hidden md:block"/>WE RIDE</h2>
          <p className="text-gray-400 text-xs md:text-sm leading-relaxed">
            More than speed. More than bikes. It's about freedom, connection, and pushing our limits together.
          </p>
        </div>
        
        <div className="md:col-span-4 space-y-6 md:space-y-8">
          {whyWeRideData.map((reason, idx) => (
            <div key={idx} className="flex gap-4 md:gap-6 group cursor-default">
              <div className="group-hover:scale-110 transition-transform duration-300 shrink-0">{reason.icon}</div>
              <div>
                <h4 className="text-primary text-xs md:text-sm font-semibold tracking-wider mb-1 md:mb-2">{reason.title}</h4>
                <p className="text-gray-400 text-xs md:text-sm">{reason.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="md:col-span-5 relative group cursor-pointer overflow-hidden border border-border mt-4 md:mt-0">
          <img 
            src={whyRideBg} 
            alt="Night Ride" 
            loading="lazy"
            className="w-full h-48 md:h-64 object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/20 transition-colors duration-300">
            <div className="bg-background/80 rounded-full p-3 md:p-4 border border-white group-hover:border-primary transition-colors duration-300">
              <Play size={24} className="fill-white group-hover:fill-primary transition-colors duration-300" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}