import { describe, it, expect } from 'vitest';
import { parsePrice } from './parsePrice';

describe('parsePrice', () => {
  it('returns 0 for empty or invalid input', () => {
    expect(parsePrice('')).toBe(0);
    expect(parsePrice(null)).toBe(0);
    expect(parsePrice(undefined)).toBe(0);
  });

  it('parses formatted string prices correctly', () => {
    expect(parsePrice('IDR 499.000')).toBe(499000);
    expect(parsePrice('Rp 1.500.000')).toBe(1500000);
    expect(parsePrice('50,000')).toBe(50000);
  });

  it('handles raw numeric input correctly', () => {
    expect(parsePrice(125000)).toBe(125000);
  });
});