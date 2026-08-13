import { ArrowUpRight } from 'lucide-react';
import { FaInstagram, FaYoutube, FaDiscord, FaStrava } from 'react-icons/fa';
import routes from 'routes';

export default function Footer() {
  return (
    <footer id="contact" className="mt-20">
      <div className="bg-surface border-y border-border/50 py-16">
        <div className="container mx-auto px-8 flex flex-col md:flex-row justify-between items-center">
          <div>
            <h2 className="font-bebas text-6xl text-primary mb-2">RIDE WITH US</h2>
            <p className="text-sm text-gray-400">Be part of a community that lives for the night.<br/><span className="text-white font-semibold">Together, we go further.</span></p>
          </div>
          <button className="mt-6 md:mt-0 flex items-center space-x-2 bg-primary text-black px-8 py-4 font-semibold hover:bg-white transition-colors duration-300">
            <span>JOIN NOCTRA</span>
            <ArrowUpRight size={20} />
          </button>
        </div>
      </div>

      <div className="container mx-auto px-8 py-16 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div>
          <h1 className="font-bebas text-3xl tracking-wider text-primary leading-none mb-4">NOCTRA</h1>
          <p className="text-xs text-gray-500 mb-6">We ride. We connect.<br/>We inspire. We are NOCTRA.</p>
          <p className="text-[10px] text-gray-600">© 2026 NOCTRA. All rights reserved.</p>
        </div>
        
        <div className="flex flex-col space-y-3 text-sm text-gray-400">
          <h5 className="text-white font-semibold tracking-widest text-xs mb-2">NAVIGATION</h5>
          {routes.map((route) => (
            <a 
              key={route.name} 
              href={route.path} 
              className="hover:text-primary transition-colors duration-300"
            >
              {route.name}
            </a>
          ))}
        </div>

        <div className="flex flex-col space-y-3 text-sm text-gray-400">
          <h5 className="text-white font-semibold tracking-widest text-xs mb-2">COMMUNITY</h5>
          <a href="#" className="hover:text-primary transition-colors duration-300">Strava Club</a>
          <a href="#" className="hover:text-primary transition-colors duration-300">Discord</a>
          <a href="#" className="hover:text-primary transition-colors duration-300">Instagram</a>
          <a href="#" className="hover:text-primary transition-colors duration-300">YouTube</a>
        </div>

        <div>
          <h5 className="text-white font-semibold tracking-widest text-xs mb-4">STAY IN THE LOOP</h5>
          <div className="flex">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="bg-background border border-border px-4 py-2 w-full text-sm focus:outline-none focus:border-primary transition-colors duration-300"
            />
            <button className="bg-primary text-black px-4 hover:bg-white transition-colors duration-300">
              <ArrowUpRight size={20} />
            </button>
          </div>
          <div className="flex space-x-6 mt-8">
            <FaInstagram size={18} className="text-gray-500 hover:text-primary cursor-pointer transition-colors duration-300" />
            <FaYoutube size={18} className="text-gray-500 hover:text-primary cursor-pointer transition-colors duration-300" />
            <FaStrava size={18} className="text-gray-500 hover:text-primary cursor-pointer transition-colors duration-300" />
            <FaDiscord size={18} className="text-gray-500 hover:text-primary cursor-pointer transition-colors duration-300" />
          </div>
        </div>
      </div>
    </footer>
  );
}