import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function SectionLink({ to, children }) {
  return (
    <Link 
      to={to} 
      className="group inline-flex items-center text-xs tracking-widest font-bold text-white border border-white/20 rounded-full px-6 py-3 hover:border-primary hover:text-primary transition-all duration-300 uppercase"
    >
      {children}
      <ArrowRight size={14} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
    </Link>
  );
}