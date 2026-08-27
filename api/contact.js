import { resend } from './_lib/resend.js';
import { sendSuccess, sendError } from './_lib/response.js';
import { contactSchema, validateBody } from './_lib/validate.js';
import { rateLimit } from './_lib/limiter.js';

export default async function handler(req, res) {
  if (req.method !== 'POST') return sendError(res, 'Metode tidak diizinkan. Gunakan POST.', 405);
  if (!rateLimit(req, res, 5, 60000)) return sendError(res, 'Terlalu banyak permintaan. Coba lagi nanti.', 429);

  try {
    const data = validateBody(req.body || {}, contactSchema);

    await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: globalThis.process.env.CONTACT_EMAIL_TO || 'onboarding@resend.dev',
      subject: `[NOCTRA] Contact Message from ${data.name}`,
      html: `<p><strong>Name:</strong> ${data.name}</p>
             <p><strong>Email:</strong> ${data.email}</p>
             <p><strong>Message:</strong></p>
             <p>${data.message}</p>`
    });

    return sendSuccess(res, { message: 'Pesan berhasil dikirim!' });
  } catch (error) {
    return sendError(res, error.message);
  }
}