import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from './cartStore';

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();

  const addItem = (product) => {
    setCartItems(currentItems => {
      const existingItem = currentItems.find(item => item.id === product.id);
      if (existingItem) {
        return currentItems.map(item => 
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...currentItems, { ...product, quantity: 1 }];
    });
  };

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
        price: total,
        items: cartItems
      } 
    });
  };

  return (
    <CartContext.Provider value={{
      cartItems,
      addItem,
      updateQuantity,
      removeItem,
      subtotal,
      shipping,
      total,
      formatPrice,
      handleCheckout
    }}>
      {children}
    </CartContext.Provider>
  );
}