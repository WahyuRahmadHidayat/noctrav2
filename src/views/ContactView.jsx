import { Mail, MapPin, Phone, Loader2 } from 'lucide-react';
import { useContactForm } from '@/hooks/useContactForm';
import SEO from '@/components/SEO';

export default function ContactView() {
  const { formData, setFormData, status, errorMsg, handleSubmit } = useContactForm();

  return (
    <div className="min-h-screen bg-background text-white pt-32 pb-20 px-4 md:px-8">
      <SEO title="Contact" description="Get in touch with NOCTRA. We'd love to hear from you." />
      
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row gap-16 items-start">
          <div className="w-full md:w-1/2">
            <h3 className="text-primary text-xs font-bold tracking-widest mb-2 uppercase">Get In Touch</h3>
            <h1 className="font-bebas text-6xl md:text-8xl text-white leading-none mb-8">CONTACT US</h1>
            <p className="text-gray-400 text-sm mb-12 leading-relaxed">
              Have questions about upcoming rides, gear shipping, or collaboration? Drop us a message and our crew will get back to you as soon as possible.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 border border-primary/20 text-primary"><MapPin size={24} /></div>
                <div className="pt-1">
                  <h4 className="font-bold text-sm tracking-widest uppercase mb-2 text-white">Headquarters</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">124 Neon Alley, District 9<br/>Jakarta, Indonesia 12190</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 border border-primary/20 text-primary"><Mail size={24} /></div>
                <div className="pt-1">
                  <h4 className="font-bold text-sm tracking-widest uppercase mb-2 text-white">Email</h4>
                  <a href="mailto: amadday09@gmail.com" className="text-gray-400 text-sm leading-relaxed hover:text-primary transition-colors block">crew@noctra.cc</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 border border-primary/20 text-primary"><Phone size={24} /></div>
                <div className="pt-1">
                  <h4 className="font-bold text-sm tracking-widest uppercase mb-2 text-white">Emergency / Hotline</h4>
                  <a href="tel:+62 81528942073" className="text-gray-400 text-sm leading-relaxed hover:text-primary transition-colors block">+62 81528942073</a>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/2 bg-surface border border-border p-8 md:p-10 shadow-[0_0_30px_rgba(0,0,0,0.3)]">
            <h3 className="font-bebas text-3xl mb-8 border-b border-border pb-4">SEND A MESSAGE</h3>
            
            {status === 'success' && (
              <div className="bg-primary/20 border border-primary text-primary p-4 mb-6 text-sm font-bold tracking-widest uppercase text-center">
                MESSAGE TRANSMITTED SUCCESSFULLY
              </div>
            )}
            
            {status === 'error' && (
              <div className="bg-red-500/20 border border-red-500 text-red-500 p-4 mb-6 text-sm font-bold tracking-widest uppercase text-center">
                {errorMsg}
              </div>
            )}

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="space-y-2">
                <label className="text-xs text-gray-400 tracking-widest uppercase">Full Name</label>
                <input 
                  type="text" 
                  required 
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full bg-background border border-border px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors text-white" 
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs text-gray-400 tracking-widest uppercase">Email Address</label>
                <input 
                  type="email" 
                  required 
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full bg-background border border-border px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors text-white" 
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs text-gray-400 tracking-widest uppercase">Message</label>
                <textarea 
                  rows="5" 
                  required 
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full bg-background border border-border px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors text-white resize-none"
                ></textarea>
              </div>
              <button 
                type="submit" 
                disabled={status === 'loading'}
                className="w-full bg-primary text-black py-4 text-sm font-bold tracking-widest hover:bg-white transition-colors uppercase disabled:opacity-50 disabled:cursor-not-allowed flex justify-center items-center cursor-pointer"
              >
                {status === 'loading' ? <Loader2 className="animate-spin" size={20} /> : 'TRANSMIT MESSAGE'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}