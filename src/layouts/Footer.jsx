import { Link } from 'react-router-dom';
import { ArrowRight, Loader2 } from 'lucide-react';
import { FaInstagram, FaYoutube, FaTiktok, FaStrava } from 'react-icons/fa';
import routes from '../routes';
import { useNewsletter } from '@/hooks/useNewsletter';

export default function Footer() {
  const { email, setEmail, status, handleSubscribe } = useNewsletter();

  return (
    <footer className="bg-[#050505] border-t border-white/10 pt-20 pb-10">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-1">
            <Link to="/" className="text-white font-bebas text-4xl tracking-widest flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-primary flex items-center justify-center transform -skew-x-12">
                <span className="text-black text-lg leading-none pt-1">N</span>
              </div>
              NOCTRA
            </Link>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              Urban cycling club dedicated to those who own the night. Ride safe, ride fast, ride together.
            </p>
            <div className="flex gap-4 text-gray-400">
              <a href="#" className="hover:text-primary transition-colors"><FaInstagram size={20} /></a>
              <a href="#" className="hover:text-primary transition-colors"><FaYoutube size={20} /></a>
              <a href="#" className="hover:text-primary transition-colors"><FaTiktok size={20} /></a>
              <a href="#" className="hover:text-primary transition-colors"><FaStrava size={20} /></a>
            </div>
          </div>

          <div>
            <h4 className="text-white text-xs font-bold tracking-widest uppercase mb-6">Navigation</h4>
            <div className="flex flex-col space-y-4">
              {routes.map((route) => (
                <Link key={route.name} to={route.path} className="text-gray-500 text-sm hover:text-primary transition-colors uppercase tracking-wide">
                  {route.name}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white text-xs font-bold tracking-widest uppercase mb-6">Support</h4>
            <div className="flex flex-col space-y-4">
              <Link to="/contact" className="text-gray-500 text-sm hover:text-primary transition-colors uppercase tracking-wide">FAQ</Link>
              <Link to="/contact" className="text-gray-500 text-sm hover:text-primary transition-colors uppercase tracking-wide">Shipping</Link>
              <Link to="/contact" className="text-gray-500 text-sm hover:text-primary transition-colors uppercase tracking-wide">Returns</Link>
              <Link to="/contact" className="text-gray-500 text-sm hover:text-primary transition-colors uppercase tracking-wide">Contact</Link>
            </div>
          </div>

          <div>
            <h4 className="text-white text-xs font-bold tracking-widest uppercase mb-6">Newsletter</h4>
            <p className="text-gray-500 text-sm mb-4">Subscribe for latest rides and exclusive gear drops.</p>
            
            <form onSubmit={handleSubscribe} className="flex relative">
              <input 
                type="email" 
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="EMAIL ADDRESS" 
                className="w-full bg-white/5 border border-white/10 px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors text-white uppercase" 
              />
              <button 
                type="submit" 
                disabled={status === 'loading'}
                className="absolute right-0 top-0 bottom-0 px-4 bg-primary text-black hover:bg-white transition-colors flex items-center justify-center disabled:opacity-80"
              >
                {status === 'loading' ? <Loader2 className="animate-spin" size={18} /> : <ArrowRight size={18} />}
              </button>
            </form>
            {status === 'success' && <p className="text-primary text-xs mt-2 font-bold tracking-widest">SUBSCRIBED!</p>}
            {status === 'error' && <p className="text-red-500 text-xs mt-2 font-bold tracking-widest">TRANSMISSION FAILED</p>}
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-xs font-bold tracking-widest uppercase">
            &copy; 2026 NOCTRA CYCLING CLUB. ALL RIGHTS RESERVED.
          </p>
          <div className="flex gap-6 text-gray-600 text-xs font-bold tracking-widest uppercase">
            <Link to="#" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link to="#" className="hover:text-primary transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}