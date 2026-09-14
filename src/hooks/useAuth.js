import { useContext } from 'react';
import { AuthContext } from '@/store/authStore';

export const useAuth = () => useContext(AuthContext);