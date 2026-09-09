import { useContext } from 'react';
import { CartContext } from '@/cart/cartStore';

export const useCart = () => useContext(CartContext);