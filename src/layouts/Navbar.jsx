import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ArrowUpRight, Menu, X, User, ShoppingCart, LogOut, LogIn } from 'lucide-react';
import routes from '../routes';
import { handleNavClick } from '../utils/navigation';
import { useCart } from '@/hooks/useCart';
import { useAuth } from '@/hooks/useAuth';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname, hash } = useLocation();
  const navigate = useNavigate();
  
  const { cartItems } = useCart();
  const { currentUser, signOut } = useAuth();
  
  const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const onNavClick = (e, path) => handleNavClick(e, path, pathname, navigate, setIsMenuOpen);

  const isActive = (path) => {
    if (path === '/#home') return pathname === '/' && (!hash || hash === '#home');
    if (path.startsWith('/#')) return pathname === '/' && hash === path.substring(1);
    return pathname === path;
  };

  const handleSignOut = async () => {
    await signOut();
    setIsMenuOpen(false);
    navigate('/');
  };

  return (
    <nav className={`fixed w-full z-50 top-0 px-8 flex justify-between items-center transition-all duration-300 ${scrolled ? 'bg-background/95 backdrop-blur-md border-b border-border/50 py-4' : 'bg-background/80 backdrop-blur-md border-b border-border/50 py-6'}`}>
      <a href="/#home" onClick={(e) => onNavClick(e, '/#home')} aria-label="Go to Noctra Home" className="flex flex-col z-50 relative group cursor-pointer outline-none focus:text-primary">
        <h1 className="font-bebas text-3xl tracking-wider text-primary leading-none group-hover:text-white transition-colors">NOCTRA</h1>
        <span className="text-[10px] tracking-[0.2em] text-gray-400 group-hover:text-primary transition-colors">URBAN CYCLING CLUB</span>
      </a>

      <div className="hidden lg:flex space-x-8 text-sm font-medium tracking-wide">
        {routes.map((route) => (
          <a
            key={route.name}
            href={route.path}
            onClick={(e) => onNavClick(e, route.path)}
            className={`transition-colors duration-300 cursor-pointer outline-none focus:text-primary ${isActive(route.path) ? 'text-primary' : 'text-white hover:text-primary'}`}
          >
            {route.name}
          </a>
        ))}
      </div>

      <div className="flex items-center space-x-6 z-50 relative">
        <Link to="/action/join" className="hidden md:flex items-center space-x-2 bg-primary text-black px-6 py-2.5 font-semibold text-sm hover:bg-white transition-colors duration-300 uppercase tracking-widest outline-none focus:bg-white">
          <span>JOIN THE RIDE</span>
          <ArrowUpRight size={18} aria-hidden="true" />
        </Link>

        <div className="relative">
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
            aria-label={isMenuOpen ? "Close main menu" : "Open main menu"}
            aria-expanded={isMenuOpen}
            className="text-white hover:text-primary transition-colors duration-300 outline-none focus:text-primary cursor-pointer"
          >
            {isMenuOpen ? <X size={28} aria-hidden="true" /> : <Menu size={28} aria-hidden="true" />}
          </button>

          <div className={`absolute top-full right-0 mt-6 w-64 bg-surface border border-border shadow-[0_0_30px_rgba(0,0,0,0.5)] transition-all duration-300 origin-top-right ${isMenuOpen ? 'scale-100 opacity-100 visible' : 'scale-95 opacity-0 invisible'}`}>
            <div className="p-5 border-b border-border/50 bg-background/50">
              <div className="flex items-center space-x-3 mb-1">
                <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-black">
                  <User size={16} aria-hidden="true" />
                </div>
                <div className="overflow-hidden">
                  {currentUser ? (
                    <>
                      <p className="font-bold text-sm text-white truncate" title={currentUser.email}>{currentUser.email.split('@')[0]}</p>
                      <p className="text-[10px] text-primary tracking-widest uppercase">MEMBER</p>
                    </>
                  ) : (
                    <>
                      <p className="font-bold text-sm text-white">Guest Rider</p>
                      <p className="text-[10px] text-primary tracking-widest uppercase">JOIN COMMUNITY</p>
                    </>
                  )}
                </div>
              </div>
            </div>

            <div className="p-2 border-b border-border/50 lg:hidden">
              {routes.map((route) => (
                <a
                  key={route.name}
                  href={route.path}
                  onClick={(e) => onNavClick(e, route.path)}
                  className={`block px-4 py-3 text-xs tracking-widest transition-colors duration-300 uppercase cursor-pointer outline-none focus:text-primary ${isActive(route.path) ? 'text-primary bg-background' : 'text-gray-400 hover:text-white hover:bg-background/50'}`}
                >
                  {route.name}
                </a>
              ))}
            </div>

            <div className="p-2">
              {!currentUser && (
                <Link to="/login" onClick={() => setIsMenuOpen(false)} className="w-full flex items-center px-4 py-3 text-sm text-gray-300 hover:text-primary hover:bg-background transition-colors duration-300 outline-none focus:text-primary cursor-pointer">
                  <LogIn size={16} className="mr-3" aria-hidden="true" /> Login / Register
                </Link>
              )}
              
              <Link to="/cart" onClick={() => setIsMenuOpen(false)} className="w-full flex items-center justify-between px-4 py-3 text-sm text-gray-300 hover:text-primary hover:bg-background transition-colors duration-300 outline-none focus:text-primary cursor-pointer">
                <div className="flex items-center"><ShoppingCart size={16} className="mr-3" aria-hidden="true" /> Cart</div>
                {totalQuantity > 0 && (
                  <span className="bg-primary text-black text-[10px] font-bold px-2 py-0.5 rounded-full">{totalQuantity}</span>
                )}
              </Link>
            </div>

            {currentUser && (
              <div className="p-2 border-t border-border/50">
                <Link to="/account" onClick={() => setIsMenuOpen(false)} className="w-full flex items-center px-4 py-3 text-sm text-gray-300 hover:text-primary hover:bg-background transition-colors duration-300 outline-none focus:text-primary cursor-pointer">
                  <User size={16} className="mr-3" aria-hidden="true" /> My Account
                </Link>
                <button onClick={handleSignOut} className="w-full flex items-center px-4 py-3 text-sm text-red-400 hover:text-red-300 hover:bg-background transition-colors duration-300 outline-none focus:text-red-400 cursor-pointer">
                  <LogOut size={16} className="mr-3" aria-hidden="true" /> Sign Out
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}