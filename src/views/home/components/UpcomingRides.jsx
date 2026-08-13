import { ArrowRight, MapPin, Clock } from 'lucide-react';
import ridesData from 'views/home/variables/ridesData';

export default function UpcomingRides() {
  return (
    <section id="rides" className="py-16 container mx-auto px-8">
      <div className="flex justify-between items-center mb-10 border-t border-border pt-8">
        <h3 className="text-xl font-bold tracking-widest uppercase">Upcoming Rides</h3>
        <a href="#" className="flex items-center text-xs tracking-widest text-primary hover:text-white transition-colors duration-300">
          VIEW ALL RIDES <ArrowRight size={14} className="ml-2" />
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {ridesData.map((ride, idx) => (
          <div key={idx} className="bg-surface border border-border group overflow-hidden cursor-pointer">
            <div className="relative h-48 overflow-hidden">
              <img src={ride.img} alt={ride.title} className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" />
              <div className="absolute top-4 left-4 bg-background border border-primary p-2 text-center w-12">
                <div className="text-[10px] text-primary mb-1">{ride.month}</div>
                <div className="font-barlow text-xl font-bold">{ride.date}</div>
              </div>
            </div>
            <div className="p-6">
              <h4 className="font-bebas text-3xl mb-4 group-hover:text-primary transition-colors duration-300">{ride.title}</h4>
              <div className="space-y-2 text-xs text-gray-400 mb-6">
                <div className="flex items-center"><Clock size={14} className="mr-3 text-primary"/> {ride.time}</div>
                <div className="flex items-center"><MapPin size={14} className="mr-3 text-primary"/> {ride.loc}</div>
              </div>
              <button className="flex items-center text-xs font-semibold text-primary hover:text-white transition-colors duration-300">
                JOIN RIDE <ArrowRight size={14} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}