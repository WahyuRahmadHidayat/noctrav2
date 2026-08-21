import { useState } from 'react';
import { supabase } from '@/supabase';

export const useNewsletter = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle');

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (!email) return;
    setStatus('loading');
    
    try {
      const { error } = await supabase
        .from('subscribers')
        .insert([{ email }]);

      if (error) {
        console.error('Error insert Supabase:', error);
        setStatus('error');
      } else {
        setStatus('success');
        setEmail('');
      }

      setTimeout(() => setStatus('idle'), 3000);
    } catch (err) {
      console.error('System error:', err);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  return { email, setEmail, status, handleSubscribe };
};