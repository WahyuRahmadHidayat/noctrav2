import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ShieldCheck, CreditCard, Wallet, MapPin, Mail, Phone, User } from 'lucide-react';

export default function ActionView() {
  const { type } = useParams();
  
  const config = {
    join: { title: 'JOIN THE MOVEMENT', tag: 'COMMUNITY', btn: 'SUBMIT APPLICATION', showPayment: false },
    register: { title: 'RIDE REGISTRATION', tag: 'TICKET', btn: 'CONFIRM SPOT', showPayment: true },
    cart: { title: 'SECURE CHECKOUT', tag: 'ORDER', btn: 'PAY NOW', showPayment: true }
  };

  const current = config[type] || config.join;

  return (
    <div className="min-h-screen bg-background text-white pt-28 pb-20 px-4 md:px-8">
      <div className="container mx-auto max-w-6xl">
        <Link to="/" className="inline-flex items-center text-xs tracking-widest text-primary mb-10 hover:text-white transition-colors uppercase">
          <ArrowLeft size={16} className="mr-2" /> Return
        </Link>
        
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          
          <div className="w-full lg:w-2/3 space-y-10">
            <div>
              <div className="text-primary text-xs font-bold tracking-widest mb-3">{current.tag}</div>
              <h1 className="font-bebas text-5xl md:text-7xl text-white mb-4 leading-none">{current.title}</h1>
              <p className="text-gray-400 text-sm">Please complete the form below. All fields are securely encrypted.</p>
            </div>

            <div className="bg-surface border border-border p-6 md:p-10 space-y-8">
              <h3 className="font-bebas text-3xl text-white border-b border-border/50 pb-4">PERSONAL DETAILS</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs text-gray-400 tracking-widest uppercase">Full Name</label>
                  <div className="relative">
                    <User size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
                    <input type="text" className="w-full bg-background border border-border pl-12 pr-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors text-white" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs text-gray-400 tracking-widest uppercase">Email Address</label>
                  <div className="relative">
                    <Mail size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
                    <input type="email" className="w-full bg-background border border-border pl-12 pr-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors text-white" />
                  </div>
                </div>
                <div className="space-y-2 md:col-span-2">
                  <label className="text-xs text-gray-400 tracking-widest uppercase">Phone / WhatsApp</label>
                  <div className="relative">
                    <Phone size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
                    <input type="text" className="w-full bg-background border border-border pl-12 pr-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors text-white" />
                  </div>
                </div>
                
                {type === 'cart' && (
                  <div className="space-y-2 md:col-span-2 pt-4">
                    <label className="text-xs text-gray-400 tracking-widest uppercase">Complete Shipping Address</label>
                    <div className="relative flex items-start">
                      <MapPin size={18} className="absolute left-4 top-4 text-gray-500" />
                      <textarea rows="4" className="w-full bg-background border border-border pl-12 pr-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors text-white resize-none"></textarea>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {current.showPayment && (
              <div className="bg-surface border border-border p-6 md:p-10 space-y-8">
                <h3 className="font-bebas text-3xl text-white border-b border-border/50 pb-4">PAYMENT METHOD</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <button className="flex items-center justify-center space-x-3 border border-primary bg-primary/10 text-primary py-4 hover:bg-primary hover:text-black transition-colors font-semibold tracking-widest text-xs">
                    <CreditCard size={18} /> <span>CREDIT CARD</span>
                  </button>
                  <button className="flex items-center justify-center space-x-3 border border-border bg-background text-gray-400 py-4 hover:border-primary hover:text-white transition-colors font-semibold tracking-widest text-xs">
                    <Wallet size={18} /> <span>VIRTUAL ACCOUNT</span>
                  </button>
                </div>
              </div>
            )}
          </div>

          <div className="w-full lg:w-1/3 lg:sticky lg:top-32 space-y-6">
            <div className="bg-surface border border-border p-8">
              <h3 className="font-bebas text-3xl text-white mb-6">SUMMARY</h3>
              
              <div className="space-y-4 mb-8 text-sm">
                <div className="flex justify-between text-gray-400">
                  <span>Subtotal</span>
                  <span className="text-white font-barlow">{current.showPayment ? 'IDR 499.000' : '-'}</span>
                </div>
                <div className="flex justify-between text-gray-400 pb-4 border-b border-border/50">
                  <span>Taxes & Fees</span>
                  <span className="text-white font-barlow">{current.showPayment ? 'IDR 12.500' : '-'}</span>
                </div>
                <div className="flex justify-between text-lg font-bold">
                  <span className="text-primary">TOTAL</span>
                  <span className="text-white font-barlow">{current.showPayment ? 'IDR 511.500' : 'FREE'}</span>
                </div>
              </div>

              <div className="flex items-start space-x-3 mb-8">
                <ShieldCheck size={20} className="text-primary shrink-0 mt-0.5" />
                <p className="text-[10px] text-gray-500 leading-relaxed uppercase tracking-widest">
                  By clicking the button below, you agree to our Terms of Service, Privacy Policy, and Community Guidelines.
                </p>
              </div>

              <button className="w-full bg-primary text-black py-4 font-bold hover:bg-white transition-colors tracking-widest flex items-center justify-center">
                {current.btn}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}