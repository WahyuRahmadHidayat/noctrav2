export const submitContactForm = async (data) => {
  const response = await fetch('/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });
  if (!response.ok) throw new Error('Transmission failed. Try again.');
  
  //ganti return response.json(); jika API sudah siap
  return {}; 
};

export const submitNewsletter = async (email) => {
  const response = await fetch('/api/newsletter', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email })
  });
  if (!response.ok) throw new Error('Failed');
  return {};
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