import { useContext } from 'react';
import { CartContext } from '@/store/cartStore';

export const useCart = () => useContext(CartContext);