export const parsePrice = (priceString) => {
  if (!priceString) return 0;
  const numericString = priceString.toString().replace(/[^0-9]/g, '');
  return parseInt(numericString, 10) || 0;
};