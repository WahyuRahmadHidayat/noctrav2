import aboutBg from '@/assets/images/hero/why-ride-bg.avif';
import SEO from '@/components/SEO';

export default function AboutView() {
  return (
    <div className="min-h-screen bg-background text-white pt-32 pb-20 px-4 md:px-8 relative">
      <SEO 
        title="About Us | NOCTRA" 
        description="Learn about the NOCTRA urban night cycling community." 
      />
      <div className="absolute inset-0 bg-cover bg-center z-0 opacity-30" style={{ backgroundImage: `url(${aboutBg})` }} />
      <div className="absolute inset-0 bg-linear-to-b from-background via-background/80 to-background z-10" />
      
      <div className="container mx-auto max-w-6xl relative z-20">
        <div className="text-center mb-16">
          <h1 className="font-bebas text-5xl md:text-7xl text-white mb-6 uppercase tracking-wider">ABOUT NOCTRA</h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
            NOCTRA was born from a simple belief: the night is not the end, it's another beginning. We are a community of riders who embrace the dark, chase the silence, and find freedom on two wheels.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center pt-12 border-t border-border/50">
          <div className="space-y-2">
            <h3 className="font-bebas text-4xl text-primary">1,250+</h3>
            <p className="text-xs tracking-widest text-gray-400 uppercase">Riders</p>
          </div>
          <div className="space-y-2">
            <h3 className="font-bebas text-4xl text-primary">80+</h3>
            <p className="text-xs tracking-widest text-gray-400 uppercase">Rides</p>
          </div>
          <div className="space-y-2">
            <h3 className="font-bebas text-4xl text-primary">12+</h3>
            <p className="text-xs tracking-widest text-gray-400 uppercase">Cities</p>
          </div>
          <div className="space-y-2">
            <h3 className="font-bebas text-4xl text-primary">25K+</h3>
            <p className="text-xs tracking-widest text-gray-400 uppercase">KM Covered</p>
          </div>
        </div>
      </div>
    </div>
  );
}