import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const useAuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [status, setStatus] = useState('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const navigate = useNavigate();

  const validateForm = () => {
    if (!formData.email.includes('@') || !formData.email.includes('.')) {
      return 'INVALID EMAIL FORMAT';
    }
    if (formData.password.length < 6) {
      return 'PASSWORD MUST BE AT LEAST 6 CHARACTERS';
    }
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');

    const validationError = validateForm();
    if (validationError) {
      setStatus('error');
      setErrorMsg(validationError);
      return;
    }

    try {
      const endpoint = isLogin ? '/api/auth/login' : '/api/auth/register';
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'AUTHENTICATION FAILED');
      }

      setStatus('success');
      setTimeout(() => navigate('/'), 1500);
    } catch (err) {
      setStatus('error');
      setErrorMsg(err.message);
    }
  };

  const toggleMode = () => {
    setIsLogin(!isLogin);
    setStatus('idle');
    setErrorMsg('');
    setFormData({ email: '', password: '' });
  };

  return { 
    isLogin, 
    formData, 
    setFormData, 
    status, 
    errorMsg, 
    handleSubmit, 
    toggleMode 
  };
};