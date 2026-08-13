import { ArrowRight, ShoppingCart } from 'lucide-react';
import gearData from 'views/home/variables/gearData';

export default function Gear() {
  return (
    <section id="shop" className="py-12 md:py-16 container mx-auto px-4 md:px-8">
      <div className="flex justify-between items-center mb-10 border-t border-border pt-8">
        <h3 className="text-xl font-bold tracking-widest uppercase">Noctra Gear</h3>
        <a href="#" className="flex items-center text-xs tracking-widest text-primary hover:text-white transition-colors duration-300">
          SHOP ALL <ArrowRight size={14} className="ml-2" />
        </a>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {gearData.map((item, idx) => (
          <div key={idx} className="bg-surface border border-border p-4 group cursor-pointer hover:border-primary/50 transition-colors duration-300">
            <div className="aspect-square bg-background mb-4 overflow-hidden relative flex items-center justify-center">
              <img src={item.img} alt={item.name} className="object-contain h-4/5 opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500 mix-blend-lighten" />
            </div>
            <div className="flex justify-between items-end">
              <div>
                <h4 className="text-sm font-semibold tracking-wide mb-1 group-hover:text-primary transition-colors duration-300">{item.name}</h4>
                <p className="text-xs text-gray-400">{item.price}</p>
              </div>
              <button className="bg-primary text-black p-2 hover:bg-white transition-colors duration-300">
                <ShoppingCart size={18} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}