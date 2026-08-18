import { useState } from 'react';
import { submitAction } from '@/services/api';
import { useMidtrans } from '@/hooks/useMidtrans';

export const useActionForm = (type) => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '' });
  const [status, setStatus] = useState('idle');
  const [errorMsg, setErrorMsg] = useState('');
  
  // Injeksi script Midtrans langsung di-handle di dalam logic hook ini
  useMidtrans(); 

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');

    try {
      const result = await submitAction(type, formData);

      if (type === 'join') {
        setStatus('success');
      } else if (result.token) {
        window.snap.pay(result.token, {
          onSuccess: () => setStatus('success'),
          onPending: () => setStatus('success'),
          onError: () => { 
            setStatus('error');
            setErrorMsg('Payment failed or cancelled.');
          },
          onClose: () => setStatus('idle')
        });
      }
    } catch (err) {
      setStatus('error');
      setErrorMsg(err.message);
    }
  };

  return { formData, setFormData, status, errorMsg, handleSubmit };
};