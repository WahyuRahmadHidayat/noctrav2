import { useParams, useLocation, Link } from 'react-router-dom';
import { ArrowLeft, Loader2, ShieldCheck } from 'lucide-react';
import { useActionForm } from '@/hooks/useActionForm';

export default function ActionView() {
  const { type } = useParams();
  const location = useLocation();
  const productData = location.state || null;
  
  const { formData, setFormData, status, errorMsg, handleSubmit } = useActionForm(type, productData);

  const titles = {
    join: 'JOIN THE CREW',
    register: 'REGISTER RIDE',
    cart: 'SECURE CHECKOUT'
  };

  if (status === 'success') {
    return (
      <div className="min-h-screen bg-background text-white pt-32 pb-20 px-4 flex flex-col items-center justify-center">
        <ShieldCheck size={64} className="text-primary mb-6" />
        <h1 className="font-bebas text-5xl md:text-7xl mb-4 leading-none">TRANSMISSION CONFIRMED</h1>
        <p className="text-gray-400 text-lg mb-8 text-center max-w-md">
          {type === 'join' 
            ? 'Your application to join NOCTRA has been received.' 
            : 'Your transaction was successful. Check your email for details.'}
        </p>
        <Link to="/" className="bg-primary text-black px-8 py-4 font-bold tracking-widest uppercase hover:bg-white transition-colors">
          RETURN TO BASE
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-white pt-32 pb-20 px-4 md:px-8">
      <div className="container mx-auto max-w-xl">
        <Link to="/" className="inline-flex items-center text-xs tracking-widest text-primary mb-10 hover:text-white transition-colors uppercase">
          <ArrowLeft size={16} className="mr-2" /> ABORT
        </Link>

        <div className="bg-surface border border-border p-8 md:p-12 shadow-[0_0_30px_rgba(0,0,0,0.5)]">
          <h1 className="font-bebas text-5xl text-white mb-2">{titles[type] || 'SECURE PROTOCOL'}</h1>
          <p className="text-gray-400 text-sm mb-8 leading-relaxed">
            Complete the form below to proceed. All data is encrypted and transmitted securely.
          </p>

          {status === 'error' && (
            <div className="bg-red-500/20 border border-red-500 text-red-500 p-4 mb-6 text-sm font-bold tracking-widest uppercase text-center">
              {errorMsg}
            </div>
          )}

          {/* TAMPILKAN RINGKASAN ORDER DI SINI */}
          {productData && (
            <div className="mb-6 p-4 border border-zinc-800 bg-zinc-900/50 rounded flex justify-between items-center">
              <div>
                <p className="text-xs text-zinc-500 uppercase tracking-widest">Order Summary</p>
                <p className="font-bold text-white text-lg">{productData.title}</p>
              </div>
              <p className="text-primary font-bold">{productData.price}</p>
            </div>
          )}
          
          {/* FALLBACK JIKA AKSES LANGSUNG TANPA PRODUK */}
          {!productData && type !== 'join' && (
             <div className="mb-6 p-4 border border-zinc-800 bg-zinc-900/50 rounded">
               <p className="text-sm text-zinc-400">Community Registration / General Payment</p>
             </div>
          )}

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="space-y-2">
              <label className="text-xs text-gray-400 tracking-widest uppercase">Full Name</label>
              <input 
                type="text" 
                name="name"
                required 
                value={formData.name || ''}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="w-full bg-background border border-border px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors text-white" 
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs text-gray-400 tracking-widest uppercase">Email Address</label>
              <input 
                type="email" 
                name="email"
                required 
                value={formData.email || ''}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="w-full bg-background border border-border px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors text-white" 
              />
            </div>
            
            {type !== 'join' && (
              <div className="space-y-2">
                <label className="text-xs text-gray-400 tracking-widest uppercase">Phone Number (For Payment/Delivery)</label>
                <input 
                  type="tel" 
                  name="phone"
                  required 
                  value={formData.phone || ''}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="w-full bg-background border border-border px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors text-white" 
                />
              </div>
            )}

            <button 
              type="submit" 
              disabled={status === 'loading'}
              className="w-full bg-primary text-black py-4 mt-4 text-sm font-bold tracking-widest hover:bg-white transition-colors uppercase disabled:opacity-50 disabled:cursor-not-allowed flex justify-center items-center"
            >
              {status === 'loading' ? <Loader2 className="animate-spin" size={20} /> : (type === 'join' ? 'SUBMIT APPLICATION' : 'PROCEED TO PAYMENT')}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}