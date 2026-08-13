import { useState } from 'react';
import { ArrowUpRight, Menu, X, User, ShoppingCart, LogOut } from 'lucide-react';
import routes from 'routes'; 

export default function Navbar() {
  const [activeMenu, setActiveMenu] = useState('HOME');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 top-0 py-6 px-8 flex justify-between items-center bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="flex flex-col z-50 relative">
        <h1 className="font-bebas text-3xl tracking-wider text-primary leading-none">NOCTRA</h1>
        <span className="text-[10px] tracking-[0.2em] text-gray-400">URBAN CYCLING CLUB</span>
      </div>
      
      <div className="hidden lg:flex space-x-8 text-sm font-medium tracking-wide">
        {routes.map((route) => (
          <a
            key={route.name}
            href={route.path}
            onClick={() => setActiveMenu(route.name)}
            className={`transition-colors duration-300 ${
              activeMenu === route.name ? 'text-primary' : 'text-white hover:text-primary'
            }`}
          >
            {route.name}
          </a>
        ))}
      </div>

      <div className="flex items-center space-x-6 z-50 relative">
        <button className="hidden md:flex items-center space-x-2 bg-primary text-black px-6 py-2.5 font-semibold text-sm hover:bg-white transition-colors duration-300">
          <span>JOIN THE RIDE</span>
          <ArrowUpRight size={18} />
        </button>
        
        <div className="relative">
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white hover:text-primary transition-colors duration-300"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

          <div 
            className={`absolute top-full right-0 mt-6 w-64 bg-surface border border-border shadow-2xl transition-all duration-300 origin-top-right ${
              isMenuOpen ? 'scale-100 opacity-100 visible' : 'scale-95 opacity-0 invisible'
            }`}
          >
            <div className="p-5 border-b border-border/50 bg-background/50">
              <div className="flex items-center space-x-3 mb-1">
                <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-black">
                  <User size={16} />
                </div>
                <div>
                  <p className="font-bold text-sm text-white">Guest Rider</p>
                  <p className="text-[10px] text-primary tracking-widest">JOIN COMMUNITY</p>
                </div>
              </div>
            </div>

            <div className="p-2 border-b border-border/50 lg:hidden">
              {routes.map((route) => (
                <a
                  key={route.name}
                  href={route.path}
                  onClick={() => {
                    setActiveMenu(route.name);
                    setIsMenuOpen(false);
                  }}
                  className={`block px-4 py-3 text-xs tracking-widest transition-colors duration-300 ${
                    activeMenu === route.name ? 'text-primary bg-background' : 'text-gray-400 hover:text-white hover:bg-background/50'
                  }`}
                >
                  {route.name}
                </a>
              ))}
            </div>

            <div className="p-2">
              <button className="w-full flex items-center px-4 py-3 text-sm text-gray-300 hover:text-primary hover:bg-background transition-colors duration-300">
                <User size={16} className="mr-3" /> My Account
              </button>
              <button className="w-full flex items-center justify-between px-4 py-3 text-sm text-gray-300 hover:text-primary hover:bg-background transition-colors duration-300">
                <div className="flex items-center">
                  <ShoppingCart size={16} className="mr-3" /> Cart
                </div>
                <span className="bg-primary text-black text-[10px] font-bold px-2 py-0.5 rounded-full">2</span>
              </button>
            </div>

            <div className="p-2 border-t border-border/50">
              <button className="w-full flex items-center px-4 py-3 text-sm text-red-400 hover:text-red-300 hover:bg-background transition-colors duration-300">
                <LogOut size={16} className="mr-3" /> Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}