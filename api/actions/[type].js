import { Resend } from 'resend';
import midtransClient from 'midtrans-client';

const resend = new Resend(globalThis.process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed. Gunakan metode POST.' });
  }

  const { type } = req.query;
  const body = req.body || {};
  const { name, email, phone, gross_amount = 0 } = body;

  try {
    if (type === 'join') {
      if (!name || !email) {
        return res.status(400).json({ message: 'Nama dan email wajib diisi untuk bergabung.' });
      }

      await resend.emails.send({
        from: 'onboarding@resend.dev',
        to: globalThis.process.env.CONTACT_EMAIL_TO || 'onboarding@resend.dev',
        subject: `[NOCTRA] New Community Member: ${name}`,
        html: `
          <h2>Member Baru Bergabung!</h2>
          <p><strong>Nama:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p>Segera sapa member baru kita di NOCTRA Urban Night Cycling Club.</p>
        `,
      });

      return res.status(200).json({ success: true });
    }

    if (type === 'register' || type === 'cart') {
      if (!name || !email || !phone) {
        return res.status(400).json({ message: 'Nama, email, dan nomor telepon wajib diisi untuk proses checkout.' });
      }

      let snap = new midtransClient.Snap({
        isProduction: false,
        serverKey: globalThis.process.env.MIDTRANS_SERVER_KEY,
      });

      let parameter = {
        transaction_details: {
          order_id: `NOCTRA-${type.toUpperCase()}-${Date.now()}`,
          gross_amount: gross_amount > 0 ? gross_amount : 150000 
        },
        customer_details: {
          first_name: name,
          email: email,
          phone: phone
        }
      };

      const transaction = await snap.createTransaction(parameter);
      
      return res.status(200).json({ token: transaction.token });
    }

    return res.status(404).json({ message: `Endpoint untuk action '${type}' tidak ditemukan.` });

  } catch (error) {
    console.error(`[API ACTIONS ERROR - ${type}]:`, error);
    return res.status(500).json({ message: error.message || 'Terjadi kesalahan pada internal server.' });
  }
}