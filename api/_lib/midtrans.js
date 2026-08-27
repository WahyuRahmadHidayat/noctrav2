import midtransClient from 'midtrans-client';
export const snap = new midtransClient.Snap({
  isProduction: false,
  serverKey: globalThis.process.env.MIDTRANS_SERVER_KEY,
});