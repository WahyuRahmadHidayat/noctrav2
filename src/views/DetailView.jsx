import { useParams, useLocation, Link } from 'react-router-dom';
import { ArrowLeft, MapPin, Clock, ShoppingCart, Tag, Calendar } from 'lucide-react';
import ridesData from 'views/home/variables/ridesData';
import gearData from 'views/home/variables/gearData';
import blogData from 'views/home/variables/blogData';
import SEO from '@/components/SEO'; 

export default function DetailView() {
  const { id } = useParams();
  const { pathname } = useLocation();

  let item = null;
  let type = '';
  let backPath = '/';

  if (pathname.includes('/rides')) {
    item = ridesData.find((r) => r.id === id);
    type = 'ride';
    backPath = '/#rides';
  } else if (pathname.includes('/shop')) {
    item = gearData.find((g) => g.id === id);
    type = 'gear';
    backPath = '/#shop';
  } else if (pathname.includes('/blog')) {
    item = blogData.find((b) => b.id === id);
    type = 'blog';
    backPath = '/#blog';
  }

  if (!item) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-background text-white">
        <SEO title="404 - Not Found" description="The requested page could not be found." />
        
        <h1 className="font-bebas text-8xl text-primary mb-4">404</h1>
        <p className="text-xl text-gray-400 mb-8">PAGE NOT FOUND</p>
        <Link to="/" className="bg-primary text-black px-8 py-3 font-semibold hover:bg-white transition-colors">
          RETURN HOME
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-white pt-28 pb-20 px-4 md:px-8">
      <SEO 
        title={item.title || item.name || 'Detail'} 
        description={`View details for ${item.title || item.name}`} 
      />

      <div className="container mx-auto max-w-5xl">
        <Link to={backPath} className="inline-flex items-center text-xs tracking-widest text-primary mb-8 hover:text-white transition-colors">
          <ArrowLeft size={16} className="mr-2" /> BACK
        </Link>

        <div className="bg-surface border border-border overflow-hidden">
          <div className="h-64 md:h-96 relative overflow-hidden bg-background flex items-center justify-center">
            <img 
              src={item.img} 
              alt={item.title || item.name} 
              className={`w-full h-full ${type === 'gear' ? 'object-contain p-8 mix-blend-lighten' : 'object-cover'}`}
            />
            
            {type === 'ride' && (
              <div className="absolute top-6 left-6 bg-background border border-primary p-3 text-center w-16">
                <div className="text-xs text-primary mb-1">{item.month}</div>
                <div className="font-barlow text-2xl font-bold">{item.date}</div>
              </div>
            )}
            
            {type === 'blog' && (
              <div className="absolute top-6 left-6 bg-primary text-black px-4 py-2 text-xs font-bold tracking-widest">
                {item.category}
              </div>
            )}
          </div>

          <div className="p-8 md:p-12">
            {type === 'blog' && (
              <div className="flex items-center text-sm text-primary font-barlow tracking-widest mb-4">
                <Calendar size={16} className="mr-2" /> {item.date}
              </div>
            )}
            
            <h1 className="font-bebas text-5xl md:text-7xl mb-6 text-white leading-none">
              {item.title || item.name}
            </h1>

            {type === 'ride' && (
              <div className="flex flex-col sm:flex-row sm:space-x-8 space-y-4 sm:space-y-0 text-gray-400 mb-8 border-y border-border py-6">
                <div className="flex items-center"><Clock size={20} className="mr-3 text-primary"/> {item.time}</div>
                <div className="flex items-center"><MapPin size={20} className="mr-3 text-primary"/> {item.loc}</div>
              </div>
            )}

            {type === 'gear' && (
              <div className="flex items-center space-x-4 mb-8 border-y border-border py-6">
                <Tag size={24} className="text-primary" />
                <span className="font-barlow text-3xl font-bold text-white">{item.price}</span>
              </div>
            )}

            <div className="prose prose-invert max-w-none mb-10 text-gray-400 leading-relaxed">
              {item.content && Array.isArray(item.content) && item.content.length > 0 ? (
                item.content.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))
              ) : (
                <>
                  <p>The night offers a different perspective. Stripped of the daytime chaos, the streets become our playground. We ride not just for the speed, but for the clarity that only the dark can bring. Every rotation of the pedal is a step closer to understanding our limits and breaking past them.</p>
                  <p>Join us as we explore the urban landscape under a new light. This isn't just about reaching a destination; it's about the shared experience of the journey. Prepare your gear, focus your mind, and let the city's rhythm guide your pace.</p>
                </>
              )}
            </div>

            {type === 'ride' && (
              <Link 
                to="/action/register" 
                state={{ id: item.id, title: item.title || item.name, price: item.price }}
                className="inline-block bg-primary text-black px-10 py-4 font-semibold hover:bg-white transition-colors duration-300 tracking-widest"
              >
                REGISTER FOR THIS RIDE
              </Link>
            )}
            
            {type === 'gear' && (
              <Link 
                to="/action/cart" 
                state={{ id: item.id, title: item.title || item.name, price: item.price }}
                className="inline-flex items-center bg-primary text-black px-10 py-4 font-semibold hover:bg-white transition-colors duration-300 tracking-widest"
              >
                <ShoppingCart size={20} className="mr-3" /> ADD TO CART
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}