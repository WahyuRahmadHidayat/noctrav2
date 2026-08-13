import { Play } from 'lucide-react';
import whyWeRideData from 'views/home/variables/whyWeRideData';

export default function WhyWeRide() {
  return (
    <section className="py-24 container mx-auto px-8">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
        <div className="md:col-span-3">
          <h2 className="font-bebas text-7xl leading-none mb-6">WHY<br/>WE RIDE</h2>
          <p className="text-gray-400 text-sm leading-relaxed">
            More than speed. More than bikes. It's about freedom, connection, and pushing our limits together.
          </p>
        </div>
        
        <div className="md:col-span-4 space-y-8">
          {whyWeRideData.map((reason, idx) => (
            <div key={idx} className="flex gap-6 group cursor-default">
              <div className="group-hover:scale-110 transition-transform duration-300">{reason.icon}</div>
              <div>
                <h4 className="text-primary text-sm font-semibold tracking-wider mb-2">{reason.title}</h4>
                <p className="text-gray-400 text-sm">{reason.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="md:col-span-5 relative group cursor-pointer overflow-hidden border border-border">
          <img 
            src="https://images.unsplash.com/photo-1541625602330-2277a4c46182?q=80&w=1000&auto=format&fit=crop" 
            alt="Night Ride" 
            className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/20 transition-colors duration-300">
            <div className="bg-background/80 rounded-full p-4 border border-white group-hover:border-primary transition-colors duration-300">
              <Play size={24} className="fill-white group-hover:fill-primary transition-colors duration-300" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}