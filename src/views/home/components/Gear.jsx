import { Link } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';
import gearData from '@/data/gearData';
import SectionLink from '@/components/SectionLink';

export default function Gear() {
  const displayData = gearData.slice(0, 4);

  return (
    <section id="shop" className="py-12 md:py-24 container mx-auto px-4 md:px-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 border-t border-border pt-8 gap-5">
        <div>
          <h3 className="text-primary text-xs font-bold tracking-widest mb-2 uppercase">Noctra Gear</h3>
          <h2 className="font-bebas text-5xl md:text-6xl text-white leading-none">RIDE. REP. REPEAT.</h2>
        </div>
        <SectionLink to="/shop">SHOP ALL</SectionLink>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {displayData.map((item) => (
          <Link 
            key={item.id} 
            to={`/shop/${item.id}`} 
            className="bg-surface border border-border group flex flex-col h-full hover:border-primary/50 transition-colors cursor-pointer"
          >
            <div className="aspect-square relative overflow-hidden bg-background">
              <img 
                src={item.img} 
                alt={item.name} 
                className="w-full h-full object-contain p-8 mix-blend-lighten group-hover:scale-105 transition-all duration-500" 
              />
            </div>
            
            <div className="p-6 flex flex-col grow justify-between bg-background">
              <div>
                <h4 className="text-sm font-semibold tracking-wide mb-2 group-hover:text-primary transition-colors">{item.name}</h4>
                <p className="text-xs text-gray-400 mb-4">{item.price}</p>
                <span className="inline-flex items-center text-primary text-xs font-bold tracking-widest group-hover:text-white transition-colors">
                  SHOP NOW <ShoppingCart size={14} className="ml-2" />
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}