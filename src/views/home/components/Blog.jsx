import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import blogData from 'views/home/data/blogData';
import SectionLink from '@/components/SectionLink';

export default function Blog() {
  const displayData = blogData.slice(0, 3);

  return (
    <section id="blog" className="py-12 md:py-24 container mx-auto px-4 md:px-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 border-t border-border pt-8 gap-5">
        <div>
          <h3 className="text-primary text-xs font-bold tracking-widest mb-2 uppercase">Blog & Stories</h3>
          <h2 className="font-bebas text-5xl md:text-6xl text-white leading-none">STORIES FROM THE ROAD</h2>
        </div>
        <SectionLink to="/blog">VIEW ALL POSTS</SectionLink>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {displayData.map((item) => (
          <Link 
            key={item.id} 
            to={`/blog/${item.id}`} 
            className="bg-surface border border-border group flex flex-col h-full hover:border-primary/50 transition-colors cursor-pointer"
          >
            <div className="aspect-video relative overflow-hidden bg-background">
              <img 
                src={item.img} 
                alt={item.title} 
                className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" 
              />
              <div className="absolute top-4 left-4 bg-primary text-black px-3 py-1 text-[10px] font-bold tracking-widest">
                {item.category || 'STORY'}
              </div>
            </div>
            
            <div className="p-6 flex flex-col grow justify-between bg-background">
              <div>
                <p className="text-xs text-gray-400 mb-2">{item.date}</p>
                <h4 className="text-lg font-bold mb-4 group-hover:text-primary transition-colors">{item.title}</h4>
                <span className="inline-flex items-center text-primary text-xs font-bold tracking-widest group-hover:text-white transition-colors">
                  READ MORE <ArrowRight size={14} className="ml-2" />
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}