import { resend } from '../_lib/resend.js';
import { snap } from '../_lib/midtrans.js';
import { sendSuccess, sendError } from '../_lib/response.js';
import { joinSchema, checkoutSchema, cartCheckoutSchema, validateBody } from '../_lib/validate.js';
import { rateLimit } from '../_lib/limiter.js';

export default async function handler(req, res) {
  if (req.method !== 'POST') return sendError(res, 'Metode tidak diizinkan. Gunakan POST.', 405);
  if (!rateLimit(req, res, 10, 60000)) return sendError(res, 'Terlalu banyak permintaan. Coba lagi nanti.', 429);

  const { type } = req.query;
  const body = req.body || {};

  try {
    if (type === 'join') {
      const data = validateBody(body, joinSchema);
      await resend.emails.send({
        from: 'onboarding@resend.dev',
        to: globalThis.process.env.CONTACT_EMAIL_TO || 'onboarding@resend.dev',
        subject: `[NOCTRA] New Community Member: ${data.name}`,
        html: `<h2>Member Baru Bergabung!</h2>
               <p><strong>Nama:</strong> ${data.name}</p>
               <p><strong>Email:</strong> ${data.email}</p>
               <p>Segera sapa member baru kita di NOCTRA Urban Night Cycling Club.</p>`
      });
      return sendSuccess(res);
    }

    if (type === 'register' || type === 'cart') {
      const data = validateBody(body, checkoutSchema);
      let parameter = {
        transaction_details: {
          order_id: `NOCTRA-${type.toUpperCase()}-${Date.now()}`,
          gross_amount: data.gross_amount
        },
        customer_details: {
          first_name: data.name,
          email: data.email,
          phone: data.phone
        }
      };

      const transaction = await snap.createTransaction(parameter);
      return sendSuccess(res, { token: transaction.token });
    }

    if (type === 'checkout') {
      const data = validateBody(body, cartCheckoutSchema);
      
      const totalItemsPrice = data.items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
      const shippingFee = 50000;
      const finalGrossAmount = totalItemsPrice + shippingFee;

      let parameter = {
        transaction_details: {
          order_id: `NOCTRA-CHECKOUT-${Date.now()}`,
          gross_amount: finalGrossAmount
        },
        customer_details: {
          first_name: data.name,
          email: data.email,
          phone: data.phone
        }
      };

      const transaction = await snap.createTransaction(parameter);
      return sendSuccess(res, { token: transaction.token });
    }

    return sendError(res, `Endpoint untuk action '${type}' tidak ditemukan.`, 404);
  } catch (error) {
    console.error(`[API ACTIONS ERROR - ${type}]:`, error);
    return sendError(res, error.message || 'Terjadi kesalahan pada internal server.', 500);
  }
}