import { ShoppingCart } from 'lucide-react';
import CartBadge from './CartBadge';

export default function CartMenuButton({ cartCount = 2, onClick }) {
  return (
    <button 
      onClick={onClick}
      className="flex items-center justify-between w-full px-4 py-3 bg-black text-white hover:bg-white/5 transition-colors cursor-pointer"
    >
      <div className="flex items-center gap-4">
        <ShoppingCart size={20} strokeWidth={1.5} className="text-gray-200" />
        <span className="text-base tracking-wide">Cart</span>
      </div>
      <CartBadge count={cartCount} />
    </button>
  );
}