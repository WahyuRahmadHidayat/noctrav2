import heroBg from '@/assets/images/hero/hero.avif';
import { ArrowUpRight } from 'lucide-react';
import { FaInstagram, FaTiktok, FaStrava } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { socialLinks } from '@/config/socialLinks';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-28 md:pt-20">
      <div 
        className="absolute inset-0 bg-cover bg-center z-0 opacity-40"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-linear-to-r from-background via-background/80 to-transparent z-10" />

      <div className="container mx-auto px-4 md:px-8 relative z-20 w-full flex justify-between">
        <div className="max-w-3xl">
          
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
          </div>
        </div>

        <div className="hidden lg:flex flex-col items-center justify-center space-y-8 pr-4">
          <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" aria-label="Visit our Instagram" className="text-gray-400 hover:text-primary transition-colors duration-300"><FaInstagram size={20} /></a>
          <a href={socialLinks.tiktok} target="_blank" rel="noopener noreferrer" aria-label="Visit our Tiktok" className="text-gray-400 hover:text-primary transition-colors duration-300"><FaTiktok size={20}  /></a>
          <a href={socialLinks.strava} target="_blank" rel="noopener noreferrer" aria-label="Visit our Strava" className="text-gray-400 hover:text-primary transition-colors duration-300"><FaStrava size={20} /></a>
        </div>
      </div>
    </section>
  );
}