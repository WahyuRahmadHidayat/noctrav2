import React from 'react';
import { describe, it, expect, beforeEach } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { CartProvider } from '../context/CartContext';
import { useCart } from './useCart';

const localStorageMock = (() => {
  let store = {};
  return {
    getItem: (key) => store[key] || null,
    setItem: (key, value) => { store[key] = value.toString(); },
    removeItem: (key) => { delete store[key]; },
    clear: () => { store = {}; }
  };
})();

Object.defineProperty(window, 'localStorage', { value: localStorageMock });

// Kita pakai React.createElement murni biar parser Vite/ESLint nggak protes soal sintaks JSX
const Wrapper = ({ children }) => {
  return React.createElement(
    MemoryRouter,
    null,
    React.createElement(CartProvider, null, children)
  );
};

describe('useCart', () => {
  beforeEach(() => {
    window.localStorage.clear();
  });

  it('adds a new item to the empty cart', () => {
    const { result } = renderHook(() => useCart(), { wrapper: Wrapper });

    act(() => {
      result.current.addItem({ id: 'gear-1', name: 'Night Helmet', price: 'IDR 500.000' });
    });

    expect(result.current.cartItems.length).toBe(1);
    expect(result.current.cartItems[0].name).toBe('Night Helmet');
    expect(result.current.cartItems[0].quantity).toBe(1);
  });

  it('increases quantity if the same item is added again', () => {
    const { result } = renderHook(() => useCart(), { wrapper: Wrapper });

    act(() => {
      result.current.addItem({ id: 'gear-1', name: 'Night Helmet', price: 'IDR 500.000' });
    });
    
    act(() => {
      result.current.addItem({ id: 'gear-1', name: 'Night Helmet', price: 'IDR 500.000' });
    });

    expect(result.current.cartItems.length).toBe(1);
    expect(result.current.cartItems[0].quantity).toBe(2);
  });
});