import { useState, useCallback } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, ShieldCheck, CreditCard, Wallet, MapPin, Mail, Phone, User } from 'lucide-react';
import AlertModal from '@/components/AlertModal';

const VIEW_CONFIG = {
  join: { title: 'JOIN THE MOVEMENT', tag: 'COMMUNITY', btn: 'SUBMIT APPLICATION', showPayment: false, successTitle: 'APPLICATION SENT', successDesc: "You're officially part of the NOCTRA community. Keep riding, keep pushing, keep the night alive." },
  register: { title: 'RIDE REGISTRATION', tag: 'TICKET', btn: 'CONFIRM SPOT', showPayment: true, successTitle: 'RIDE CONFIRMED', successDesc: "Your spot is secured. Prepare your gear and get ready to own the night." },
  cart: { title: 'SECURE CHECKOUT', tag: 'ORDER', btn: 'PAY NOW', showPayment: true, successTitle: 'ORDER SUCCESSFUL', successDesc: "Your payment has been verified. We are preparing your premium gear for shipping." }
};

const InputField = ({ label, icon: Icon, isTextArea, wrapperClass = "", ...props }) => (
  <div className={`space-y-2 ${wrapperClass}`}>
    <label className="text-xs text-gray-400 tracking-widest uppercase">{label}</label>
    <div className="relative">
      <Icon size={18} className={`absolute left-4 text-gray-500 ${isTextArea ? 'top-4' : 'top-1/2 -translate-y-1/2'}`} />
      {isTextArea ? (
        <textarea className="w-full bg-background border border-border pl-12 pr-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors text-white resize-none" {...props} />
      ) : (
        <input className="w-full bg-background border border-border pl-12 pr-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors text-white" {...props} />
      )}
    </div>
  </div>
);

export default function ActionView() {
  const { type } = useParams();
  const navigate = useNavigate();
  const current = VIEW_CONFIG[type] || VIEW_CONFIG.join;
  
  const [modal, setModal] = useState({ show: false, type: 'success' });

  const handleSubmit = (e) => {
    e.preventDefault();
    const isSuccess = Math.random() > 0.2;
    setModal({ show: true, type: isSuccess ? 'success' : 'error' });
  };

  const handleCloseModal = useCallback((isSuccess) => {
    setModal({ show: false, type: 'success' });
    if (isSuccess) navigate('/');
  }, [navigate]);

  return (
    <div className="min-h-screen bg-background text-white pt-28 pb-20 px-4 md:px-8 relative">
      {modal.show && (
        <AlertModal 
          type={modal.type} 
          title={current.successTitle} 
          desc={current.successDesc} 
          onClose={handleCloseModal} 
        />
      )}

      <div className="container mx-auto max-w-6xl relative z-10">
        <Link to="/" className="inline-flex items-center text-xs tracking-widest text-primary mb-10 hover:text-white transition-colors uppercase">
          <ArrowLeft size={16} className="mr-2" /> Return
        </Link>
        
        <form onSubmit={handleSubmit} className="flex flex-col lg:flex-row gap-12 items-start">
          <div className="w-full lg:w-2/3 space-y-10">
            <div>
              <div className="text-primary text-xs font-bold tracking-widest mb-3">{current.tag}</div>
              <h1 className="font-bebas text-5xl md:text-7xl text-white mb-4 leading-none">{current.title}</h1>
              <p className="text-gray-400 text-sm">Please complete the form below. All fields are securely encrypted.</p>
            </div>

            <div className="bg-surface border border-border p-6 md:p-10 space-y-8">
              <h3 className="font-bebas text-3xl text-white border-b border-border/50 pb-4">PERSONAL DETAILS</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <InputField label="Full Name" icon={User} type="text" required />
                <InputField label="Email Address" icon={Mail} type="email" required />
                <InputField label="Phone / WhatsApp" icon={Phone} type="tel" wrapperClass="md:col-span-2" required />
                
                {type === 'cart' && (
                  <InputField label="Complete Shipping Address" icon={MapPin} isTextArea rows="4" wrapperClass="md:col-span-2 pt-4" required />
                )}
              </div>
            </div>

            {current.showPayment && (
              <div className="bg-surface border border-border p-6 md:p-10 space-y-8">
                <h3 className="font-bebas text-3xl text-white border-b border-border/50 pb-4">PAYMENT METHOD</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <button type="button" className="flex items-center justify-center space-x-3 border border-primary bg-primary/10 text-primary py-4 hover:bg-primary hover:text-black transition-colors font-semibold tracking-widest text-xs">
                    <CreditCard size={18} /> <span>CREDIT CARD</span>
                  </button>
                  <button type="button" className="flex items-center justify-center space-x-3 border border-border bg-background text-gray-400 py-4 hover:border-primary hover:text-white transition-colors font-semibold tracking-widest text-xs">
                    <Wallet size={18} /> <span>VIRTUAL ACCOUNT</span>
                  </button>
                </div>
              </div>
            )}
          </div>

          <div className="w-full lg:w-1/3 lg:sticky lg:top-32">
            <div className="bg-[#111111] border border-[#222222] p-8">
              <div className="space-y-5 mb-10 text-sm">
                <div className="flex justify-between text-gray-400">
                  <span>Subtotal</span>
                  <span className="text-white font-barlow">{current.showPayment ? 'IDR 499.000' : '-'}</span>
                </div>
                <div className="flex justify-between text-gray-400 pb-5 border-b border-white/10">
                  <span>Taxes & Fees</span>
                  <span className="text-white font-barlow">{current.showPayment ? 'IDR 12.500' : '-'}</span>
                </div>
                <div className="flex justify-between items-center text-lg font-bold pt-2">
                  <span className="text-primary tracking-wide">TOTAL</span>
                  <span className="text-white font-bebas text-2xl tracking-widest">{current.showPayment ? 'IDR 511.500' : 'FREE'}</span>
                </div>
              </div>

              <div className="flex items-start space-x-4 mb-8">
                <ShieldCheck size={20} className="text-primary shrink-0 mt-0.5" />
                <p className="text-[10px] text-slate-400 font-semibold leading-[1.7] uppercase tracking-widest">
                  By clicking the button below, you agree to our Terms of Service, Privacy Policy, and Community Guidelines.
                </p>
              </div>

              <button type="submit" className="w-full bg-primary text-black py-4 text-sm font-bold hover:bg-white transition-colors tracking-widest flex items-center justify-center uppercase">
                {current.btn}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}