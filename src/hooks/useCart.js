import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import jerseyImg from '@/assets/images/gear/shop1.webp';
import helmetImg from '@/assets/images/gear/shop2.webp';

export const useCart = () => {
  const navigate = useNavigate();
  
  const [cartItems, setCartItems] = useState([
    {
      id: "noctra-reflective-jersey",
      img: jerseyImg,
      name: "NOCTRA REFLECTIVE JERSEY",
      price: 499000,
      quantity: 1,
      category: "APPAREL"
    },
    {
      id: "aero-stealth-helmet",
      img: helmetImg,
      name: "AERO STEALTH HELMET",
      price: 1250000,
      quantity: 1,
      category: "EQUIPMENT"
    }
  ]);

  const updateQuantity = (id, delta) => {
    setCartItems(currentItems =>
      currentItems.map(item => {
        if (item.id === id) {
          const newQuantity = item.quantity + delta;
          return newQuantity > 0 ? { ...item, quantity: newQuantity } : item;
        }
        return item;
      })
    );
  };

  const removeItem = (id) => {
    setCartItems(currentItems => currentItems.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = cartItems.length > 0 ? 50000 : 0;
  const total = subtotal + shipping;

  const formatPrice = (amount) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0
    }).format(amount).replace('Rp', 'IDR');
  };

  const handleCheckout = () => {
    if (cartItems.length === 0) return;
    navigate('/action/checkout', { 
      state: { 
        id: 'cart-checkout',
        title: 'CART CHECKOUT', 
        price: total 
      } 
    });
  };

  return {
    cartItems,
    updateQuantity,
    removeItem,
    subtotal,
    shipping,
    total,
    formatPrice,
    handleCheckout
  };
};