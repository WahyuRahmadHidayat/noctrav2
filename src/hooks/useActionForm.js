import { useState } from 'react';
import { submitAction } from '@/services/api';
import { useMidtrans } from '@/hooks/useMidtrans';
import { parsePrice } from '@/utils/parsePrice';

export const useActionForm = (type, productData) => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '' });
  const [status, setStatus] = useState('idle');
  const [errorMsg, setErrorMsg] = useState('');
  
  useMidtrans(); 

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');

    try {
      let gross_amount = undefined;
      if (productData && productData.price) {
        gross_amount = parsePrice(productData.price);
      }

      const payload = {
        ...formData,
        gross_amount,
        productId: productData?.id
      };

      const result = await submitAction(type, payload);

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