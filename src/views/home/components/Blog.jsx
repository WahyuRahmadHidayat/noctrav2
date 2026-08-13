import { ArrowRight } from 'lucide-react';
import blogData from 'views/home/variables/blogData';

export default function Blog() {
  return (
    <section id="blog" className="py-12 md:py-16 container mx-auto px-4 md:px-8">
      <div className="flex justify-between items-center mb-10 border-t border-border pt-8">
        <h3 className="text-xl font-bold tracking-widest uppercase">Latest Notes</h3>
        <a href="#" className="flex items-center text-xs tracking-widest text-primary hover:text-white transition-colors duration-300">
          VIEW ALL POSTS <ArrowRight size={14} className="ml-2" />
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {blogData.map((post, idx) => (
          <div key={idx} className="bg-surface border border-border group cursor-pointer overflow-hidden flex flex-col">
            <div className="relative h-56 overflow-hidden">
              <img 
                src={post.img} 
                alt={post.title} 
                className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" 
              />
              <div className="absolute top-4 left-4 bg-primary text-black px-3 py-1 text-[10px] font-bold tracking-widest">
                {post.category}
              </div>
            </div>
            <div className="p-6 flex flex-col grow">
              <div className="text-xs text-primary font-barlow tracking-widest mb-3">{post.date}</div>
              <h4 className="font-bebas text-2xl mb-4 group-hover:text-primary transition-colors duration-300 leading-tight">
                {post.title}
              </h4>
              <div className="mt-auto pt-4 border-t border-border/50">
                <button className="flex items-center text-xs font-semibold text-gray-400 group-hover:text-white transition-colors duration-300">
                  READ MORE <ArrowRight size={14} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}