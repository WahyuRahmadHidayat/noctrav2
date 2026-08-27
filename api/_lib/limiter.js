// Rate limiter sederhana berbasis In-Memory Map.
// Keterbatasan: Data akan ter-reset saat serverless function Vercel mengalami cold start.
// Kalo web udah rame & traffic nyata, sangat disarankan upgrade ke Upstash Redis.
const rateLimitMap = new Map();

export const rateLimit = (req, res, limit = 5, windowMs = 60000) => {
  const ip = req.headers['x-forwarded-for'] || req.headers['x-real-ip'] || 'unknown';
  const now = Date.now();

  if (!rateLimitMap.has(ip)) {
    rateLimitMap.set(ip, { count: 1, startTime: now });
    return true;
  }

  const record = rateLimitMap.get(ip);
  if (now - record.startTime > windowMs) {
    rateLimitMap.set(ip, { count: 1, startTime: now });
    return true;
  }

  if (record.count >= limit) return false;
  
  record.count += 1;
  return true;
};