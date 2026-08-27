import { z } from 'zod';

export const contactSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  message: z.string().optional()
});

export const joinSchema = z.object({
  name: z.string().min(1),
  email: z.string().email()
});

export const checkoutSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  phone: z.coerce.string().min(5),
  productId: z.union([z.string(), z.number()]).optional(),
  gross_amount: z.any().optional().transform(val => {
    const num = Number(val);
    return isNaN(num) || num <= 0 ? 150000 : num;
  })
});

export const validateBody = (body, schema) => {
  const result = schema.safeParse(body || {});
  if (!result.success) {
    const err = result.error.issues.map(e => `${e.path[0] || 'input'}: ${e.message}`).join(', ');
    throw new Error(err);
  }
  return result.data;
};