import { useState, useEffect } from 'react';
import { supabase } from '@/supabase';
import { useAuth } from '@/hooks/useAuth';

export const useProfile = () => {
  const { currentUser } = useAuth();
  const [profileData, setProfileData] = useState({ full_name: '', phone: '', address: '' });
  const [isFetching, setIsFetching] = useState(true);
  const [status, setStatus] = useState('idle');
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    let isMounted = true;
    
    const fetchProfile = async () => {
      if (!currentUser) return;
      try {
        const { data, error } = await supabase
          .from('profiles')
          .select('*')
          .eq('id', currentUser.id)
          .maybeSingle();

        if (error) throw error;
        if (data && isMounted) {
          setProfileData({
            full_name: data.full_name || '',
            phone: data.phone || '',
            address: data.address || ''
          });
        }
      } catch (err) {
        console.error(err);
      } finally {
        if (isMounted) setIsFetching(false);
      }
    };

    fetchProfile();
    return () => { isMounted = false; };
  }, [currentUser]);

  const updateProfile = async (e) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');

    try {
      const { error } = await supabase
        .from('profiles')
        .upsert({
          id: currentUser.id,
          full_name: profileData.full_name,
          phone: profileData.phone,
          address: profileData.address,
          updated_at: new Date().toISOString()
        });

      if (error) throw error;
      setStatus('success');
      setTimeout(() => setStatus('idle'), 3000);
    } catch (err) {
      setStatus('error');
      setErrorMsg(err.message || 'Failed to update profile');
    }
  };

  return { profileData, setProfileData, isFetching, status, errorMsg, updateProfile };
};