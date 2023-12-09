import { z } from 'zod';

export const contactUsSchema = z.object({
  service: z.string().min(1),
  name: z.string().min(1),
  lastName: z.string().min(1),
  email: z.string().email().min(1),
  phone: z
    .string()
    .regex(
      /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/,
      'Invalid phone number'
    ),
  nationality: z.string().min(1),
  message: z.string().min(1).max(255),
  terms: z.boolean(),
});
