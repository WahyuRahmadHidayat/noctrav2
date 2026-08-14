import { ArrowUpRight, Play, Crosshair } from 'lucide-react';
import { FaInstagram, FaYoutube, FaStrava } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-28 md:pt-20">
      <div 
        className="absolute inset-0 bg-cover bg-center z-0 opacity-40"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1558981359-219d6364c9c8?q=80&w=2000&auto=format&fit=crop')" }}
      />
      <div className="absolute inset-0 bg-linear-to-r from-background via-background/80 to-transparent z-10" />

      <div className="container mx-auto px-4 md:px-8 relative z-20 w-full flex justify-between">
        <div className="max-w-3xl">
          <div className="flex items-center space-x-3 text-xs md:text-sm tracking-widest text-gray-300 mb-6">
            <Crosshair size={16} className="text-primary shrink-0" />
            <p>WE DON'T RIDE TO ESCAPE LIFE<br/>WE RIDE TO LIVE IT</p>
          </div>
          
          <h1 className="font-bebas text-6xl sm:text-8xl md:text-[120px] leading-[0.85] tracking-wide mb-6">
            <span className="text-white block">RIDE AFTER</span>
            <span className="text-primary block">DARK.</span>
          </h1>
          
          <p className="text-lg md:text-2xl font-inter font-light tracking-widest mb-10">OWN THE NIGHT.</p>
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8">
            <Link 
              to="/action/join" 
              className="w-full sm:w-auto flex items-center justify-center bg-primary text-black px-8 py-4 text-sm font-bold tracking-widest hover:bg-white transition-colors duration-300 uppercase"
            >
              JOIN THE RIDE <ArrowUpRight size={18} className="ml-3" />
            </Link>
            
            <button className="w-full sm:w-auto flex items-center justify-center text-white hover:text-primary transition-colors duration-300 group uppercase">
              <span className="text-sm font-bold tracking-widest mr-4">WATCH VIDEO</span>
              <div className="flex items-center justify-center w-12 h-12 rounded-full border border-white group-hover:border-primary transition-colors duration-300">
                <Play size={16} className="fill-current ml-1" />
              </div>
            </button>
          </div>
        </div>

        <div className="hidden lg:flex flex-col items-center justify-center space-y-8 pr-4">
          <a href="#" className="text-gray-400 hover:text-primary transition-colors duration-300"><FaInstagram size={20} /></a>
          <a href="#" className="text-gray-400 hover:text-primary transition-colors duration-300"><FaYoutube size={20} /></a>
          <a href="#" className="text-gray-400 hover:text-primary transition-colors duration-300"><FaStrava size={20} /></a>
        </div>
      </div>
    </section>
  );
}