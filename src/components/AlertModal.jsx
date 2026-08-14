import { useEffect, useState } from 'react';
import { Check, X } from 'lucide-react';

export default function AlertModal({ type, title, desc, onClose }) {
  const [progress, setProgress] = useState(100);
  const [timeLeft, setTimeLeft] = useState(3);

  useEffect(() => {
    const timer = setTimeout(() => setProgress(0), 50);

    const countdown = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    const redirect = setTimeout(() => {
      onClose(type === 'success');
    }, 3000);

    return () => {
      clearTimeout(timer);
      clearInterval(countdown);
      clearTimeout(redirect);
    };
  }, [onClose, type]);

  const isSuccess = type === 'success';
  const theme = {
    text: isSuccess ? 'text-[#ccff00]' : 'text-[#ff3333]',
    border: isSuccess ? 'border-[#ccff00]' : 'border-[#ff3333]',
    bg: isSuccess ? 'bg-[#ccff00]' : 'bg-[#ff3333]',
    shadow: isSuccess ? 'shadow-[0_0_40px_rgba(204,255,0,0.15)]' : 'shadow-[0_0_40px_rgba(255,51,51,0.15)]',
    glow: isSuccess ? 'drop-shadow-[0_0_15px_rgba(204,255,0,0.8)]' : 'drop-shadow-[0_0_15px_rgba(255,51,51,0.8)]',
    iconBg: isSuccess ? 'bg-[#ccff00]/10' : 'bg-[#ff3333]/10',
    ring: isSuccess ? 'border-[#ccff00]/20' : 'border-[#ff3333]/20',
    dashed: isSuccess ? 'border-[#ccff00]' : 'border-[#ff3333]',
    spinner: isSuccess ? 'border-t-[#ccff00] border-r-[#ccff00]' : 'border-t-[#ff3333] border-r-[#ff3333]',
    title: isSuccess ? title : 'SOMETHING WENT WRONG',
    desc: isSuccess ? desc : "We couldn't process your request. Please try again in a moment."
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm px-4">
      <div className={`relative w-full max-w-2xl bg-[#0a0a0a] border ${theme.border} rounded-2xl p-8 ${theme.shadow} overflow-hidden`}>
        <div className="absolute right-12 top-1/2 -translate-y-1/2 flex gap-4 opacity-[0.03]">
          <div className="w-8 h-32 bg-white skew-x-[-30deg]"></div>
          <div className="w-8 h-32 bg-white skew-x-[-30deg]"></div>
        </div>

        <button onClick={() => onClose(isSuccess)} className="absolute top-6 right-6 text-gray-500 hover:text-white transition-colors z-20">
          <X size={24} strokeWidth={1.5} />
        </button>

        <div className="flex flex-col md:flex-row items-start gap-8 relative z-10 mb-10">
          <div className={`relative shrink-0 w-28 h-28 flex items-center justify-center rounded-full ${theme.shadow}`}>
            <div className={`absolute inset-0 rounded-full border-[3px] ${theme.ring}`}></div>
            <div className={`absolute inset-2 rounded-full border-2 border-dashed animate-[spin_10s_linear_infinite] ${theme.dashed}`}></div>
            <div className={`absolute inset-0 rounded-full border-[3px] border-transparent animate-[spin_3s_linear_infinite] ${theme.spinner}`}></div>
            <div className={`${theme.iconBg} p-5 rounded-full`}>
              {isSuccess ? <Check size={48} className={`${theme.text} ${theme.glow}`} strokeWidth={3} /> : <X size={48} className={`${theme.text} ${theme.glow}`} strokeWidth={3} />}
            </div>
          </div>

          <div className="flex-1 pt-2">
            <div className={`${theme.text} text-[10px] font-bold tracking-[0.3em] mb-2 uppercase`}>{isSuccess ? 'Success' : 'Error'}</div>
            <h2 className="font-bebas text-5xl text-white italic tracking-wider mb-4 leading-none">{theme.title}</h2>
            <p className="text-gray-400 text-sm leading-relaxed max-w-md">{theme.desc}</p>
          </div>
        </div>

        <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.2em] font-bold relative z-10">
          <div className="flex items-center text-white">
            <div className="flex gap-1 mr-3">
              <div className={`w-1.5 h-3 ${theme.bg} skew-x-12`}></div>
              <div className={`w-1.5 h-3 ${theme.bg} skew-x-12`}></div>
            </div>
            NOCTRA
          </div>
          <div className="flex-1 mx-8 bg-white/10 h-1.5 rounded-full overflow-hidden">
            <div className={`${theme.bg} h-full transition-all ease-linear`} style={{ width: `${progress}%`, transitionDuration: '3000ms' }}></div>
          </div>
          <div className="flex items-center gap-4">
            <span className={`${theme.text} hidden sm:inline`}>Urban Cycling Club</span>
            <span className="text-white text-xs">{timeLeft}s</span>
          </div>
        </div>
      </div>
    </div>
  );
}