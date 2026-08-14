import { Mail, MapPin, ArrowRight } from 'lucide-react';
import { FaInstagram } from 'react-icons/fa';

export default function ContactView() {
  return (
    <div className="min-h-screen bg-background text-white pt-32 pb-20 px-4 md:px-8 relative">
      <div className="absolute inset-0 bg-cover bg-center z-0 opacity-20" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1558981359-219d6364c9c8?q=80&w=2000&auto=format&fit=crop')" }} />
      <div className="absolute inset-0 bg-linear-to-r from-background via-background/90 to-background/50 z-10" />

      <div className="container mx-auto max-w-6xl relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          
          <div>
            <h1 className="font-bebas text-5xl md:text-7xl text-white mb-4 tracking-wider">CONTACT US</h1>
            <p className="text-gray-400 mb-12">Let's ride together. Reach out!</p>

            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <Mail className="text-primary mt-1" size={24} />
                <div>
                  <h4 className="text-xs tracking-widest text-gray-400 mb-1">EMAIL</h4>
                  <p className="text-white">hello@noctra.cc</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <FaInstagram className="text-primary mt-1" size={24} />
                <div>
                  <h4 className="text-xs tracking-widest text-gray-400 mb-1">INSTAGRAM</h4>
                  <p className="text-white">@noctra.cc</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <MapPin className="text-primary mt-1" size={24} />
                <div>
                  <h4 className="text-xs tracking-widest text-gray-400 mb-1">LOCATION</h4>
                  <p className="text-white">Jakarta, Indonesia</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-surface/50 backdrop-blur-sm border border-border p-8">
            <form className="space-y-6">
              <input type="text" placeholder="Your Name" className="w-full bg-background/50 border border-border px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors text-white" />
              <input type="email" placeholder="Your Email" className="w-full bg-background/50 border border-border px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors text-white" />
              <input type="text" placeholder="Subject" className="w-full bg-background/50 border border-border px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors text-white" />
              <textarea placeholder="Your Message" rows="4" className="w-full bg-background/50 border border-border px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors text-white resize-none"></textarea>
              <button type="button" className="bg-primary text-black px-8 py-4 text-xs font-bold tracking-widest hover:bg-white transition-colors flex items-center justify-center w-full md:w-auto">
                SEND MESSAGE <ArrowRight size={16} className="ml-2" />
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
}