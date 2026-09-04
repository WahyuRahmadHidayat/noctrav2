import { Link } from 'react-router-dom';
import { MapPin, ArrowRight } from 'lucide-react';
import ridesData from '@/data/ridesData';
import SectionLink from '@/components/SectionLink';

export default function UpcomingRides() {
  const displayData = ridesData.slice(0, 3);

  return (
    <section id="rides" className="py-12 md:py-24 container mx-auto px-4 md:px-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 border-t border-border pt-8 gap-5">
        <div>
          <h3 className="text-primary text-xs font-bold tracking-widest mb-2 uppercase">Upcoming Rides</h3>
          <h2 className="font-bebas text-5xl md:text-6xl text-white leading-none">OUR NEXT ADVENTURES</h2>
        </div>
        <SectionLink to="/rides">VIEW ALL RIDES</SectionLink>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {displayData.map((item) => (
          <Link 
            key={item.id} 
            to={`/rides/${item.id}`} 
            className="bg-surface border border-border group flex flex-col h-full hover:border-primary/50 transition-colors cursor-pointer"
          >
            <div className="aspect-4/3 relative overflow-hidden bg-background">
              <img 
                src={item.img} 
                alt={item.title} 
                className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" 
              />
              <div className="absolute top-4 left-4 bg-background border border-primary p-2 text-center w-14">
                <div className="font-barlow text-xl font-bold leading-none mb-1">{item.date}</div>
                <div className="text-[10px] text-primary">{item.month}</div>
              </div>
            </div>
            
            <div className="p-6 flex flex-col grow justify-between bg-background">
              <div>
                <div className="flex items-center text-xs text-primary mb-3"><MapPin size={12} className="mr-1"/> {item.loc}</div>
                <h4 className="font-bebas text-2xl mb-3 group-hover:text-primary transition-colors leading-tight">{item.title}</h4>
                <p className="text-xs text-gray-400 mb-1">{item.time}</p>
                <p className="text-xs text-gray-400 mb-6">{item.distance || '42 KM'}</p>
                <span className="inline-flex items-center bg-primary text-black px-4 py-2 text-xs font-bold tracking-widest group-hover:bg-white transition-colors">
                  JOIN RIDE <ArrowRight size={14} className="ml-2" />
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}