import { Loader2 } from 'lucide-react';

export default function PageLoader() {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center text-primary z-100 fixed inset-0">
      <Loader2 className="animate-spin mb-4" size={48} />
      <span className="text-[10px] font-bold tracking-[0.3em] uppercase">DECRYPTING SIGNAL...</span>
    </div>
  );
}