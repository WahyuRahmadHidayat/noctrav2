import { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { MapPin, ArrowRight, ShoppingCart } from 'lucide-react';
import ridesData from 'views/home/variables/ridesData';
import gearData from 'views/home/variables/gearData';
import blogData from 'views/home/variables/blogData';

export default function ListView() {
  const { pathname } = useLocation();
  const [activeTab, setActiveTab] = useState('ALL');
  
  let rawData = [];
  let config = { title: '', desc: '', type: '', tabs: [] };

  if (pathname.includes('/rides')) {
    rawData = ridesData;
    config = { title: 'OUR RIDES', desc: 'Explore our upcoming rides and be part of the adventure.', type: 'ride', tabs: ['ALL RIDES', 'JAKARTA', 'BANDUNG', 'YOGYAKARTA', 'SURABAYA'] };
  } else if (pathname.includes('/shop')) {
    rawData = gearData;
    config = { title: 'NOCTRA GEAR', desc: 'Premium gear for night riders.', type: 'gear', tabs: ['ALL', 'APPAREL', 'ACCESSORIES', 'EQUIPMENT'] };
  } else if (pathname.includes('/blog')) {
    rawData = blogData;
    config = { title: 'BLOG & STORIES', desc: 'Stories from the road, the people, and the night.', type: 'blog', tabs: [] };
  }

  return (
    <div className="min-h-screen bg-background text-white pt-32 pb-20 px-4 md:px-8">
      <div className="container mx-auto max-w-6xl">
        
        <div className="text-center mb-12">
          <h1 className="font-bebas text-5xl md:text-7xl mb-4 tracking-wider">{config.title}</h1>
          <p className="text-gray-400 text-sm md:text-base">{config.desc}</p>
        </div>

        {config.tabs.length > 0 && (
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            {config.tabs.map(tab => (
              <button 
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`text-xs font-bold tracking-widest uppercase transition-colors ${activeTab === tab || (activeTab === 'ALL' && tab === 'ALL RIDES') ? 'text-primary' : 'text-gray-500 hover:text-white'}`}
              >
                {tab}
              </button>
            ))}
          </div>
        )}
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {rawData.map((item) => (
            <Link 
              key={item.id} 
              to={`/${config.type === 'ride' ? 'rides' : config.type === 'gear' ? 'shop' : 'blog'}/${item.id}`} 
              className="bg-surface border border-border group flex flex-col h-full hover:border-primary/50 transition-colors"
            >
              <div className="aspect-4/5 relative overflow-hidden bg-background">
                <img 
                  src={item.img} 
                  alt={item.title || item.name} 
                  className={`w-full h-full ${config.type === 'gear' ? 'object-contain p-8 mix-blend-lighten' : 'object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500'}`} 
                />
                {config.type === 'ride' && (
                  <div className="absolute top-4 left-4 bg-background border border-primary p-2 text-center w-14">
                    <div className="font-barlow text-xl font-bold leading-none mb-1">{item.date}</div>
                    <div className="text-[10px] text-primary">{item.month}</div>
                  </div>
                )}
                {config.type === 'blog' && (
                  <div className="absolute top-4 left-4 bg-primary text-black px-3 py-1 text-[10px] font-bold tracking-widest">
                    {item.category || 'STORY'}
                  </div>
                )}
              </div>
              
              <div className="p-6 flex flex-col grow justify-between bg-background">
                {config.type === 'ride' && (
                  <div>
                    <div className="flex items-center text-xs text-primary mb-3"><MapPin size={12} className="mr-1"/> {item.loc}</div>
                    <h4 className="font-bebas text-2xl mb-3 group-hover:text-primary transition-colors leading-tight">{item.title}</h4>
                    <p className="text-xs text-gray-400 mb-1">{item.time}</p>
                    <p className="text-xs text-gray-400 mb-6">{item.distance || '42 KM'}</p>
                    <span className="inline-flex items-center bg-primary text-black px-4 py-2 text-xs font-bold tracking-widest hover:bg-white transition-colors">
                      JOIN RIDE <ArrowRight size={14} className="ml-2" />
                    </span>
                  </div>
                )}

                {config.type === 'gear' && (
                  <div>
                    <h4 className="text-sm font-semibold tracking-wide mb-2 group-hover:text-primary transition-colors">{item.name}</h4>
                    <p className="text-xs text-gray-400 mb-4">{item.price}</p>
                    <span className="inline-flex items-center text-primary text-xs font-bold tracking-widest hover:text-white transition-colors">
                      SHOP NOW <ShoppingCart size={14} className="ml-2" />
                    </span>
                  </div>
                )}

                {config.type === 'blog' && (
                  <div>
                    <p className="text-xs text-gray-400 mb-2">{item.date}</p>
                    <h4 className="text-lg font-bold mb-4 group-hover:text-primary transition-colors">{item.title}</h4>
                    <span className="inline-flex items-center text-primary text-xs font-bold tracking-widest hover:text-white transition-colors">
                      READ MORE <ArrowRight size={14} className="ml-2" />
                    </span>
                  </div>
                )}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}