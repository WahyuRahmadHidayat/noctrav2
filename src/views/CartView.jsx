import { Link } from 'react-router-dom';
import { ArrowLeft, Trash2, Plus, Minus, ShoppingBag, CreditCard } from 'lucide-react';
import SEO from '@/components/SEO';
import { useCart } from '@/hooks/useCart';

export default function CartView() {
  const { 
    cartItems, 
    updateQuantity, 
    removeItem, 
    subtotal, 
    shipping, 
    total, 
    formatPrice, 
    handleCheckout 
  } = useCart();

  return (
    <div className="min-h-screen bg-background text-white flex flex-col pt-24 pb-12">
      <SEO title="Shopping Cart" description="Review your NOCTRA gear before checkout." />
      
      <div className="p-8">
        <Link to="/shop" className="inline-flex items-center text-xs tracking-widest text-primary hover:text-white transition-colors uppercase">
          <ArrowLeft size={16} className="mr-2" /> CONTINUE SHOPPING
        </Link>
      </div>

      <div className="grow px-4 pb-20 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="mb-10">
          <h1 className="font-bebas text-5xl tracking-widest text-white mb-2 uppercase">YOUR CART</h1>
          <p className="text-gray-400 text-xs tracking-widest uppercase">
            {cartItems.length} {cartItems.length === 1 ? 'ITEM' : 'ITEMS'} IN COMMAND CENTER
          </p>
        </div>

        {cartItems.length === 0 ? (
          <div className="border border-border p-20 flex flex-col items-center justify-center text-center bg-surface shadow-[0_0_30px_rgba(0,0,0,0.5)]">
            <ShoppingBag size={48} className="text-gray-400 mb-6" />
            <h2 className="text-2xl font-bebas tracking-widest mb-2 text-white">CART IS EMPTY</h2>
            <p className="text-gray-400 text-xs tracking-widest uppercase mb-8">You have not selected any gear yet.</p>
            <Link to="/shop" className="bg-primary text-black px-8 py-3 text-sm font-bold tracking-widest hover:bg-white transition-colors uppercase">
              BROWSE GEAR
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 space-y-6">
              {cartItems.map((item) => (
                <div key={item.id} className="border border-border p-4 flex flex-col sm:flex-row gap-6 bg-surface relative">
                  <div className="w-full sm:w-32 h-32 bg-background border border-border shrink-0">
                    <img src={item.img} alt={item.name} className="w-full h-full object-cover grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500" />
                  </div>
                  
                  <div className="grow flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start mb-1">
                        <h3 className="text-lg font-bold tracking-widest uppercase pr-8 text-white">{item.name}</h3>
                        <button 
                          onClick={() => removeItem(item.id)}
                          className="text-gray-500 hover:text-red-500 transition-colors absolute sm:static right-4 top-4"
                        >
                          <Trash2 size={18} />
                        </button>
                      </div>
                      <p className="text-xs text-primary tracking-widest uppercase mb-4">{item.category}</p>
                    </div>
                    
                    <div className="flex justify-between items-end">
                      <div className="flex items-center border border-border bg-background">
                        <button 
                          onClick={() => updateQuantity(item.id, -1)}
                          className="p-2 text-gray-400 hover:bg-primary hover:text-black transition-colors"
                        >
                          <Minus size={14} />
                        </button>
                        <span className="w-10 text-center text-sm font-bold text-white">{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.id, 1)}
                          className="p-2 text-gray-400 hover:bg-primary hover:text-black transition-colors"
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                      <p className="text-lg font-bold tracking-widest text-white">{formatPrice(item.price * item.quantity)}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="lg:col-span-1">
              <div className="border border-border p-6 bg-surface sticky top-32 shadow-[0_0_30px_rgba(0,0,0,0.5)]">
                <h2 className="text-xl font-bebas tracking-widest mb-6 border-b border-border pb-4 text-white">ORDER SUMMARY</h2>
                
                <div className="space-y-4 mb-6 text-sm tracking-widest uppercase">
                  <div className="flex justify-between text-gray-400">
                    <span>SUBTOTAL</span>
                    <span className="text-white">{formatPrice(subtotal)}</span>
                  </div>
                  <div className="flex justify-between text-gray-400">
                    <span>ESTIMATED SHIPPING</span>
                    <span className="text-white">{formatPrice(shipping)}</span>
                  </div>
                </div>

                <div className="border-t border-border pt-4 mb-8">
                  <div className="flex justify-between items-center">
                    <span className="text-base font-bold tracking-widest uppercase text-white">TOTAL</span>
                    <span className="text-xl font-bold text-primary">{formatPrice(total)}</span>
                  </div>
                </div>

                <button 
                  onClick={handleCheckout}
                  className="w-full bg-primary text-black py-4 text-sm font-bold tracking-widest hover:bg-white transition-colors uppercase flex justify-center items-center gap-2"
                >
                  <CreditCard size={18} />
                  PROCEED TO CHECKOUT
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}