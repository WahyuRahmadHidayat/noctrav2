import { useLocation, Link } from 'react-router-dom';
import { ArrowRight, MapPin, ShoppingBag, BookOpen } from 'lucide-react';
import ridesData from 'views/home/variables/ridesData';
import gearData from 'views/home/variables/gearData';
import blogData from 'views/home/variables/blogData';

export default function ListView() {
  const { pathname } = useLocation();

  let data = [];
  let title = '';
  let type = '';

  if (pathname.includes('/rides')) {
    data = ridesData;
    title = 'ALL RIDES';
    type = 'rides';
  } else if (pathname.includes('/shop')) {
    data = gearData;
    title = 'GEAR SHOP';
    type = 'shop';
  } else if (pathname.includes('/blog')) {
    data = blogData;
    title = 'TRANSMISSIONS';
    type = 'blog';
  }

  return (
    <div className="min-h-screen bg-background text-white pt-32 pb-20 px-4 md:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-12 border-b border-border pb-6">
          <h3 className="text-primary text-xs font-bold tracking-widest mb-2 uppercase">EXPLORE</h3>
          <h1 className="font-bebas text-6xl md:text-8xl text-white leading-none">{title}</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {data.map((item) => (
            <Link
              key={item.id}
              to={`/${type}/${item.id}`}
              className="bg-surface border border-border group flex flex-col h-full hover:border-primary/50 transition-colors cursor-pointer"
            >
              <div className="aspect-4/3 relative overflow-hidden bg-background">
                <img
                  src={item.img}
                  alt={item.title || item.name}
                  className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                />
                {type === 'rides' && (
                  <div className="absolute top-4 left-4 bg-background border border-primary p-2 text-center w-14">
                    <div className="font-barlow text-xl font-bold leading-none mb-1 text-white">{item.date}</div>
                    <div className="text-[10px] text-primary">{item.month}</div>
                  </div>
                )}
                {type !== 'rides' && (
                  <div className="absolute top-4 left-4 bg-primary text-black px-3 py-1 text-[10px] font-bold tracking-widest uppercase">
                    {item.category}
                  </div>
                )}
              </div>

              <div className="p-6 flex flex-col grow justify-between bg-background">
                <div>
                  {type === 'rides' && <div className="flex items-center text-xs text-primary mb-3"><MapPin size={12} className="mr-1"/> {item.loc}</div>}
                  {type === 'blog' && <div className="flex items-center text-xs text-primary mb-3"><BookOpen size={12} className="mr-1"/> {item.date}</div>}

                  <h4 className="font-bebas text-2xl mb-3 text-white group-hover:text-primary transition-colors leading-tight">
                    {item.title || item.name}
                  </h4>

                  {type === 'rides' && (
                    <>
                      <p className="text-xs text-gray-400 mb-1">{item.time}</p>
                      <p className="text-xs text-gray-400 mb-6">{item.distance || '42 KM'}</p>
                    </>
                  )}
                  {type === 'shop' && (
                    <p className="text-xl font-barlow text-primary mb-6">{item.price}</p>
                  )}
                </div>

                <span className="inline-flex items-center bg-primary text-black px-4 py-2 text-xs font-bold tracking-widest group-hover:bg-white transition-colors w-fit">
                  {type === 'rides' ? 'JOIN RIDE' : type === 'shop' ? 'BUY NOW' : 'READ MORE'}
                  {type === 'shop' ? <ShoppingBag size={14} className="ml-2" /> : <ArrowRight size={14} className="ml-2" />}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}