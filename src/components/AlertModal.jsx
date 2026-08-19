import { useEffect, useRef } from 'react';
import { X } from 'lucide-react';

export default function AlertModal({ isOpen, onClose, title, message, type = 'success' }) {
  const modalRef = useRef(null);
  const previousFocusRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      previousFocusRef.current = document.activeElement;
      
      modalRef.current?.focus();

      const handleKeyDown = (e) => {
        if (e.key === 'Escape') onClose();
        
        if (e.key === 'Tab') {
          const focusableElements = modalRef.current.querySelectorAll(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
          );
          const firstElement = focusableElements[0];
          const lastElement = focusableElements[focusableElements.length - 1];

          if (e.shiftKey && document.activeElement === firstElement) {
            e.preventDefault();
            lastElement.focus();
          } else if (!e.shiftKey && document.activeElement === lastElement) {
            e.preventDefault();
            firstElement.focus();
          }
        }
      };

      document.addEventListener('keydown', handleKeyDown);
      
      return () => {
        document.removeEventListener('keydown', handleKeyDown);
        previousFocusRef.current?.focus();
      };
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const isSuccess = type === 'success';

  return (
    <div className="fixed inset-0 z-100 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
      <div 
        ref={modalRef}
        tabIndex={-1}
        role="dialog" 
        aria-modal="true"
        aria-labelledby="modal-title"
        aria-describedby="modal-desc"
        className={`w-full max-w-md bg-surface border shadow-[0_0_30px_rgba(0,0,0,0.5)] p-6 md:p-8 relative outline-none ${isSuccess ? 'border-primary' : 'border-red-500'}`}
      >
        <button 
          onClick={onClose}
          aria-label="Close notification"
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors outline-none focus:text-primary"
        >
          <X size={24} aria-hidden="true" />
        </button>
        
        <h2 id="modal-title" className={`font-bebas text-3xl mb-2 ${isSuccess ? 'text-primary' : 'text-red-500'}`}>
          {title}
        </h2>
        
        <p id="modal-desc" className="text-gray-300 text-sm leading-relaxed mb-6">
          {message}
        </p>
        
        <button 
          onClick={onClose}
          className={`w-full py-3 text-black text-sm font-bold tracking-widest uppercase transition-colors outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-background ${isSuccess ? 'bg-primary hover:bg-white focus:ring-primary' : 'bg-red-500 hover:bg-red-400 focus:ring-red-500'}`}
        >
          ACKNOWLEDGE
        </button>
      </div>
    </div>
  );
}