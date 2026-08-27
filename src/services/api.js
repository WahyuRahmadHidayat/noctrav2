export const submitContactForm = async (data) => {
  const response = await fetch('/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });
  const result = await response.json().catch(() => ({}));
  if (!response.ok) throw new Error(result.message || 'Transmission failed. Try again.');
  return result; 
};

export const submitAction = async (type, data) => {
  const response = await fetch(`/api/actions/${type}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });
  const result = await response.json().catch(() => ({})); 
  if (!response.ok) throw new Error(result.message || 'Transaction failed');
  return result;
};