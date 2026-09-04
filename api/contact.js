import { resend } from './_lib/resend.js';
import { sendSuccess, sendError } from './_lib/response.js';
import { contactSchema, validateBody } from './_lib/validate.js';
import { rateLimit } from './_lib/limiter.js';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return sendError(res, 'Metode tidak diizinkan. Gunakan POST.', 405);
  }

  if (!rateLimit(req, res, 5, 60000)) {
    return sendError(res, 'Terlalu banyak permintaan. Coba lagi nanti.', 429);
  }

  try {
    const data = validateBody(req.body || {}, contactSchema);
    const destinationEmail = globalThis.process?.env?.CONTACT_EMAIL_TO || 'amadday09@gmail.com';

    const { data: emailData, error: resendError } = await resend.emails.send({
      from: 'NOCTRA Support <onboarding@resend.dev>',
      to: [destinationEmail],
      reply_to: data.email,
      subject: `[NOCTRA] Pesan Baru dari ${data.name}`,
      html: `
        <div style="font-family: Arial, sans-serif; color: #333;">
          <h2>Pesan Baru dari Formulir Kontak NOCTRA</h2>
          <p><strong>Nama:</strong> ${data.name}</p>
          <p><strong>Email Pengirim:</strong> ${data.email}</p>
          <p><strong>Pesan:</strong></p>
          <div style="background: #f4f4f4; padding: 15px; border-radius: 5px;">
            ${data.message}
          </div>
        </div>
      `
    });

    if (resendError) {
      return sendError(res, resendError.message || 'Gagal mengirim email via Resend.', 400);
    }

    return sendSuccess(res, { message: 'Pesan berhasil dikirim!', id: emailData?.id });
  } catch (error) {
    return sendError(res, error.message || 'Terjadi kesalahan pada server.', 500);
  }
}