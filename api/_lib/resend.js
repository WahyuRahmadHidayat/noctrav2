import { Resend } from 'resend';
export const resend = new Resend(globalThis.process.env.RESEND_API_KEY);