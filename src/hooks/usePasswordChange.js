import { useState } from 'react';
import { supabase } from '@/supabase';

export const usePasswordChange = () => {
  const [formData, setFormData] = useState({ newPassword: '', confirmPassword: '' });
  const [status, setStatus] = useState('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handlePasswordChange = async (e) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');

    if (formData.newPassword.length < 6) {
      setStatus('error');
      setErrorMsg('PASSWORD MUST BE AT LEAST 6 CHARACTERS');
      return;
    }

    if (formData.newPassword !== formData.confirmPassword) {
      setStatus('error');
      setErrorMsg('PASSWORDS DO NOT MATCH');
      return;
    }

    try {
      const { error } = await supabase.auth.updateUser({
        password: formData.newPassword
      });

      if (error) throw error;
      
      setStatus('success');
      setFormData({ newPassword: '', confirmPassword: '' });
      setTimeout(() => setStatus('idle'), 3000);
    } catch (err) {
      setStatus('error');
      setErrorMsg(err.message || 'FAILED TO UPDATE PASSWORD');
    }
  };

  return { formData, setFormData, status, errorMsg, handlePasswordChange };
};